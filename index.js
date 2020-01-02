const puppeteer = require('puppeteer');

const delay = t => new Promise(r => setTimeout(r, t));

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  await delay(1000);
  const $page = await browser.newPage();
  await $page.goto('https://realtor.com');
  const $searchInput = await $page.$('#rdc-main-search-nav-hero-input');
  const $searchButton = await $page.$('button[aria-label="Search"]');

  if (!$searchInput || !$searchButton) {
    throw new Error('Could not find search input');
  }
  await $searchInput.type('80831');
  await $searchButton.click();
  await $page.waitForNavigation();
  // await delay(100000);
  // await browser.close();
})();
