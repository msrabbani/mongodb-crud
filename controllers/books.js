var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');
var ObjectId = require('mongodb').ObjectId;
// Connection URL
var url = 'mongodb://localhost:27017/library';

const getAllBook = (req,res)=>{
    MongoClient.connect(url,function(err,db){
        if (err) {
            console.log(err);
        }else {
            db.collection('books').find({}).toArray((err,result)=>{
                if (err) {
                    console.log(err);
                }else {
                    res.send(result)
                }
            })
        }
    })
}

const findBookId = (req,res) => {
    MongoClient.connect(url, function(err,db){
        db.collection('books').find({_id:ObjectId(req.params.id)}).toArray((err,result) => {
            if(!err){
                res.send(result)
            }else {
                console.log(err);
            }
        })
    })
}

const createBook = (req,res) => {
    MongoClient.connect(url, function(err,db){
        db.collection('books').insert([
            {isbn:req.body.isbn,
            title:req.body.title,
            author:req.body.author,
            category:req.body.category,
            stock:req.body.stock}], function(err, result){
            if (err) {
                console.log(err);
            }else {
                res.send(result);
            }
        })
    })
}

const deleteBook = (req,res) =>{
    MongoClient.connect(url, function(err,db){
        db.collection('books').deleteOne({_id:ObjectId(req.params.id)},function(err,result){
            if(!err){
                res.send(result)
            }else {
                console.log(err);
            }
        })
    })
}

const updateBook = (req,res) => {
    MongoClient.connect(url, (err,db)=>{
        db.collection('books').updateOne({_id:ObjectId(req.params.id)},{$set:{
            isbn:req.body.isbn,
            title:req.body.title,
            author:req.body.author,
            category:req.body.category,
            stock:req.body.stock
        }}, (err,result) => {
            if(err){
                console.log(err);
            }else {
                res.send(result);
            }
        })
    })
}


module.exports = {
    getAllBook,
    findBookId,
    createBook,
    deleteBook,
    updateBook
}
