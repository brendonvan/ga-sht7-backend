import mongoose from 'mongoose'

const Schema = mongoose.Schema


const childSchema = new Schema({
  profile: {
    type: Schema.Types.ObjectId, 
    ref: 'Profile'
  },
  parent: {
    type: Schema.Types.ObjectId, ref: 'Parent'
  },
  tasks: [{
    type: Schema.Types.ObjectId, ref: 'Task'
  }],
  score: {
    type: Number
  },
  goal: {
    type: String
  },
})

const Child = mongoose.model('Child', childSchema)

export { Child }