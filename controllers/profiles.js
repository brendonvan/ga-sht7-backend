import { Profile } from '../models/profile.js'
import { v2 as cloudinary } from 'cloudinary'


async function index(req, res) {
  try {
    const profile = await Profile.find({})
    res.json(profile)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}

//! find logged in parent
async function show(req, res) {
  try {
    const profile = await Profile.findById(req.params.id)
    res.json(profile)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}


async function create(req, res) {
  try {
    const profile = await Profile.findById(req.params.id)
    profile.push(req.body);
    profile.save()
    res.status(200).json(profile);
  }
  catch (error) {
    console.log(error);
  }
}


async function update(req, res) {
  try {
    const profile = await Profile.findByIdAndUpdate(  
      req.params.id,
      req.body,
      { new: true })
    res.json(profile)
    } catch (error) {
    console.log(error);
  }
}


export { 
  show, 
  create, 
  update,
  index
}
