const http = require('http');
const fs = require('fs');

let routes = {
    "/": "index.html",
    "/about": "about.html",
    "/contact": "contact.html",
    "/demo": "demoHTML.htm",
    "/blog": "blog.html" // invalid route as file doesn't exist-> return 404
}


// fs.appendFile("POLL1.html", "POLL ANS", function (err) {
//     if (err) {
//         console.log('Error writing file: ' + err);
//         throw err;
//     }
//     console.log("Saved!");
// });

// fs.open("demoNEW3.html", "w", function (err, file) {
//     if (err) {
//         console.log('Error opening file: ' + err);
//         throw err;
//     }
//     console.log('file opened');    
// });


// fs.writeFile("NewFileWrite.txt", data, function (err) {
//     if (err) {
//         console.log('Error writing file: ' + err);
//         throw err;
//     }
//     console.log("Write Complete!");
// });

// fs.unlink("DEMONEW2.html", function (err) {
//     if (err) {
//         console.log('Error deleting file: ' + err);
//         throw err;
//     }
//     console.log("File deleted!");
// });


fs.rename("demoNEW3.html", "demoNEW-11111111111.html", function (err) {
    if (err) {
        console.log('Error renaming file: ' + err);
        throw err;
    }
    console.log("File renamed!");
});



//create a server object:
const app = http.createServer(function (req, res) {


    if (routes[req.url]) {
        fs.readFile(routes[req.url], (err, data) => {
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
