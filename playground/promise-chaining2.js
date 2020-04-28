require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndRemove("5ea67ac4e16bd733b93ebfc9").then((task) => {
//   console.log(task)
//   return Task.countDocuments({ completed: false })
// }).then((result) => {
//   console.log(result)
// }).catch((e) => {
//   console.log(e)
// })

deleteTaskAndCount = async (id) => {
  const task = await Task.findByIdAndDelete(id)
  const count = await Task.countDocuments({ completed: false })
  return count
}

deleteTaskAndCount("5ea67a4562f94932d4466e2f").then((count) => {
  console.log(count)
}).catch((e) => {
  console.log(e)
})