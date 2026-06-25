// Renderiza cada capa de destaque em PNG 1080x1080.
const { chromium } = require('playwright');
const path = require('path');

const covers = ['sobre','servicos','automacao','sites','posts','branding','contato'];

(async () => {
  const url = 'file://' + path.resolve(__dirname, 'destaques.html');
  const browser = await chromium.launch();
  const page = await browser.newPage({ deviceScaleFactor: 2 });
  await page.goto(url, { waitUntil: 'networkidle' });
  await page.evaluate(() => document.fonts.ready);
  for (const id of covers) {
    const el = await page.$('#' + id);
    await el.screenshot({ path: path.join(__dirname, `destaque-${id}.png`) });
    console.log(`destaque-${id}.png ok`);
  }
  await browser.close();
  console.log('Capas de destaque renderizadas.');
})();
