import { chromium } from "playwright";

const browser = await chromium.launch({ channel: "chrome" });

for (const width of [320, 360, 390, 768]) {
  const page = await browser.newPage({ viewport: { width, height: 700 } });
  await page.goto(process.env.URL ?? "http://localhost:3001", {
    waitUntil: "networkidle",
  });
  await page.waitForTimeout(1000);
  const result = await page.evaluate(() => {
    window.scrollTo(9999, 0);
    return {
      scrolledX: window.scrollX,
      bodyOverflowX: getComputedStyle(document.body).overflowX,
    };
  });
  console.log(width, JSON.stringify(result));
  await page.close();
}

await browser.close();
