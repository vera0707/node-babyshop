const request = require('request');

async function loginCheck(form) {
    const getLogin = await new Promise(resolve => {
        request.post({
            url :'http://localhost:3000/login',
            method: 'POST',
            headers: {
               'content-type': 'application/json'
            },
            body: JSON.stringify(form),
        },(err,res,body)=>{
            if(!err && res.statusCode == 200){
                const data = JSON.parse(body);
                resolve(data);
            }
        });
    });

    return {
        getLogin
    };
}


module.exports = loginCheck;