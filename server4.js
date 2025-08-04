import http from 'http';
import path from 'path';
import url from 'url';
import fs from 'fs/promises';

const PORT = process.env.PORT

// get current path
const __filename = url.fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)


const server = http.createServer(async(req, res) =>{
    try{
        // get request

    if(req.method ==='GET'){
        let filepath;

    if(req.url === '/'){
        filepath = path.join(__dirname,'public1', 'index2.html');
    }else if(req.url ==='/about'){
        filepath = path.join(__dirname, 'public1','about1.html');
    }else if(req.url === '/contact'){
        filepath = path.join(__dirname, 'public1','contact1.html');
    }else{
        throw new Error('404 Error Page Not Found')
    }

    const data = await fs.readFile(filepath)
    res.setHeader('Content-Type', 'text/html')
    res.write(data)
    res.end()


    }else{
        throw new Error('Method not allowed')
    }
    }catch(error){
        res.writeHead(500, {'Content-type' : 'text/html'})
        res.end('Server error')
    }


})


server.listen(PORT, () =>{
    console.log(`Server is running on ${PORT}`)
})