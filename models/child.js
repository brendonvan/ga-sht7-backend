import mongoose from 'mongoose'

const Schema = mongoose.Schema

const taskSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  value: {
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
  currentScore: {
    type: Number
  },
  goalScore: {
    type: Number
  },
  goalItem: {
    type: String,
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
