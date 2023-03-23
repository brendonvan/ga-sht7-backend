import mongoose from 'mongoose'

const Schema = mongoose.Schema


const profileSchema = new Schema({
  child: [{
    type: Schema.Types.ObjectId, ref: 'Child'
  }],
  passcode: {
    type: Number,
  },
  name: {
      type: Schema.Types.ObjectId, ref: "Profile",
  },
  avatar: {
    type: String,
  },
  tasks: [{
    type: Schema.Types.ObjectId, ref: 'Task'
  }],
}, {
  timestamps: true,
})

const Profile = mongoose.model('Profile', profileSchema)

export { Profile }
