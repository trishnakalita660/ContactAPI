
let express = require('express');

let bodyParser = require('body-parser');

let mongoose = require('mongoose');

let app = express();

let apiRoutes = require("./api.routes") 
app.use(bodyParser.urlencoded({
    extended:true
}));

app.use(bodyParser.json());

//use mongoose
mongoose.connect('mongodb://localhost/nodeHub', {useNewUrlParser: true});

var db = mongoose.connection;

if(!db){
    console.log('Error while connecting');
}
else{
    console.log('connected to db successfully');

}

//setting up port 

var port = process.env.PORT || 8080 ;

app.get('/', (req,res)=> res.send('The game is on nodemon'));


app.use('/api',apiRoutes);


app.listen(port, function(){
    console.log("The server is up");
});


