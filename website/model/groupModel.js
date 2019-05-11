const request = require('request');

async function group(pages=1) {

    const getGroup = await new Promise((resolve)=>{
        request.get('http://localhost:3000/getGroup?pages=' + pages,(err,res,body)=>{
            if(!err && res.statusCode == 200){
                const data = JSON.parse(body);
                resolve(data);
            }
        });
    });

    return {
        getGroup
    };
}


module.exports = group;