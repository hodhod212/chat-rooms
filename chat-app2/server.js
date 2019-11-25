const express = require('express');
const app = express();
const ChatCat = require('./app');
app.set('port',process.env.PORT || 3000);
app.use(express.static('public'));
//app.set('views','./views')
app.set('view engine','ejs')
app.use('/',ChatCat.router);
app.listen(app.get('port'),()=>{
    console.log('Chat app running on port: ',app.get('port'));
});