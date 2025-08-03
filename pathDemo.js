
import path from 'path';
import url from 'url';
const filePath = './dir1/dir2/destination.txt';
// Get Base File Name
//     Task: Use path.basename() to print the base name of the current file.
console.log(path.basename(filePath));


// Get File Extension
//     Task: Use path.extname() to print the file extension of a given filename.
console.log(path.extname(filePath));

// Join Paths
//     Task: Join folder and filename parts into a valid file path using path.join().
console.log(path.join(filePath));

// Build Dynamic File Paths
//     Task: Create a utility that builds a file path 
//     from an array like: ['public', 'data', 'info.txt'].

console.log(path.join('public', 'data', 'info.txt'))

// Normalize a File Path
//     Task: Normalize a messy file path like './folder//subfolder/../file.txt'.
console.log(path.join('./folder//subfolder/../file.txt'))