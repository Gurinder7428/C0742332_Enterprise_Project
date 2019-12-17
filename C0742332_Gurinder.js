//Gurinder Singh Uppal (C0742332)

//Insert
const mongodb_client = require('mongodb').MongoClient;
let url = "mongodb+srv://c0742332:Guru@7428@cluster0-mwe55.mongodb.net/test?retryWrites=true&w=majority";
// Connecting to mongodb
mongodb_client.connect(url, { useUnifiedTopology: true }, (err,conn)=>{
if (err) throw err;
console.log("Connected Successfully.");

let db = conn.db('Cars');

let col = db.collection('BMW');

var data=[{Model:"3 Series",Trim:"Sedan",Year:2006,Color:"White",Price :30900,Transmission:"Manual"},
          {Model:"3 Series",Trim:"Coupe AWD",Year:2010,Color:"Blue",Price :42650,Transmission:"Automatic"},
          {Model:"3 Series Gran Turismo",Trim:"Hatchback",Year:2006,Color:"White",Price :50900,Transmission:"Automatic"}]

col.insertMany(data,(err,respond)=>{
if (err) throw err;
console.log("Data Inserted")
//closing connection.
conn.close();
console.log("Connection Closed.")
});
});


//Insert
const mongodb_client = require('mongodb').MongoClient;
let url = "mongodb+srv://c0742332:Guru@7428@cluster0-mwe55.mongodb.net/test?retryWrites=true&w=majority";
// Connecting to mongodb
mongodb_client.connect(url, { useUnifiedTopology: true }, (err,conn)=>{
if (err) throw err;
console.log("Connected Successfully.");

let db = conn.db('Cars');

let col = db.collection('Toyota');

var data=[{Model:"Camary",Trim:"Wagon",Year:1994,Color:"Super White",Price :29900,Transmission:"Manual"},
          {Model:"Camry Hybrid",Trim:"Sedan",Year:2010,Color:"Black",Price :26150,Transmission:"Automatic"},
          {Model:"Corolla",Trim:"Sedan",Year:2019,Color:"White",Price :28700,Transmission:"Automatic"}]

col.insertMany(data,(err,respond)=>{
if (err) throw err;
console.log("Data Inserted")
//closing connection.
conn.close();
console.log("Connection Closed.")
});
});


//Insert
const mongodb_client = require('mongodb').MongoClient;
let url = "mongodb+srv://c0742332:Guru@7428@cluster0-mwe55.mongodb.net/test?retryWrites=true&w=majority";
// Connecting to mongodb
mongodb_client.connect(url, { useUnifiedTopology: true }, (err,conn)=>{
if (err) throw err;
console.log("Connected Successfully.");

let db = conn.db('Cars');

let col = db.collection('Honda');

var data=[{Model:"Civic",Trim:"Sedan",Year:2012,Color:"Red",Price :21000,Transmission:"Manual"},
          {Model:"Accord",Trim:"Sedan",Year:2016,Color:"Black",Price :33150,Transmission:"Automatic"},
          {Model:"CR-V",Trim:"SUV",Year:2018,Color:"White",Price :38900,Transmission:"Automatic"}]

col.insertMany(data,(err,respond)=>{
if (err) throw err;
console.log("Data Inserted")
//closing connection.
conn.close();
console.log("Connection Closed.")
});
});



//Update
const mongodb_client = require('mongodb').MongoClient;
let url = "mongodb+srv://c0742332:Guru@7428@cluster0-mwe55.mongodb.net/test?retryWrites=true&w=majority";
// Connecting to mongodb
mongodb_client.connect(url, { useUnifiedTopology: true }, (err,conn)=>{
if (err) throw err;
console.log("Connected Successfully.");

let db = conn.db('Cars');

let col = db.collection('Toyota');

var data= {Year:1994};

 var newvalues = { $set: {Transmission:"Automatic"} };

col.updateOne(data, newvalues,(err,respond)=>{
if (err) throw err;
console.log("Data updated")
//closing connection.
conn.close();
console.log("Connection Closed.")
});
});


//Delete
const mongodb_client = require('mongodb').MongoClient;
let url = "mongodb+srv://c0742332:Guru@7428@cluster0-mwe55.mongodb.net/test?retryWrites=true&w=majority";
// Connecting to mongodb
mongodb_client.connect(url, { useUnifiedTopology: true }, (err,conn)=>{
if (err) throw err;
console.log("Connected Successfully.");

let db = conn.db('Cars');

let col = db.collection('Honda');

var myquery= {Trim:"SUV"};


col.deleteOne(myquery,(err,respond)=>{
if (err) throw err;
console.log("Data deleted")
//closing connection.
conn.close();
console.log("Connection Closed.")
});
});




//Read
const mongodb_client = require('mongodb').MongoClient;
let url = "mongodb+srv://c0742332:Guru@7428@cluster0-mwe55.mongodb.net/test?retryWrites=true&w=majority";

mongodb_client.connect(url, { useUnifiedTopology: true }, (err,conn)=>{
if (err) throw err;
console.log("Connected Successfully.");

let db = conn.db('Cars');

let col = db.collection('BMW');

col.find({}).toArray(function(err, result){
if (err) throw err;
console.log(result)

conn.close();

});
});




