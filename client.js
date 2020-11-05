const net = require('net');
const { IP, PORT } = require('./constants');
/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    IP,
    PORT
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 
  
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });

  conn.on('connect', () => {
    console.log('Connection established!')
    conn.write("Name: FOK");
    // conn.write('Move: up')
  });
  conn.on('connect', () => {

    // setTimeout(() => {
    //   conn.write('Move: up');
    // }, 1000)
    // setTimeout(() => {
    //   conn.write('Move: left');
    // }, 100);
    // setInterval(() => {
    //   conn.write('Move: left');
    // }, 50)
    //conn.write('Move: right');

  })

  // conn.on('data', (data) => {
  //   //console.log('Server says: ', data);
  //   conn.write("Move: up");
  // });


  return conn;
}



// console.log('Connecting ...');
// connect();

module.exports = connect;