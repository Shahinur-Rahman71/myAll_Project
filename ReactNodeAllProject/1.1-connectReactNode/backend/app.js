const express = require("express");
const app = express();
const request = require("request");

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.get("/weather", (req, res) => {
  request("http://api.weatherstack.com/current?access_key=7125e3c56eaaadfe9d2eff55a27308f3&query=Rajshahi", function (error, response, body) {

      if(!error && response.statusCode == 200){
          var parseBody = JSON.parse(body);
          var temp_c = parseBody["current"]["temperature"]
          res.send({temperature : temp_c})
        //   res.send({temp_c})
      }
    
  });
});

app.listen(5000, () => {
  console.log("server is running on port 5000");
});
