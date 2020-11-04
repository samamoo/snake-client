// const  connect  = require('./play');
// let connection;

const handleUserInput = function(data) {
  if (data === '\u0003') {
    process.exit();
  }
}

const setupInput = function() {
  // connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  stdin.on('data', handleUserInput)

  return stdin;
}

setupInput()

module.exports = setupInput;