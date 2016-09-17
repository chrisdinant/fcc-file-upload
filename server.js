var express = require('express');
var app = express();
var multer = require('multer');
var upload = multer();

app.use("/css", express.static(__dirname + "/css"));
app.set('view engine', 'ejs');
app.set('json spaces', 2);


app.get('/', function(req, res) {
    res.render('main');
});

app.post('/upload', upload.single('myFile'), function (req, res, next) {
    var result = {"file_size": req.file.size};
    res.send(JSON.stringify(result));
});




var port = Number(process.env.PORT || 8080);
app.listen(port, function(){
    console.log("check");
});