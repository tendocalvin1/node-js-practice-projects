import fs from 'fs/promises';
// appendFile()

const appendFile = async () =>{
    try{
        await fs.appendFile('notes.txt', "\n Let's learn the fs Module")

    }catch(error){
        console.log(error)
    }
}


// readFile
const readFile = async () =>{
    try{
    await fs.readFile('notex.txt', 'utf-8')
    console.log(data)
    }catch(error){
    console.log(error)
    }
    
}


appendFile();
readFile();