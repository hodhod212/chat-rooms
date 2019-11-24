const express = require('express');
const app = express();
app.set('port',process.env.PORT || 3000)
app.get('/',(req,res,next)=>{
    //res.send('<h1>Hello</h1>')
    res.sendFile(__dirname + '/views/login.htm')
});
app.listen(app.get('port'),()=>{
    console.log('Chat app running on port: ',app.get('port'));
});