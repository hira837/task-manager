// CRUD create read update delete

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParse: true }, (error, client) => {
  if (error) {
    return console.log('Unable to connect to database')
  }

  const db = client.db(databaseName)

//  db.collection('users').updateOne({
//     _id: new ObjectID("5ea2ba5c72f36a5d7d318e08")
//   }, {
//     $inc: {
//       age: 40
//     }
//   }).then((result) => {
//     console.log(result)
//   }).catch((error) => {
//     console.log(error)
//   })

db.collection('tasks').updateMany({
  completed: true
}, {
  $set: {
    completed: false
  }
}).then((result) => {
  console.log(result.modifiedCount)
}).catch((error) => {
  console.log(error)
})

})

