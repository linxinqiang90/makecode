const {app, BrowserWindow, ipcMain, globalShortcut, Menu, MenuItem, session} = require('electron');
const path = require('path')
const url = require('url')
const cp = require('child_process');
const isDev = require('electron-is-dev');
const os = require('os');

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let splash;
let win;
let devmng;
console.info(app)
app.commandLine.appendSwitch('ignore-gpu-blacklist', 'true')
function createWindow () {
  // Create the browser window.
  win = new BrowserWindow({
    width: 1400,
    height: 775,
    minWidth: 1200,
    minHeight: 775,
    backgroundColor: '#31C7D5',
    show: false
  })
  // and load the index.html of the app.
  
  win.loadURL(url.format({
    pathname: path.join(__dirname, 'entry.html'),
    protocol: 'file:',
    slashes: true
  }))
  //win.loadURL('http://127.0.0.1:8080/#editor')

  // Open the DevTools.
  win.setMenu(null);
  win.webContents.on("did-stop-loading", () => {
    if (isDev) {
        win.webContents.openDevTools()
    }
    win.webContents.send("start",{});
  });
  win.once('ready-to-show', () => {
    win.show()
  });
  
  // Emitted when the window is closed
  win.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    win = null
  })

}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q

  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (win === null) {
    createWindow()
  }
})
