// 🔹 1.1. Command-line To-Do App
//     Add, list, and delete tasks using terminal
//     Use fs to store tasks in a JSON file
//     ✅ Learn: Core modules, fs, module.exports, CLI tools

import fs from 'fs/promises';


// readFile()
const readFile = async () =>{
    try{
        const data = await fs.readFile('notes.txt','utf8')
        console.log(data);
    }catch(err){
        console.log(err);
    }
}

// writeFile()
const writeFile = async () =>{
    try{
        await fs.writeFile('notes.txt','Hello World. My challenge for this month is to develop an application')
        console.log('File written to');
    }catch(error){
        console.log(error);
    }
}

// appendFile()
const appendFile = async() =>{
    try{
        await fs.appendFile('notes.txt','\n My goal is to become comfortable with both Python and JavaScript')
    }catch(error){
        console.log(error);
    }
}





readFile();
writeFile();
appendFile();
