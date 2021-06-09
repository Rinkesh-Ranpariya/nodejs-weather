const fs = require("fs");
const http = require("http");
var requests = require('requests');

const data = fs.readFileSync("index.html", "UTF-8");

function getdata(obj, data) {
  let datalog = data.replace("{%location%}", obj.name);
  datalog = datalog.replace("{%country%}", obj.sys.country);
  datalog = datalog.replace("{%temp%}", obj.main.temp);
  datalog = datalog.replace("{%min%}", obj.main.temp_min);
  datalog = datalog.replace("{%max%}", obj.main.temp_max);
  datalog = datalog.replace("{%weatherStatus%}", obj.weather[0].main);
  // console.log(obj.weather[0].main)
  return datalog;
}

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    requests(
      "http://api.openweathermap.org/data/2.5/weather?q=Surat&units=metric&appid=7bc2cda0fa50d0b20ffe2ef0d2426e4a"
    )
      .on("data", (dt) => {
        // console.log(dt)
        const obj = JSON.parse(dt);
        let arrayofobj = [obj];
        // console.log(arrayofobj[0].main.temp);
        const answere=arrayofobj.map((o) => getdata(o, data)).join('');
        res.end(answere);

      })
      .on("end", (error) => {if(error) return console.log("error end")});

    // res.end("jay swaminarayan");
  } else {
    res.end("error error");
  }
});

server.listen(8000, "127.0.0.1");