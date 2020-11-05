const  connect = require('./play');
let connection;

const handleUserInput = function(data) {
  if (data === '\u0003') {
    process.exit();
  } else if (data === "w") {
    connection.write("Move: up")
  } else if (data === "a") {
    connection.write("Move: left")
  } else if (data === "s") {
    connection.write("Move: down")
  } else if (data === "d") {
    connection.write("Move: right")
  }
}

const setupInput = function(conn) {
  connection = conn;

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput)

  return stdin;
}

// setupInput(connect())

// conn.on('connect', () => {

//   // setTimeout(() => {
//   //   conn.write('Move: up');
//   // }, 1000)
//   // setTimeout(() => {
//   //   conn.write('Move: left');
//   // }, 100);
//   // setInterval(() => {
//   //   conn.write('Move: left');
//   // }, 50)
//   //conn.write('Move: right');

// })

module.exports = setupInput;