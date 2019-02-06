const express=require('express');
const router=express.Router();
const jwt=require('jsonwebtoken');

function verifyToken(req,res,next){
    if(!req.headers.authorization){
        res.status(401).send('Unauthorized Access')
    }
    let token=req.headers.authorization.split(' ')[1]
    if(token === "null"){
        res.status(401).send('Unauthorized Access')
    }
    let payload=jwt.verify(token,'secret_key')
    if(!payload){
        res.status(401).send('Unauthorized Access')
    }
    req.userId=payload.subject
    next()
}

router.get('/',(req,res)=>{
    res.send('api route');
});


router.post('/login',(req,res)=>{
    let userData=req.body;
    
    if(userData.email!='admin' || userData.password!='admin'){
        res.status(401).json({errors:'Invalid Credentials..!'});
    }
    else{
        let payload={
            subject:12345
        }
        let token=jwt.sign(payload,'secret_key')
        res.status(200).send({token});

    }

})

router.get('/specialevents',verifyToken,(req,res)=>{

    res.json({
        msg:'Welcome to protected-route..!'
    })
})

module.exports=router;