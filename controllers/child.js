import { Child } from '../models/child.js'
import { Profile } from '../models/profile.js'
import { User } from '../models/user.js'
import { v2 as cloudinary } from 'cloudinary'


async function index(req, res) {
  try {
    const profile = await Profile.findById(req.user.profile).populate('children')
    const children = profile.children
    res.json(children)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}


async function create(req, res) {
  try {
    console.log(1)
    const user = await User.findById(req.user._id).populate('profile')
    console.log(2)
    const child = new Child(req.body)
    console.log(3)
    if (!user.profile.children) {
      console.log(4)
      user.profile.children = []
      console.log(5)
    }
    console.log(6)
    child.parent = user.profile._id
    console.log(7)
    user.profile.children.push(child)
    console.log(8)
    await user.profile.save()
    console.log(9)
    await child.save()
    console.log(10)
    res.status(200).json(child)
    console.log(11)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}




async function show(req, res) {
  try {
    const user = await User.findById(req.user._id).populate('profile')
    const child = await Child.findById(req.params.id)
      .populate('tasks')
    if (!child) {
      return res.status(404).json({ message: 'Child not found' })
    }
    if (child.parent.equals(user.profile._id)) {
      res.status(200).json(child)
    } else {
      res.status(403).json({ message: 'You are not authorized to access this child' })
    }
  } catch (error) {
    console.log(error)
  }
}


async function update(req, res) {
  try {
    const child = await Child.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.json(child)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}



//! Tasks

async function indexTask(req, res) {
  try {
    const child = await Child.findById(req.params.childId).populate('tasks')
    if (!child) {
      return res.status(404).json({ message: 'Child not found' })
    }
    if (!child.parent._id.equals(req.user.profile)) {
      return res.status(403).json({ message: 'You are not authorized to access this child' })
    }
    res.status(200).json(child.tasks)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}


async function showTask(req, res) {
  try {
    const child = await Child.findById(req.params.childId).populate('tasks')
    if (!child) {
      return res.status(404).json({ message: 'Child not found' })
    }
    if (!child.parent._id.equals(req.user.profile)) {
      return res.status(403).json({ message: 'You are not authorized to access this child' })
    }
    const task = child.tasks.id(req.params.id)
    if (!task) {
      return res.status(404).json({ message: 'Task not found' })
    }
    res.status(200).json(task)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}



// async function createTask(req, res) {
//   try {
//     const child = await Child.findById(req.params.childId).populate('parent')
//     if (!child) {
//       return res.status(404).json({ message: 'Child not found' })
//     }
//     if (!child.parent._id.equals(req.user.profile)) {
//       return res.status(403).json({ message: 'You are not authorized to access this child' })
//     }
//     const task = new Child.tasks(req.body)
//     child.tasks.push(task)
//     await child.save()
//     res.status(200).json(task)
//   } catch (error) {
//     console.log(error)
//     res.status(500).json(error)
//   }
// }
async function createTask(req, res) {
  try {
    const child = await Child.findById(req.params.childId).populate('parent')
    if (!child) {
      return res.status(404).json({ message: 'Child not found' })
    }
    if (!child.parent._id.equals(req.user.profile)) {
      return res.status(403).json({ message: 'You are not authorized to access this child' })
    }
    child.tasks.push(req.body)
    await child.save()
    res.json(child)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}


// async function createTask(req, res) {
//   Child.findById(req.params.id)
//   .then(child => {
//     child.tasks.push(req.body)
//     child.save()
//   })
//   .catch(err =>{
//     console.log(err)
//     res.redirect('/')
//   })
// }


async function updateTask(req, res) {
  try {
    const child = await Child.findById(req.params.childId).populate('tasks')
    if (!child) {
      return res.status(404).json({ message: 'Child not found' })
    }
    if (!child.parent._id.equals(req.user.profile)) {
      return res.status(403).json({ message: 'You are not authorized to access this child' })
    }
    const task = child.tasks.id(req.params.id)
    if (!task) {
      return res.status(404).json({ message: 'Task not found' })
    }
    task.set(req.body)
    await child.save()
    res.status(200).json(task)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}



async function deleteTask(req, res) {
  try {
    const child = await Child.findById(req.params.childId).populate('tasks')
    console.log(child)
    const task = child.tasks.id(req.params.id)
    console.log(task)
    child.tasks.remove(task)
    child.save()
    res.json(child)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}

export {
  index,
  create,
  show,
  update,
  indexTask,
  createTask,
  showTask,
  updateTask,
  deleteTask
}
