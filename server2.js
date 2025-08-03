import http from 'http';
import fs from 'fs/promises';
import url from 'url';
import path from 'path';

const PORT = 3000;

const server = http.createServer((req, res) =>{
    res.writeHead(200, {'Content-Type' : 'text/html'})
    res.write('<h2>Hello World<h2>');
})

server.listen(PORT, () =>{
    console.log(`Server is running on ${PORT}`);
})