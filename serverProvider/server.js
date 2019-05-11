const express = require('express');
const bodyParse = require('body-parser');
const url = require('url');
const readFile = require('./readFile');
const port = 3000;
const app = express();

app.use(bodyParse.urlencoded({extended: true}));
app.use(bodyParse.json());
app.use('/json',express.static(__dirname + '/json'));

app.all('*',(req,res,next)=>{
    res.setHeader('content-type','text/json;charset=utf-8');
    next();
});

app.get('/getAllclassify',(req,res)=>{
    readFile('classify').then(result=>{
        res.send(result);
    });
});


app.get('/getFloor',(req,res)=>{
    readFile('floor').then(result=>{
        res.send(result);
    });
});

app.get('/getIndexpic',(req,res)=>{
    readFile('getIndexpric').then(result=>{
        res.send(result);
    });
});

app.get('/getMore',(req,res)=>{
    readFile('getmore').then(result=>{
        res.send(result);
    });
});

app.get('/getGroup',(req,res)=>{
    readFile('getmore').then(result=>{
        result = JSON.parse(result);
        const query = url.parse(req.url,true).query;
        const pages = query.pages || 1;

        res.send(JSON.stringify({
            data: result.data[pages] || [],
            allPage: 6
        }));
    });

});

app.get('/getHot',(req,res)=>{
    readFile('getHot').then(result=>{
        res.send(result);
    });
});

app.get('/getGoods',(req,res)=>{
    readFile('getGoods').then(result=>{
        result = JSON.parse(result);
        const query = url.parse(req.url,true).query;
        const gid = query.gid || '001';

        result.data.forEach(value=>{
            if(value.gid == gid){
                result.data = value;
                res.send(JSON.stringify(result));
            }
        });
    });
});

app.post('/login',(req,res)=>{
    const {phone,pnum} = req.body;

    if( phone == '123456' && pnum == 'admin'){
        res.end(JSON.stringify({
            status:0,
            data:{
                userid:111,
                username:'动脑学院'
            }

        }))
    }else{
        res.end(JSON.stringify({
            status:500,
            data:'密码错误'
        }))
    }
});

app.listen(port,()=>{
    console.log(`The server is connecting on port ${port}......`);
});