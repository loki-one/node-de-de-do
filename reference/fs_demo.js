const fs = require('fs');
const path = require('path');

// Create folder
// fs.mkdir(path.join(__dirname, '/test'), {}, err => {
//     if (err) throw err;
//     console.log('Folder created...');
// });

// Create File and write to that file instantly
// fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'Hello World!', err => {
//     if (err) throw err;
//     console.log('File created and written to...');

//     //File append and run asynchronously after hello.txt is created.
//     fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), ' I love Node.js', err => {
//         if (err) throw err;
//         console.log('Contents appended to..');
//     }); 
// });
// If you use writeFile again with contents I love node it will overwrite the previous file.
// To not overwrite and append to previous file we use appendFile.

// Read file
// fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err, data) => {
//     if (err) throw err;
//     console.log(data);
// });

// Rename file
fs.rename(path.join(__dirname, '/test', 'hello.txt'), 
          path.join(__dirname, '/test', 'helloworld.txt'), 
          (err) => {
            if (err) throw err;
            console.log('File renamed...');
});