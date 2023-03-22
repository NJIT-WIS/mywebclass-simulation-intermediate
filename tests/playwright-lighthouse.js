const { chromium } = require('playwright');
const lighthouse = require('lighthouse');
const { report } = require('@lhci/cli');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('https://eds435.github.io/mywebclass-simulation-intermediate/');
  const result = await lighthouse(page.url(), {
    port: new URL(browser.wsEndpoint()).port,
  });
  await browser.close();
  await report(result.lhr, {
    outputDir: './lighthouse-report',
    reportName: 'My GitHub Page Performance Report',
    budgetsFile: './lighthouse-budgets.json',
  });
})();