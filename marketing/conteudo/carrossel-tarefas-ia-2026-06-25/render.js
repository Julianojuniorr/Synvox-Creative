// Renderiza cada .slide do carrossel.html em PNG 1080x1350.
// Reaproveita o Playwright/Chromium já instalados na máquina (sem npm install).
const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const file = 'file://' + path.resolve(__dirname, 'carrossel.html');
  const outDir = path.resolve(__dirname, 'instagram');

  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1080, height: 1350 }, deviceScaleFactor: 2 });
  await page.goto(file, { waitUntil: 'networkidle' });
  // garante que as fontes carregaram
  await page.evaluate(() => document.fonts.ready);

  const slides = await page.$$('.slide');
  let i = 1;
  for (const slide of slides) {
    const n = String(i).padStart(2, '0');
    await slide.screenshot({ path: path.join(outDir, `slide-${n}.png`) });
    console.log(`slide-${n}.png ok`);
    i++;
  }
  await browser.close();
  console.log(`Pronto: ${slides.length} slides renderizados em instagram/`);
})();
