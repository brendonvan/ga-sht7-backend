import mongoose from 'mongoose'

const Schema = mongoose.Schema


const profileSchema = new Schema({
  children: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Child'
  }],
  passcode: {
    type: Number,
  },
  name: {
    type: String,
  },
  avatar: {
    type: String,
  },
  // tasks: [{
  //   type: Schema.Types.ObjectId, ref: 'Task'
  // }],
}, {
  timestamps: true,
})

const Profile = mongoose.model('Profile', profileSchema)

export { Profile }
