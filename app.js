const http = require('http')
const server = http.createServer()
const fs = require('fs')
var url = require("url")
server.listen(8001, "192.168.101.32", () => {
    console.log("http://192.168.101.32:8001")
})
server.on("request", (req, res) => {
    if (req.url.startsWith('/views')
        || req.url.startsWith("/css")
        || req.url.startsWith("/js")
        || req.url.startsWith("/images")
    ) {
        if (req.url.lastIndexOf('?') != -1) {
            let format = req.url.substr(req.url.lastIndexOf('.') + 1)
            let newreq = format.indexOf("?");
            let newformat = format.substr(0, newreq);
            req.url = req.url.substr(0,req.url.indexOf("?"))
            res.writeHead(200, { 'content-type': "text/" + newformat });
            fs.readFile(__dirname + req.url, (err, data) => {
                if (err) {
                    console.log(err)
                }
                res.end(data)
            })
        } else {
            var type = req.url.substr(req.url.lastIndexOf('.') + 1, req.url.length)
            res.writeHead(200, { 'content-type': "text/" + type });
            fs.readFile(__dirname + req.url, (err, data) => {
                if (err) {
                    console.log(err)
                }
                res.end(data)
            })
        }
    }
})