const express = require('express');
const fileUpload = require('express-fileupload');
const app = express();
const path = require('path');

const fs = require('fs');
const captions = fs.readFileSync('captions.txt').toString().split("\n");

const   request = require('request'),
        apiKey = 'acc_d3b8479014ade5a',
        apiSecret = '7b01c8f7a8f9106d7bbb1cdf1e97b70e';

app.use(express.static('public'));
app.use(fileUpload());

app.get("/", express.static(path.join(__dirname, "./public")));

app.post('/generate-captions', function(req, res) {
  
    let file = req.files.image.data;
    
    var formData = {
        image: file
    };

    request.post({url:'https://api.imagga.com/v2/tags', formData: formData},
        function (error, response, body) {
            if (error) {
                //send front end message to show error
            } else {

                list=[]

                var v = JSON.parse(body);
                    v = v["result"]["tags"];

                    for (i=0; i < v.length; i++) {
                        var key = v[i]["tag"]["en"];
                        console.log(key);
                        
                        for (var caption in captions) {
                            if (captions[caption].includes(key)) {
                                list.push(captions[caption]);
                            }
                        }
                    }

                    res.send(list)
                    //send these captions to front end inside res.send();
            }
        }).auth(apiKey, apiSecret, true);
  });  

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log('App running on port', PORT));