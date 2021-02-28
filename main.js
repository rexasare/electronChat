const electron = require("electron"); // Main Process
const { app, BrowserWindow, ipcMain, Notification } = electron;
const path = require("path");
const isDev = !app.isPackaged;

function createWindow() {
  // Browser Window <- Renderer Process
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    backgroundColor: "white",
    webPreferences: {
      nodeIntegration: false,
      worldSafeExecuteJavaScript: true,
      contextIsolation: true,
      preload: path.join(__dirname, "preload.js"),
    },
  });
  win.loadFile("index.html");
  isDev && win.webContents.openDevTools();
}

if (isDev) {
  require("electron-reload")(__dirname, {
    electron: path.join(__dirname, "node_modules", ".bin", "electron"),
  });
}

app.on("ready", () => createWindow());

ipcMain.on("send:notify", (event, { title, message }) => {
  new Notification({ title: title, body: message }).show();
});

ipcMain.on("app-quit", () => {
  app.quit();
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    //check if app is not running on mac
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
