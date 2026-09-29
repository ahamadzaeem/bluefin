import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';

(async () => {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 });

  console.log('Navigating to http://localhost:5173/ ...');
  await page.goto('http://localhost:5173/', { waitUntil: 'networkidle0' });

  const outDir = '/Users/amanyoonus/Desktop/fish/site_verification';
  fs.mkdirSync(outDir, { recursive: true });

  // 1. Full page screenshot
  console.log('Capturing full page screenshot...');
  await page.screenshot({ path: path.join(outDir, '00_full_page.jpg'), fullPage: true, quality: 90 });

  // 2. Hero screenshot
  const heroEl = await page.$('#hero');
  if (heroEl) {
    await heroEl.screenshot({ path: path.join(outDir, '01_hero.jpg'), quality: 90 });
  }

  // 3. Capsule section screenshot
  const diffEl = await page.$('#difference');
  if (diffEl) {
    await diffEl.screenshot({ path: path.join(outDir, '02_capsule.jpg'), quality: 90 });
  }

  // 4. Products section screenshot
  const prodEl = await page.$('#products');
  if (prodEl) {
    await prodEl.screenshot({ path: path.join(outDir, '03_products.jpg'), quality: 90 });
  }

  // 5. Family section screenshot
  const famEl = await page.$('#family');
  if (famEl) {
    await famEl.screenshot({ path: path.join(outDir, '04_family.jpg'), quality: 90 });
  }

  // 6. Why BlueFin screenshot
  const whyEl = await page.$('#why-bluefin');
  if (whyEl) {
    await whyEl.screenshot({ path: path.join(outDir, '05_why_bluefin.jpg'), quality: 90 });
  }

  // 7. Routine screenshot
  const routineEl = await page.$('#routine');
  if (routineEl) {
    await routineEl.screenshot({ path: path.join(outDir, '06_routine.jpg'), quality: 90 });
  }

  // 8. Where to find us screenshot
  const findEl = await page.$('#where-to-find');
  if (findEl) {
    await findEl.screenshot({ path: path.join(outDir, '07_where_to_find.jpg'), quality: 90 });
  }

  // 9. Footer screenshot
  const footEl = await page.$('.site-footer');
  if (footEl) {
    await footEl.screenshot({ path: path.join(outDir, '08_footer.jpg'), quality: 90 });
  }

  // 10. Click View Product modal
  console.log('Testing View Product modal...');
  await page.click('.view-modal-btn[data-product="1000"]');
  await new Promise(r => setTimeout(r, 600));
  await page.screenshot({ path: path.join(outDir, '09_product_modal.jpg'), quality: 90 });
  await page.click('#modalCloseBtn');
  await new Promise(r => setTimeout(r, 400));

  // 11. Click Find a Pharmacy modal
  console.log('Testing Pharmacy Locator modal...');
  await page.click('#findPharmacyBtn');
  await new Promise(r => setTimeout(r, 600));
  await page.screenshot({ path: path.join(outDir, '10_pharmacy_modal.jpg'), quality: 90 });
  await page.click('#pharmacyModalCloseBtn');
  await new Promise(r => setTimeout(r, 400));

  // 12. Open Cart drawer
  console.log('Testing Cart drawer...');
  await page.click('#cartTrigger');
  await new Promise(r => setTimeout(r, 600));
  await page.screenshot({ path: path.join(outDir, '11_cart_drawer.jpg'), quality: 90 });

  console.log('All tests and screenshots completed successfully!');
  await browser.close();
})();
