import mongoose from 'mongoose'

const Schema = mongoose.Schema

const profileSchema = new Schema({
  parent: {
    type: Schema.Types.ObjectId, 
    ref: 'Parent'
  },
  child: {
    type: Schema.Types.ObjectId, 
    ref: 'Child'
  },
  name: String,
  photo: String,
},{
  timestamps: true,
})

const Profile = mongoose.model('Profile', profileSchema)

export { Profile }
