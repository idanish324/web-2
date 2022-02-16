const express = require('express');

const app = express();

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

app.get("/", function(req, res){
  res.render("index.ejs")
});


app.listen(3000, function(){
  console.log("server started on web")
});
