var hostProcess = process;
var hostRequire = require;

process.once('loaded', function(){

  global.host = {
    process: hostProcess,
    crash: function () {
      hostProcess.crash();
    },
  };

  global.host.ipc = hostRequire('ipc');
});
