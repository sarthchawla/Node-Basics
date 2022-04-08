const http = require('http');
const fs = require('fs');
const httpStatus = require('http-status-codes');
const mongodb = require('mongodb');

function insert() {
    // step1: connect to the server using client
    mongodb.MongoClient.connect('mongodb://localhost:27017/', (err, client) => {
        if (err) {
            console.log(err);
            return;
        }
        // step2: connect to the database/create the database
        const db = client.db('testDB');
        // step3: create a collection/connect to the collection
        const collection = db.collection('testCollection');
        // step4: insert data into the collection
        collection.insertOne(

            {
                _id: 123,
                name: 'record123',
                age: 20
            }
            , (err, result) => {
                if (err) {
                    console.log(err);
                    return;
                }
                console.log(result);
            });

        collection.insertMany(
            [
                {
                    _id: 1,
                    name: 'many1',
                    age: 200
                },
                {
                    _id: 2,
                    name: 'many2',
                    age: 201
                }
            ], (err, result) => {
                if (err) {
                    console.log(err);
                    return;
                }
                console.log(result);
            });
    });
}

function find(name) {
    // step1: connect to the server using client
    mongodb.MongoClient.connect('mongodb://localhost:27017/', (err, client) => {
        if (err) {
            console.log(err);
            return;
        }
        // step2: connect to the database
        const db = client.db('testDB');
        // step3: connect to the collection
        const collection = db.collection('testCollection');
        // step4: find data in the collection
        collection.find({ name: name }).toArray((err, docs) => {
            if (err) {
                console.log(err);
                return;
            }
            console.log(docs);
        });
        collection.find({}).sort({ name: -1 }).toArray((err, docs) => {
            if (err) {
                console.log(err);
                return;
            }
            console.log("\nAll data:\n");
            console.log(docs);
        });
    });
}

function findOne(age) {
    // step1: connect to the server using client
    mongodb.MongoClient.connect('mongodb://localhost:27017/', (err, client) => {
        if (err) {
            console.log(err);
            return;
        }
        // step2: connect to the database
        const db = client.db('testDB');
        // step3: connect to the collection
        const collection = db.collection('testCollection');
        // step4: find data in the collection
        collection.findOne({ age: age }, (err, record) => {
            if (err) {
                console.log(err);
                return;
            }
            console.log(record);
        });
    });
}


function update(name) {
    // step1: connect to the server using client
    mongodb.MongoClient.connect('mongodb://localhost:27017/', (err, client) => {
        if (err) {
            console.log(err);
            return;
        }
        // step2: connect to the database
        const db = client.db('testDB');
        // step3: connect to the collection
        const collection = db.collection('testCollection');
        // step4: update data in the collection
        collection.updateOne({ name: name }, { $set: { name: "updatedName", age: 123 } }, (err, result) => {
            if (err) {
                console.log(err);
                return;
            }
            console.log(result);
        });
    }
    );
}

update("many3");

//find("many1");

//findOne(200);

// const sendErrorResponse = (res) => {
//     res.writeHead(httpStatus.StatusCodes.NOT_FOUND, { 'Content-Type': 'text/html' });
//     res.end('<h1>404 Not Found</h1>');
// }

// const customReadFile = (filePath, res) => {
//     if (fs.existsSync(filePath)) {
//         fs.readFile(filePath, (err, data) => {
//             if (err) {
//                 console.log(err);
//                 sendErrorResponse(res);
//                 return;
//             }
//             res.end(data);
//         });
//     }
//     else {
//         sendErrorResponse(res);
//     }
// }

// //create a server object:
// const app = http.createServer(function (req, res) {



//     let url = req.url;

//     if (url.indexOf('.html') !== -1) {
//         res.writeHead(httpStatus.StatusCodes.OK, { 'Content-Type': 'text/html' });
//         customReadFile(`./views/${url}`, res);
//     }
//     else if (url.indexOf('.css') !== -1) {
//         res.writeHead(httpStatus.StatusCodes.OK, { 'Content-Type': 'text/css' });
//         customReadFile(`./public/${url}`, res);
//     }
//     else if (url.indexOf('.js') !== -1) {
//         res.writeHead(httpStatus.StatusCodes.OK, { 'Content-Type': 'text/javascript' });
//         customReadFile(`./public/${url}`, res);
//     }
//     else if (url.indexOf('.png') !== -1) {
//         res.writeHead(httpStatus.StatusCodes.OK, { 'Content-Type': 'image/png' });
//         customReadFile(`./public/${url}`, res);
//     }
//     else {
//         sendErrorResponse(res);
//     }


// }).listen(3000, function () {
//     console.log("server start at port 3000"); //the server object listens on port 3000
// });
