const electron = require('electron')
const { app, BrowserWindow, webContents, ipcMain } = electron
const path = require('path')
const url = require('url')

let mainWindow, secondWindow

function createWindow(fileStr, options) {
    let win = new BrowserWindow(options)

    win.loadURL(url.format({
        pathname: path.join(__dirname, fileStr),
        protocol: true,
        slashes: true
    }))

    win.once('ready-to-show', () => {
        win.show()
    })

    win.on('close', function() {
        win = null
    })
}

app.on('ready', () => {
    mainWindow = createWindow('index.html', {
        width: 1200,
        height: 800,
        title: 'main',
        backgroundColor: '#cde'
    })

    secondWindow = createWindow('about.html', {
        width: 800,
        height: 500,
        title: 'secondWindow',
        backgroundColor: '#cdd'
    })
})