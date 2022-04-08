const http = require('http');
const fs = require('fs');
const httpStatus = require('http-status-codes');
const EventEmitter = require('events'); // 1. Add request listener


class MyEmitter extends EventEmitter {} // 2. extends event emitter
const myEmitter = new MyEmitter(); //  create object of event emitter

myEmitter.once('eventOnce', () => {
    console.log('Node.js');
});

myEmitter.emit('MongoDB'); // will not work
myEmitter.emit('Express.Js'); // will not work
myEmitter.emit('React.Js'); // will not work

myEmitter.emit('eventOnce'); //will work


const sendErrorResponse = (res) => {
    res.writeHead(httpStatus.StatusCodes.NOT_FOUND, { 'Content-Type': 'text/html' });
    res.end('<h1>404 Not Found</h1>');
}

const customReadFile = (filePath, res) => {
    if (fs.existsSync(filePath)) {
        fs.readFile(filePath, (err, data) => {
            if (err) {
                console.log(err);
                sendErrorResponse(res);
                return;
            }
            res.end(data);
        });
    }
    else {
        sendErrorResponse(res);
    }
}

//create a server object:
const app = http.createServer(function (req, res) {



    let url = req.url;

        if (url.indexOf('.html') !== -1) {
            res.writeHead(httpStatus.StatusCodes.OK, { 'Content-Type': 'text/html' });
            customReadFile(`./views/${url}`, res);
        }
        else if (url.indexOf('.css') !== -1) {
            res.writeHead(httpStatus.StatusCodes.OK, { 'Content-Type': 'text/css' });
            customReadFile(`./public/${url}`, res);
        }
        else if (url.indexOf('.js') !== -1) {
            res.writeHead(httpStatus.StatusCodes.OK, { 'Content-Type': 'text/javascript' });
            customReadFile(`./public/${url}`, res);
        }
        else if (url.indexOf('.png') !== -1) {
            res.writeHead(httpStatus.StatusCodes.OK, { 'Content-Type': 'image/png' });
            customReadFile(`./public/${url}`, res);
        }
        else {
            sendErrorResponse(res);
        }


}).listen(3000, function () {
    console.log("server start at port 3000"); //the server object listens on port 3000
});
