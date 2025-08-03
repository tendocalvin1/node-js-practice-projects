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

// const readFile2 = async () =>{
//     try{
//     await fs.readFile('source.txt', 'utf-8')
//     console.log(data)
//     }catch(error){
//     console.log(error)
//     }
    
// }

// writeFile()
const CopyFileContent = async () =>{
    try{
        const data = await fs.readFile('notes.txt', 'utf-8')
        await fs.writeFile('destination.txt', data)
        console.log('Content copied from notes.txt to destination.txt')
    }catch(error){
        console.log(error)
    }
}



appendFile();
readFile();
CopyFileContent();