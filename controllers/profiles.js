import { Profile } from '../models/profile.js'
import { v2 as cloudinary } from 'cloudinary'

//! find logged in parent
async function index(req, res) {
  try {
    const profile = await Profile.findById(req.params.id)
    res.json(profile)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}


// function addPhoto(req, res) {
//   const imageFile = req.files.photo.path
//   Profile.findById(req.params.id)
//   .then(profile => {
//     cloudinary.uploader.upload(imageFile, {tags: `${req.user.email}`})
//     .then(image => {
//       profile.photo = image.url
//       profile.save()
//       .then(profile => {
//         res.status(201).json(profile.photo)
//       })
//     })
//     .catch(err => {
//       console.log(err)
//       res.status(500).json(err)
//     })
//   })
// }

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

//! child
// async function createChild(req, res) {
//   try {
//     const profile = await Profile.findById(req.params.id)
//     const child = profile.child.create(req.body)
//     console.log('profile:',profile,'child:', child)
//     profile.child.push(req.body)
//     // await child.save()
//     await profile.save()
//     res.status(200).json(profile)
//   } catch (error) {
//     console.log(error)
//   }
// }

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

//! child
// async function showChild(req, res) {
//   try {
//     // const profile = await Profile.findById(req.params.id);
//     const profile = await Profile.findById(req.params.id)
//     const child = profile.child.id(req.params.childId)
//     if (!child){
//       return res.status(404).json({ message: 'Child not found'})
//     }
//     res.status(200).json(child);
//   } catch (error) {
//     console.log(error);
//   }
// }

//! child
// async function updateChild(req, res) {
//   try {
//     const profile = await Profile.findById(req.params.id)
//     const child = profile.child.id(req.params.childId)
//     child.set(req.body)
//     profile.save()
//     res.json(child)
//     }
//     // res.status(200).json(child);
//     catch (error) {
//     console.log(error);
//   }
// }



export { 
  index, 
  create, 
  update
}
