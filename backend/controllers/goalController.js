const asyncHandler = require('express-async-handler');

// @desc    Get goals
// @route   GET /api/goals
// @access  Private
const getGoals = asyncHandler( async (req, res) => {
    res.status(200).json({ message: 'get goals'})
})

// @desc    Set goals
// @route   Post /api/goals
// @access  Private
const setGoals = asyncHandler(async (req, res) => {
if(!req.body.text){
    res.status(404)
    throw new Error('Pleas add a goal')

}

    res.status(200).json({ message: 'Create goals'})
})

// @desc    Update goalss
// @route   PUT /api/goals/:id
// @access  Private
const updateGoals = asyncHandler(async(req, res) => {
    res.status(200).json({ message: `Update goal ${req.params.id}` })
})

// @desc    Delete goals
// @route   DELETE /api/goals/:id
// @access  Private
const deleteGoals = asyncHandler(async(req, res) => {
    res.status(200).json({ message: `Delete goal ${req.params.id}` })
})

module.exports = {
    getGoals,setGoals,updateGoals,deleteGoals
}