const puppeteer = require('puppeteer');

async function convertToPDF() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Set optional viewport size
  await page.setViewport({ width: 1200, height: 800 });

  // Enter the path to the page
  await page.goto('http://localhost:8080', { waitUntil: 'networkidle0' });

  // Generate text-editable PDF from the HTML page
  await page.pdf({ path: 'resume.pdf', format: 'A4' });

  // Close the browser
  await browser.close();
}

convertToPDF();
