// Modules to control application life and create native browser window
const {app, BrowserWindow, Menu, Tray} = require('electron');

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;
const execa = require('execa');
path = require('path');
const log4js = require('log4js');
log4js.configure({
    appenders: {makecode: {type: 'file', filename: 'makecode.log'}},
    categories: {default: {appenders: ['makecode'], level: 'debug'}}
});

const logger = log4js.getLogger('makecode');


function createWindow(data) {

    // Create the browser window.
    mainWindow = new BrowserWindow({
        width: 1500,
        height: 800,
        center: true,
        backgroundColor: '#80FFFFFF',
        title: "test"
    });

    if (data.type == 'file') {
        mainWindow.loadFile(data.url);
    } else {
        // and load the index.html of the app.
        // mainWindow.loadURL(`http://locahost:${port}`)
        mainWindow.loadURL(data.url);
    }
    // Open the DevTools.
    // mainWindow.webContents.openDevTools()

    // Emitted when the window is closed.
    mainWindow.on('closed', function () {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        mainWindow = null
    })
}

/**
 *
 * @returns {Promise<void>}
 */

async function startApp() {
    // Pipe the child process stdout to the current stdout
    logger.info('start web app...');
    process.argv[2] = 'serve';
    process.argv[3] = '--noBrowser';
    process.argv[4] = '--just';
    // process.argv[5] = '--hostname';
    // process.argv[6] = 'localhost';
    // process.argv[7] = '--port';
    // process.argv[8] = '3232';
    // process.argv[9] = '--wsport';
    // process.argv[10] = '3233';
    process.env["HOME"] = path.join(__dirname);
    console.info(process.env["HOME"]);
    try {
        require(path.join(__dirname, 'node_modules/pxt/pxt'));
        createWindow({type: "url", url: 'http://localhost:3232#local_token=48d9da18-d76f-4fc0-0943-62760c5294321'});
    } catch (e) {
        logger.error(e)
        return;
    }
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', startApp);

// Quit when all windows are closed.
app.on('window-all-closed', function () {
    // On macOS it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (mainWindow === null) {
        createWindow()
    }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
