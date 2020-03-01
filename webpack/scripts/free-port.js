
module.exports = function (port) {
  if(process.platform && process.platform !== 'win32') {
    // mac && linux env
    const args = process.argv.slice(2);
    let portObj = args && args[0];  // get port num
    if(portObj && portObj.indexOf('--') > -1) {
      port = portObj.split('--')[1];
    }
    let command = `lsof -i :${port}`;
    let exec = require('child_process').exec;
    exec(command, (err, stdout, stderr) => {
      if(err) {
        console.log(`the command wrong ${err}`);
        return;
      }
      stdout.split('\n').filter((line) => {
        let row = line.trim().split(/\s+/);
        let address = row[1];
        if(address !== undefined && address !== 'PID'){
          exec('kill -9 ' + address, (err, stdout, stderr) => {
            if (err) {
                return console.log('kill the port failed');
            }
            console.log('has killed the port');
        });
        }
      });
    });
  }
}
