import { chromium } from "playwright";

const browser = await chromium.launch({ channel: "chrome" });
const page = await browser.newPage({ viewport: { width: 320, height: 700 } });
await page.goto(process.env.URL ?? "http://localhost:3001", {
  waitUntil: "networkidle",
});
await page.waitForTimeout(1200);

const culprits = await page.evaluate(() => {
  const limit = window.innerWidth;
  return [...document.querySelectorAll("*")]
    .map((el) => {
      const r = el.getBoundingClientRect();
      let clipped = false;
      for (let p = el.parentElement; p; p = p.parentElement) {
        const o = getComputedStyle(p).overflowX;
        if (o === "hidden" || o === "clip" || o === "auto" || o === "scroll") {
          clipped = true;
          break;
        }
      }
      return {
        clipped,
        tag: el.tagName.toLowerCase(),
        cls: (el.className?.toString?.() ?? "").slice(0, 90),
        text: (el.textContent ?? "").trim().slice(0, 40),
        right: Math.round(r.right),
        width: Math.round(r.width),
      };
    })
    .filter((e) => e.right > limit + 1 && e.width < 2000 && !e.clipped)
    .slice(0, 15);
});

console.log(JSON.stringify(culprits, null, 2));
await browser.close();
