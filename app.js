const express = require('express');


const app = express();


const bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({extended: true}))

app.get("/", function(req, res){
            res.sendFile( __dirname + "/index.html");
});


app.post("/", function (request, response) {

  

    
function redactAppFunction () {

    var textToScramble = request.body.texttoscramble
    var text = request.body.text

    result = text.includes(textToScramble)
    
   if (result === true) {
    resultFinal = text.replace(textToScramble, '**')
    
   }

    return(resultFinal);
}




redactAppFunction();


    
    response.send(redactAppFunction());
})

app.listen(3000, function(){
    console.log("server started on port 3000");
});