const loginCheckModel = require('../../model/loginCheckModel');

function loginCheck(req,res) {
    loginCheckModel(req.body).then(data=>{
        if(data.getLogin.status == 0){
            req.session.userid = data.getLogin.data.userid;
            req.session.username = data.getLogin.data.username;
            res.send(JSON.stringify(data.getLogin));
        }else{
            res.send(data);
        }
    });
}

module.exports = loginCheck;