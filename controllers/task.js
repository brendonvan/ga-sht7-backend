import { Profile } from '../models/profile.js';
import { Task } from '../models/task.js';

function index(req, res) {
  Task.find({}, function(err, task) {
    res.render('task/index', { title: 'All Task', task });
  });
}


const create = async (req, res) => {
  try {
    const profile = await Profile.findById(req.params.id)
    console.log('Profile:', profile.name)
    const children = profile.children
    const child = children.find(c => c._id.toString() === req.params.id.toString())
    console.log('Child:', child)
    const task = await Task.create(req.body)
    if (!child.tasks) {
      child.tasks = []
    }
    child.tasks.push(task)
    console.log('here')
    await profile.save()
    console.log('Task:', child.tasks)
    res.json(task)
  } catch (error) {
    console.log(error)
  }
}

const update = async (req, res) => {
  try {
    const profile = await Profile.findById(req.params.Id)
    console.log('Profile:', profile.name)
    const children = profile.children
    const child = children.find(c => c._id.toString() === req.params.childId.toString())
    const task = await Task.findById(req.params.taskId)
    task.set(req.body)
    task.save()
    res.json(task)
    
  } catch (error) {
    console.log(error)
  }
}


function deleteTask(req, res) {
  const id = req.params.id;
  Task.findByIdAndDelete(id)
  .then(result => {
    res.json({ redirect: '/task' })
  })
  .catch(err => {
    console.log(err);
  })
}

export { 
  index, 
  create, 
  deleteTask, 
  update 
}