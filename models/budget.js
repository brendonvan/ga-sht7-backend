import mongoose from 'mongoose'

const Schema = mongoose.Schema

const budgetSchema = new Schema({
    // profile:[{type:ObjectId, ref:"Profile"}],
    name:{
        type: String,
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    photo: String,
    goalName: {
        type: String,
        required: true
    },
    goalAmount: {
        type: Number,
        required: true,
    },
    typeOf: String,

},{
  timestamps: true,
})

const Budget = mongoose.model('Budget', budgetSchema)

export { Budget }
