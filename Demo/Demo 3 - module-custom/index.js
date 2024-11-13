const http = require('http');
const disBonjour = require('./module/bonjour');

console.log(disBonjour('Nicolas'));

const PORT = 8000;

const server = http.createServer();

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})
