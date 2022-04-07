const http = require('http');
const fs = require('fs');

let routes = {
    "/": "index.html",
    "/about": "about.html",
    "/contact": "contact.html",
    "/demo": "demoHTML.htm",
    "/blog": "blog.html" // invalid route as file doesn't exist-> return 404
}

//create a server object:
const app = http.createServer(function (req, res) {

    if (routes[req.url]) {
        fs.readFile(routes, (err, data) => {
            if (err) {                
                res.writeHead(404, "File Not Found");
                res.end();
            }
            else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            }
        })
    }

}).listen(3000, function () {
    console.log("server start at port 3000"); //the server object listens on port 3000
});
