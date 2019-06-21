var request = require('request'),
    apiKey = 'acc_d3b8479014ade5a',
    apiSecret = '7b01c8f7a8f9106d7bbb1cdf1e97b70e',
    imageUrl = 'https://imagga.com/static/images/tagging/wind-farm-538576_640.jpg';

var fs = require('fs');
var array = fs.readFileSync('captions.txt').toString().split("\n");

request.get('https://api.imagga.com/v2/tags?image_url='+encodeURIComponent(imageUrl), function (error, response, body) {
   if(response.statusCode == 200)
        var v = JSON.parse(body);
        var v = v["result"]["tags"]

        for(i=0; i < v.length; i++){
            
            var key = v[i]["tag"]["en"]
            console.log(key)
            console.log(v.length)
            
             for(i in array){
                 var caption = array[i];
                 if(caption.includes(key)){
                     console.log("yeet")
                 }
                
             }
        }

}).auth(apiKey, apiSecret, true);