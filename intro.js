const { appendFile } = require('fs');
const http = require('http');

let routes = {
    "/": "Home",
    "/about": "About",
    "/contact": "Contact",
};

//create a server object:
const app = http.createServer(function (req, res) {

    // http header

    var url = req.url;

    if (routes[url]) { // if url is in routes 
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(routes[url]);
    }
    else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end("Error - not found");
    }

}).listen(3000, function () {
    console.log("server start at port 3000"); //the server object listens on port 3000
});

app.on('request', (req, res) => {
    let body = [];

    req.on('data', (bodyData) => {
        body.push(bodyData);
    });

    req.on('end', () => {
        body = Buffer.concat(body).toString();
        console.log(body);
    });

    console.log(`Method : ${JSON.stringify(req.method)}`);
    console.log(`Url : ${JSON.stringify(req.url)}`);
    console.log(`Headers : ${JSON.stringify(req.headers)}`);

});