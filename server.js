// 🔹 1.2. Basic HTTP Server
//     Create server using native http module
//     Route: /, /about, /contact
//     ✅ Learn: http.createServer, routing, response headers

import http from 'http';
import fs from 'fs/promises';
import url from 'url';
import path from 'path';
const PORT = process.env.PORT

// get current path
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = http.createServer(async(req, res) =>{
    try{
        // get request
    if(req.method === 'GET'){
        let filepath;
        if(req.url === '/'){
            filepath = path.join(__dirname, 'public','index.html');
        }else if(req.url ==='/about'){
            filepath = path.join(__dirname, 'public','about.html');
        }else if(req.url === '/contact'){
            filepath = path.join(__dirname, 'public', 'contact.html')
        }else{
            throw new Error('404 Not Found');
        }

        const data = await fs.readFile(filepath);
        res.setHeader('Content-Type','text/html');
        res.write(data)
        res.end();
    }else{
        throw new Error('Method not allowed');
    }
    }catch(error){
        res.writeHead(500, {'Content-type' :'text/plain'})
        res.end('Server Error')
    }


})

server.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}`);
})

