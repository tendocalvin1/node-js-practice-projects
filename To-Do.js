// 🔹 1.1. Command-line To-Do App
//     Add, list, and delete tasks using terminal
//     Use fs to store tasks in a JSON file
//     ✅ Learn: Core modules, fs, module.exports, CLI tools

import fs from 'fs/promises';

const tasks = [];

// tasks from json file
const LoadTasks = async () =>{
    try{
        const data = await fs.readFile('tasks.json','utf-8');
        return JSON.parse(data); 
    }catch{
    return [];
}

}

// save tasks back to file
const SaveTasks = async () =>{
    await fs.writeFile('tasks.json', JSON.stringify(tasks, null , 2))
}

// Add a task
const addTask = async () =>{
    const tasks = await LoadTasks();
    console.log('What is tasks ?',tasks)
    tasks.push();
    await SaveTasks();
    // console.log(`Task added: ${tasks}`)

}

// list tasks
const listTasks = async () =>{
    const tasks = await LoadTasks();
    if(tasks.length === 0){
        console.log('No tasks found');
        return;
    }
    console.log('Your Tasks:');
    tasks.forEach((task, index) =>{
        console.log(`${index + 1}. ${task}`)
    })
}

// Deleting a task by number
const deleteTask = async (taskNumber) =>{
    const tasks = await LoadTasks();
    const index = taskNumber - 1;

    if(index < 0 || index > tasks.length){
        console.log('Invalid Task Number');
        return;
    }

    const deleted = tasks.splice(index, 1)
    await SaveTasks(tasks);
    console.log(`Task deleted : ${deleted[0]}`)
}

const [,, command, ...args] = process.argv;

switch (command) {
  case 'add':
    const task = args.join(' ');
    if (!task) {
      console.log('⚠️ Please provide a task to add.');
      break;
    }
    await addTask();
    break;

  case 'list':
    await listTasks();
    break;

  case 'delete':
    const taskNumber = parseInt(args[0], 10);
    if (isNaN(taskNumber)) {
      console.log('⚠️ Please provide a valid task number to delete.');
      break;
    }
    await deleteTask(taskNumber);
    break;

  default:
    console.log(`🚀 Usage:
  node todo.js add "Your task here"
  node todo.js list
  node todo.js delete <task number>`);
}