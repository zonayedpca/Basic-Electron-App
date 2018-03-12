var app = require('electron').app,
      BrowserWindow = require('electron').BrowserWindow;

app.on('ready', function() {
  //Your main code will be here
  var mainWindow = new BrowserWindow({
    width: 800,
    height: 600
  });
  //Load the content
  mainWindow.loadURL('file://' + __dirname + '/public/index.html');
});
