import mongoose from 'mongoose'

const Schema = mongoose.Schema

const parentSchema = new Schema({
  profile: {
    type: Schema.Types.ObjectId, 
    ref: 'Profile'
  },
  children: [{
    type: Schema.Types.ObjectId, ref: 'Child'
}],
})

const Parent  = mongoose.model('Parent', parentSchema)

export { Parent }
