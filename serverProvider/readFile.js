const http = require('http');

async function readFile(fileName) {
    const result = new Promise(resolve => {
        http.get(`http://localhost:3000/json/${fileName}.json`,data=>{
            let result = '';
            data.on('data',chunk=>{
                result += chunk;
            });

            data.on('end',()=>{
                resolve(result);
            });
        });
    })

    return result;
};


module.exports = readFile;