require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('63a89f3de7349e2879ce4c78').then((tasks) => {
//     return Task.countDocuments({ completed: false })
// }).then((results) => {
//     console.log(results)
// }).catch((e) => {
//     console.log(e)
// })

const taskDelete = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ completed: false })
    return count 
}

taskDelete('63b7ecc6ba98c72bc7eb8219').then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})