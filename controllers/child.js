import { Child } from '../models/child.js'
import { Profile } from '../models/profile.js'
import { v2 as cloudinary } from 'cloudinary'


async function index(req, res) {
  try {
    const profile = await Profile.findById(req.user.profile)
    // const children = await Child.find({parent: profile._id})
    const children = profile.children
    res.json(children)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}

async function create(req, res) {
  try {
    const profile = await Profile.findById(req.params.id)
    const child = new Child(req.body)
    // const child = profile.children.create(req.body)
    // console.log('profile:',profile,'child:', child)
    profile.children.push(child)
    // await child.save()
    await profile.save()
    res.status(200).json(child)
  } catch (error) {
    console.log(error)
  }
}

async function show(req, res) {
  try {
    const child = Child.findById(req.params.id)
    .populate('tasks')
    if (!child){
      return res.status(404).json({ message: 'Child not found'})
    }
    res.status(200).json(child)
  } catch (error) {
    console.log(error)
  }
}

async function update(req, res) {
  try {
    // const profile = await Profile.findById(req.params.id)
    const child = await Child.findByIdAndUpdate(req.params.id, req.body, {new: true})
    child.set(req.body)
    child.save()
    res.json(child)
    }
    // res.status(200).json(child);
    catch (error) {
    console.log(error);
  }
}



export { 
  index, 
  create,
  show,
  update,
}
