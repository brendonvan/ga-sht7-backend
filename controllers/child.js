import { Child } from '../models/child.js'
import { Profile } from '../models/profile.js'
import { v2 as cloudinary } from 'cloudinary'


async function index(req, res) {
  try {
    const profile = await Profile.findById(req.params.id)
    const children = profile.child
    res.json(children)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}

async function create(req, res) {
  try {
    const profile = await Profile.findById(req.params.id)
    const child = profile.child.create(req.body)
    // console.log('profile:',profile,'child:', child)
    profile.child.push(req.body)
    // await child.save()
    await profile.save()
    res.status(200).json(child)
  } catch (error) {
    console.log(error)
  }
}

async function show(req, res) {
  try {
    const child = child.findById(req.params.id)
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
    const profile = await Profile.findById(req.params.id)
    const child = await Child.findById(req.params.id)
    child.set(req.body)
    profile.save()
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
