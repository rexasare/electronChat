const { ipcRenderer, contextBridge } = require("electron");

contextBridge.exposeInMainWorld("electron", {
  notificationApi: {
    sendNotification(message) {
      ipcRenderer.send("send:notify", message);
    },
  },
  appApi: {
    quitApp() {
      ipcRenderer.send("app-quit");
    },
  },
  batteryApi: {},
});
