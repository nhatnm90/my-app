const uuidv4 = require('uuid/v4')

const items = [
    {
        id: uuidv4(),
        name: "Task 1",
        level: 2
    },
    {
        id: uuidv4(),
        name: "Task 2",
        level: 1
    },
    {
        id: uuidv4(),
        name: "Task 3",
        level: 0
    },
    {
        id: uuidv4(),
        name: "Task 4",
        level: 2
    }
]

export default items;