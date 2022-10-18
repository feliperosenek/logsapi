const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const  Server  = require("socket.io");
const io = new Server(server);


app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/pipefyimporter', (req, res) => {
  res.sendFile(__dirname + '/index2.html')
});

app.post('/', (req, res) => {
    var data = req.body     
    console.log(data)
    io.emit('log', data);      
 
    res.send('ok')
});

server.listen(process.env.PORT || 3000, () => {
  console.log('listening on *:3000');
});