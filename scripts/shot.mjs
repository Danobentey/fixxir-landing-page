import { chromium } from "playwright";
import { mkdir, rm } from "node:fs/promises";

const url = process.env.URL ?? "http://localhost:3001";
const outDir = "screenshots";
await rm(outDir, { recursive: true, force: true });
await mkdir(outDir, { recursive: true });

const browser = await chromium.launch({ channel: "chrome" });

const viewports = [
  { name: "desktop", width: 1440, height: 900 },
  { name: "tablet", width: 834, height: 1112 },
  { name: "mobile", width: 390, height: 844 },
  { name: "narrow", width: 320, height: 700 },
];

const problems = [];

for (const vp of viewports) {
  const context = await browser.newContext({
    viewport: { width: vp.width, height: vp.height },
    deviceScaleFactor: 1.5,
  });
  const page = await context.newPage();

  page.on("console", (msg) => {
    if (msg.type() === "error") problems.push(`[${vp.name}] console: ${msg.text()}`);
  });
  page.on("pageerror", (err) => problems.push(`[${vp.name}] pageerror: ${err.message}`));

  await page.goto(url, { waitUntil: "networkidle", timeout: 60_000 });
  await page.waitForTimeout(1500);

  const overflow = await page.evaluate(
    () => document.documentElement.scrollWidth - window.innerWidth,
  );
  if (overflow > 1) problems.push(`[${vp.name}] horizontal overflow of ${overflow}px`);

  // Narrow viewport is only used to catch overflow, not for visual review.
  if (vp.name === "narrow") {
    await page.screenshot({ path: `${outDir}/narrow-hero.png` });
    await context.close();
    continue;
  }

  const height = await page.evaluate(() => document.body.scrollHeight);
  const step = Math.round(vp.height * 0.88);
  const frames = Math.ceil(height / step);

  for (let i = 0; i < frames; i++) {
    await page.evaluate((top) => window.scrollTo(0, top), i * step);
    await page.waitForTimeout(700);
    await page.screenshot({
      path: `${outDir}/${vp.name}-${String(i).padStart(2, "0")}.png`,
    });
  }

  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(400);

  // The nav collapses to a sheet below the lg breakpoint.
  if (vp.width < 1024) {
    const trigger = page.locator('button[aria-label="Open menu"]');
    if (await trigger.count()) {
      await trigger.click();
      await page.waitForTimeout(900);
      await page.screenshot({ path: `${outDir}/${vp.name}-menu.png` });
      await page.locator('button[aria-label="Close menu"]').click();
      await page.waitForTimeout(600);
    } else {
      problems.push(`[${vp.name}] menu trigger not found`);
    }
  }

  // FAQ accordion should open on click.
  const faqButton = page.locator("#faq button").nth(2);
  await faqButton.scrollIntoViewIfNeeded();
  await faqButton.click();
  await page.waitForTimeout(700);
  if ((await faqButton.getAttribute("aria-expanded")) !== "true") {
    problems.push(`[${vp.name}] FAQ item did not expand`);
  }
  await page.screenshot({ path: `${outDir}/${vp.name}-faq-open.png` });

  // Every outbound link should be a real destination.
  const hrefs = await page.$$eval("a[href]", (as) =>
    as.map((a) => a.getAttribute("href") ?? ""),
  );
  const bad = hrefs.filter((h) => !h || h === "#" || h.includes("undefined"));
  if (bad.length) problems.push(`[${vp.name}] suspicious hrefs: ${bad.join(", ")}`);

  await context.close();
}

await browser.close();

if (problems.length) {
  console.log("PROBLEMS FOUND:");
  for (const p of problems) console.log(" -", p);
} else {
  console.log("All checks passed: no errors, no overflow, menu and FAQ work.");
}
