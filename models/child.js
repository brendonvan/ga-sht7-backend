import mongoose from 'mongoose'

const Schema = mongoose.Schema

const taskSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
  },
  assignedDate: {
    type: Date,
  },
  dueDate: {
    type: Date,
  },
  complete: {
    type: Boolean,
    default: false,
    required: true
  }
})

const childSchema = new Schema({
  name: {
    type: String,
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
  tasks: [taskSchema],
  parent: {
    type: Schema.Types.ObjectId,
    ref: 'Profile',
    required: true
  },
})



const Child = mongoose.model('Child', childSchema)

export { Child }
