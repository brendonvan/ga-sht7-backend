import mongoose from 'mongoose'

const Schema = mongoose.Schema

const budgetSchema = new Schema({
    profile:[{type:ObjectId, ref:"Profile"}],
    name:{
        String,
        required: true,
    },
    amount: {
        Number,
        required: true,
    },
    photo: String,
    goalName: {
        String,
        required: true
    },
    goalAmount: {
        Number,
        required: true,
    },
    typeOf: String,

},{
  timestamps: true,
})

const Budget = mongoose.model('Budget', budgetSchema)

export { Budget }
