const asyncHandler = require('express-async-handler');

const getGoals = asyncHandler(async (req, res) => {
    res.send({ "message": "get goals" })
})

const setGoal = asyncHandler(async (req, res) => {
    if (!req.body.text) {
        res.status(404)
        throw new Error('Please add a text field.')
    }
    res.json({ "message": "set goals" })
})

const updateGoal = asyncHandler(async (req, res) => {
    res.json({ "message": `Update goals ${req.params.id}` })
})

const deleteGoal = asyncHandler(async (req, res) => {
    res.json({ "message": `Delete goals ${req.params.id}` })
})

module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}