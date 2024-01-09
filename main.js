const { app, BrowserWindow } = require('electron');

let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
        },
        autoHideMenuBar: true, // Oculta la barra de menú
    });

    mainWindow.loadFile('index.html');
    mainWindow.maximize();

    //mainWindow.webContents.openDevTools();

    mainWindow.on('closed', function () {
        mainWindow = null;
    });
}

app.whenReady().then(createWindow);

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit();
});

app.on('activate', function () {
    if (mainWindow === null) createWindow();
});
