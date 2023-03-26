// @ts-check
const { test, expect } = require("@playwright/test");

  await page.goto("mywebclass.org");

  // Measure page load time.
  const loadTime = await page
    .metrics()
    .then((metrics) => metrics.TaskDurationMs);

  // Measure accessibility score.
  const accessibilityScore = await page.accessibility
    .snapshot()
    .then((snapshot) => snapshot.score);

  // Measure best practices score.
  const bestPracticesScore = await page
    .goto("https://web.dev")
    .then(() => page.metrics())
    .then((metrics) => metrics.BestPracticesScore);

  // Measure first contentful paint (FCP).
  const fcp = await page.evaluate(() => {
    const performanceEntries = performance.getEntriesByType("paint");
    const fcpEntry = performanceEntries.find(
      (entry) => entry.name === "first-contentful-paint"
    );
    return fcpEntry.startTime;
  });

  // Measure time to interactive (TTI).
  const tti = await page.evaluate(() => {
    const performanceEntries = performance.getEntriesByType("paint");
    const fcpEntry = performanceEntries.find(
      (entry) => entry.name === "first-contentful-paint"
    );
    const interactiveEntry = performanceEntries.find(
      (entry) => entry.name === "interactive"
    );
    return interactiveEntry.startTime - fcpEntry.startTime;
  });

  // Measure total blocking time (TBT).
  const tbt = await page.metrics().then((metrics) => metrics.TotalBlockingTime);

  // Measure cumulative layout shift (CLS).
  const cls = await page
    .metrics()
    .then((metrics) => metrics.CumulativeLayoutShiftScore);

  // Measure page size, number of requests, and overall size.
  const networkMetrics = await page.metrics().then((metrics) => ({
    pageSize: metrics.DocumentSize,
    numRequests: metrics.RequestCount,
    overallSize: metrics.BytesReceived,
  }));

  // Measure bundle size.
  const bundleSize = await page.evaluate(() => {
    const scriptTags = Array.from(document.querySelectorAll("script[src]"));
    const bundleScripts = scriptTags.filter((tag) =>
      tag.src.includes("bundle")
    );
    const bundleSizes = bundleScripts
      .map((tag) => tag.src)
      .map(async (src) => {
        const response = await fetch(src);
        const buffer = await response.arrayBuffer();
        return buffer.byteLength;
      });
    return Promise.all(bundleSizes).then((sizes) =>
      sizes.reduce((sum, size) => sum + size, 0)
    );
  });

  console.log(`Page Load Time: ${loadTime}ms`);
  console.log(`Accessibility Score: ${accessibilityScore}`);
  console.log(`Best Practices Score: ${bestPracticesScore}`);
  console.log(`First Contentful Paint: ${fcp}ms`);
  console.log(`Time to Interactive: ${tti}ms`);
  console.log(`Total Blocking Time: ${tbt}ms`);
  console.log(`Cumulative Layout Shift: ${cls}`);
  console.log(`Page Size: ${networkMetrics.pageSize} bytes`);
  console.log(`Number of Requests: ${networkMetrics.numRequests}`);
  console.log(`Overall Size: ${networkMetrics.overallSize} bytes`);
  console.log(`Bundle Size: ${bundleSize} bytes`);

  // Assert that the accessibility score is at least 0.9 and the TBT is less than 150ms.
  expect(accessibilityScore).toBeGreaterThan(0.9);
  expect(tbt).toBeLessThan(150);
});
