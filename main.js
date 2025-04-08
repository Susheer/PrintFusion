const { app, BrowserWindow } = require('electron')
const printer = require('@thesusheer/electron-printer')

app.whenReady().then(() => {
    createWindow()
})


const createWindow = () => {
    const win = new BrowserWindow({
      width: 800,
      height: 600
    })

    const printerName = printer.getDefaultPrinterName();
    const printers = printer.getPrinters()
    const list = printers.map((a)=>`<li>${a.name}</li>`);

    let htmlContent = `
      <html>
        <head>
          <title>PrintFusion</title>
        </head>
        <body>
          <h1>Welcome to PrintFusion!</h1>
          <h5>default printer: ${printerName}</h5>
          <h4> Printer List</h4>
          <ul>
          ${list}
          </ul>
          <p>
            PrintFusion is an Electron-based application designed to test and validate the functionality of the electron-printer addon. 
            With an intuitive interface and powerful features, it simplifies the process of debugging and verifying printing workflows for Electron applications.
          </p>
        </body>
      </html>
  `;

    win.loadURL(`data:text/html;charset=utf-8,${encodeURIComponent(htmlContent)}`);
  }