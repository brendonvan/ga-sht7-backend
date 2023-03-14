import { Profile } from '../models/profile.js'
import { v2 as cloudinary } from 'cloudinary'

function index(req, res) {
  Profile.find({})
  .then(profiles => res.json(profiles))
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
}

function addPhoto(req, res) {
  const imageFile = req.files.photo.path
  Profile.findById(req.params.id)
  .then(profile => {
    cloudinary.uploader.upload(imageFile, {tags: `${req.user.email}`})
    .then(image => {
      profile.photo = image.url
      profile.save()
      .then(profile => {
        res.status(201).json(profile.photo)
      })
    })
    .catch(err => {
      console.log(err)
      res.status(500).json(err)
    })
  })
}

async function createProfile(req, res) {
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

async function createChild(req, res) {
  try {
    const profile = await Profile.findById(req.params.id);
    const child = profile.child.create(req.body)
    console.log('profile:',profile,'child:', child)
    profile.child.push(req.body);
    await child.save();
    await profile.save();
    res.status(200).json(profile.child);
  } catch (error) {
    console.log(error);
  }
}

async function showChild(req, res) {
  try {
    // const profile = await Profile.findById(req.params.id);
    const profile = await Profile.findById(req.params.id)
    res.status(200).json(profile);
  } catch (error) {
    console.log(error);
  }
}



export { 
  index, 
  addPhoto, 
  createProfile, 
  createChild,
  showChild
}
