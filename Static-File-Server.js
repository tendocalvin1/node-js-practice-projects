// 🧪 Mini Project: Static File Server
// Goal: Combine http, fs, and path modules
// Task:
//     Create a Node.js server that serves any static file (HTML, CSS, JS) from a public folder.
//     When a user visits /, serve index.html.
//     When they visit /about, serve about.html.
//     Add support for /styles.css, /script.js, etc.


import http from 'http';
import path from 'path';
import url from 'url';
import fs from 'fs/promises';
const PORT = process.env.PORT


// getting current path
const __filename = url.fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename) 

const server = http.createServer(async( req, res) =>{
    // get method
    try{
        if(req.method === 'GET'){
            let filepath;
            let contentType = 'text/html'; 
            if(req.url === '/'){
                filepath = path.join(__dirname, 'public2','index3.html')
            }else if(req.url === '/about'){
                filepath = path.join(__dirname, 'public2','about2.html')
            }else if(req.url === '/script.js'){
                filepath = path.join(__dirname, 'public2','script.js')
                contentType = 'application/javascript'
            }else if(req.url === '/styles.css'){
                filepath = path.join(__dirname, 'public2','style.css')
                contentType ='text/css' 
            }else{
                throw new error('404 Page Not Found')
            }


            const data = await fs.readFile(filepath)
            res.setHeader('Content-type', contentType)
            res.write(data)
            res.end()

        }else{
            throw new Error('Method not Accessible')
        }
    }catch(error){
        res.writeHead(500, {'Content-type' : 'text/html'})
        res.end('Server error')
    }
})


server.listen(PORT, () =>{
    console.log(`Server is running on ${PORT}`)
})