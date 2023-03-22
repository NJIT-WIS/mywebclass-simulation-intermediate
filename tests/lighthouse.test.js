const { test, expect } = require('@playwright/test');
const { execSync } = require('child_process');
const { readFileSync } = require('fs');

test('Lighthouse audit home page', async ({ page }) => {
  await page.goto('http://localhost:3000');

  const url = page.url();
  const reportPath = 'lighthouse-report.json';
  const command = `lighthouse ${url} --output json --output-path ${reportPath} --only-categories=performance`;

  try {
    execSync(command);
  } catch (error) {
    console.error('Error running Lighthouse:', error);
  }

  const lhr = JSON.parse(readFileSync(reportPath));

  const performanceScore = lhr.categories.performance.score * 100;
  expect(performanceScore).toBeGreaterThanOrEqual(60);
});
