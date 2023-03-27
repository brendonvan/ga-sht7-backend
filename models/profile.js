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
}, {
  timestamps: true,
})

const Profile = mongoose.model('Profile', profileSchema)

export { Profile }
