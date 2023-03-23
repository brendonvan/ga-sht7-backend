import mongoose from 'mongoose'

const Schema = mongoose.Schema

const childSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  score: {
    type: Number
  },
  goal: {
    type: String
  },
  price: {
    type: Number,
  },
  avatar: {
    type: String,
  },
  tasks: [{
    type: Schema.Types.ObjectId, ref: 'Task'
  }],
  parent: [{
    type: Schema.Types.ObjectId, ref: 'Profile'
  }],
})



const Child = mongoose.model('Child', childSchema)

export { Child }
