// CRUD create read update delete

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

const id = new ObjectID()
console.log(id.id.length)
console.log(id.toHexString().length)
console.log(id.getTimestamp())

MongoClient.connect(connectionURL, { useNewUrlParse: true }, (error, client) => {
  if (error) {
    return console.log('Unable to connect to database')
  }

  const db = client.db(databaseName)

  // db.collection('users').insertOne({
  //   _id: id, 
  //   name: 'Tsukiko',
  //   age: 60
  // }, (error, result) => {
  //   if (error) {
  //     return console.log('Unable to insert user')
  //   }

  //   console.log(result.ops)
  // })

  // db.collection('users').insertMany([
  //   {
  //     name: 'Kento',
  //     age: 32
  //   } , {
  //     name: 'Kazutoyo',
  //     age: 61
  //   }
  // ], (error, result) => {
  //   if(error) {
  //     return console.log('Unable to insert document')
  //   }
  //   console.log(result.ops)
  // })

  // db.collection('tasks').insertMany([
  //   {
  //     description: 'Wash dishes',
  //     completed: false
  //   },
  //   {
  //     description: 'Cook dinner',
  //     completed: false
  //   },
  //   {
  //     description: 'Clean room',
  //     completed: true
  //   }
  // ], (error, result) => {
  //   if(error) {
  //     return console.log('Unable to insert document')
  //   }
  //   console.log(result.ops)
  // })
})