const fs = require("fs");
const path = require("path");

// fs.readFile(path.join('files', 'test.docx'), (err, data) => {
//     if (err) {
//         throw err;
//     }
//     console.log(data);
// });

const stream = fs.createReadStream(path.join('files', 'test.docx'));

//один чанк - 64кб
stream.on('data', (chunk) => {
    console.log(chunk)
})

stream.on('error', (e) => console.log(e))


const writableStream = fs.createWriteStream(path.join('files', 'test2.txt'));
for (let i = 0; i < 20; i++) {
    writableStream.write(i + '\n');
}
writableStream.end();

//.pipe