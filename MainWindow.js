const { BrowserWindow } = require('electron')

class MainWindow extends BrowserWindow {
    constructor(file, isDev) {
        super({
            title: 'Shneckulator',
            width: isDev ? 840 : 400,
            height: 550,
            //icon: `${__dirname}/assets/icons/icon.png`,
            resizable: isDev ? true : false,
            show: false,
            opacity: 0.9,
            webPreferences: {
              nodeIntegration: true,
              enableRemoteModule: true,
            },
          })

          this.loadFile(file)

          if (isDev) {
            this.webContents.openDevTools()
          }
    }
}

module.exports = MainWindow