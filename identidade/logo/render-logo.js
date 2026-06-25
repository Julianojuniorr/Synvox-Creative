// Renderiza cada lockup de logo em PNG com fundo TRANSPARENTE.
const { chromium } = require('playwright');
const path = require('path');

const targets = [
  { id: 'stacked-dark',  file: 'logo-empilhada-preta.png' },
  { id: 'stacked-light', file: 'logo-empilhada-branca.png' },
  { id: 'horiz-dark',    file: 'logo-horizontal-preta.png' },
  { id: 'horiz-light',   file: 'logo-horizontal-branca.png' },
  { id: 'icon',          file: 'icone.png' },
];

(async () => {
  const url = 'file://' + path.resolve(__dirname, 'logo.html');
  const browser = await chromium.launch();
  const page = await browser.newPage({ deviceScaleFactor: 3 });
  await page.goto(url, { waitUntil: 'networkidle' });
  await page.evaluate(() => document.fonts.ready);

  for (const t of targets) {
    const el = await page.$('#' + t.id);
    await el.screenshot({ path: path.join(__dirname, t.file), omitBackground: true });
    console.log(t.file + ' ok');
  }
  await browser.close();
  console.log('Logos renderizadas (fundo transparente).');
})();
