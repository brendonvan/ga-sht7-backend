import mongoose from 'mongoose'

const Schema = mongoose.Schema

const childSchema = new Schema ({
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
})

const profileSchema = new Schema({
  child: [childSchema],
  passcode: {
    type: Number,
  },
  name: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
  },
  tasks: [{
    type: Schema.Types.ObjectId, ref: 'Task'
  }],
},{
  timestamps: true,
})

const Profile = mongoose.model('Profile', profileSchema)

export { Profile }
