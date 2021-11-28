var express = require('express');
var path = require('path');

var app = express();

//for images or something similar
app.use('/public', express.static('public'))

var messageList = [];

app.get('/getMessages', function(req, res){
    res.header("Content-Type",'application/json');
    res.send(JSON.stringify(messageList));
  });

app.get('/sendMessage', function(req, res){
    messageList.push({name: "randomUser", message: "newMessage"});
    res.send('Message sended');
  });

app.get('/', function(req, res){
  var options = {
    root: path.join(__dirname)
  };

  res.sendFile('/public/index.html',options);
});


/* istanbul ignore next */
if (!module.parent) {
  app.listen(3000);
  console.log('Express started on port 3000');
}