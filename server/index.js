const express=require('express');
const bodyParser=require('body-parser');
const cors=require('cors');//to verify no err due to differet ports or cross origin error

const PORT=3000;
const api=require('./routes/api');
const app=express();
app.use(cors());

app.use(bodyParser.json());
app.use('/api',api);

app.get('/',(req,res)=>{
    res.send('hello');
});

app.listen(PORT,()=>{
    console.log('server started on port '+PORT);
})