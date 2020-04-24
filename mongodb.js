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

  // db.collection('users').findOne({ _id: new ObjectID("5ea2c57bcf23e661e7d9ef36") }, (error, user) => {
  //   if (error) {
  //     return console.log('Unable to fetch')
  //   }

  //   console.log(user)
  // })
  db.collection('tasks').findOne({ _id: new ObjectID("5ea2be282f12905f1dea7fdd") }, (error, description) => {
    if (error) {
      return console.log('Unable to fetch')
    }

    console.log(description)
  })

  // db.collection('users').find({ age: 29 }).toArray((error, users) => {
  //   console.log(users)
  // })
  // db.collection('users').find({ age: 29 }).count((error, count) => {
  //   console.log(count)
  // })
  db.collection('tasks').find({ completed: false }).toArray((error, description) => {
    console.log(description)
  })
})