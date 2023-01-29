require('../src/db/mongoose')
const User = require('../src/models/user')

// User.findByIdAndUpdate('63a899d11761b9e1db5c5b34', { age: 1 }).then((user) => {
//     console.log(user)
//     return User.countDocuments({ age: 1 })
// }).then((results) => {
//     console.log(results)
// }).catch((e) => {
//     console.log(e)
// })

const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, { age })
    const count = await User.countDocuments({ age })     
    return count
}

updateAgeAndCount('63a899d11761b9e1db5c5b34', 2).then((count) => {
    console.log(count)
}).catch((error) => {
    console.log(error)
})

