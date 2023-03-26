const { test, expect } = require("@playwright/test");
const { lighthouse, loadLighthousePlugin } = require("playwright-lighthouse");

test("Measures page metrics", async ({ page }) => {
  const { lhr } = await lighthouse(page, {
    port: new URL(page.url()).port,
    plugins: [loadLighthousePlugin("lighthouse-plugin-field-performance")],
    settings: {
      formFactor: "desktop",
      throttling: {
        rttMs: 40,
        throughputKbps: 10_000,
        cpuSlowdownMultiplier: 1,
      },
    },
  });

  // Access Lighthouse results.
  const { categories } = lhr;
  const {
    performance,
    accessibility,
    "best-practices": bestPractices,
  } = categories;

  // Assertions.
  expect(performance.score).toBeGreaterThan(0.9);
  expect(accessibility.score).toBeGreaterThan(0.9);
  expect(bestPractices.score).toBeGreaterThan(0.9);
});
