import puppeteer from 'puppeteer';

const iniciarSesion = async () => {
    const browser = await puppeteer.launch({
      executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
      headless: false,
      defaultViewport: null,
    });
  
    const page = await browser.newPage();
  
    await page.goto('http://cedisa.pwgestion.com.ar/Account/Login');
    await page.waitForSelector('#UserName');
    await page.waitForSelector('#Password');
  
    await page.type('#UserName', 'esilva@gisbertrepuestos.com.ar');
    await page.type('#Password', 'wismi');
    await page.click('.btn.btn-block.btn-info');
    await page.waitForNavigation();
  
    // Simular clic en el botón de exportación
    await page.click('.btn.btn-success.btn-block'); // Reemplaza con el selector correcto
  
    // Esperar hasta que la descarga se complete
    await page.waitForFunction(() => {
        // Reemplaza esta condición con algo que indique que la descarga ha finalizado
        return document.querySelector('.download-complete') !== null;
      }, { timeout: 60000 })
  
    await browser.close();
  };
  
  iniciarSesion();