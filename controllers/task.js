import { Profile } from '../models/profile.js';
import { Task } from '../models/task.js';

function index(req, res) {
  Task.find({}, function(err, task) {
    res.render('task/index', { title: 'All Task', task });
  });
}

function newTask(req, res) {
  res.render("task/new", { title: "Add Task" });
}

const create = async (req, res) => {
  try {
    const profile = await Profile.findById(req.params.profileId)
    console.log('Profile:', profile.name)
    const children = profile.child
    const child = children.find(c => c._id.toString() === req.params.childId.toString())
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

const updateTask = async (req, res) => {
  try {
    const profile = await Profile.findById(req.params.profileId)
    console.log('Profile:', profile.name)
    const children = profile.child
    const child = children.find(c => c._id.toString() === req.params.childId.toString())
    const task = await Task.findById(req.params.taskId)
    task.set(req.body)
    task.save()
    res.json(task)
    
  } catch (error) {
    console.log(error)
  }
}




// const child = children.find(c => c._id.toString() === req.params.childId.toString());

// function create(req, res) {
//   Task.findById(req.params.id, function(err, task) {
//   var task = new Task(req.body);
//   task.save(function(err) {
//     if (err) return res.redirect('/task/new');
//     res.redirect("/task");
//     });
//   });
// }

// function create(req, res) {
//   const taskId = req.params.id;
//   const childId = req.params.profile.childId;
//   const newTask = new Task({
//     taskName: req.body.taskName,
//     assignedDate: req.body.assignedDate,
//     dueDate: req.body.dueDate,
//     score: req.body.score,
//   });
//   newTask.save()
//     .then(result => {
//       res.redirect("/task");
//     })
//     .catch(err => {
//       console.log(err);
//       res.redirect("/task");
//     });
// }


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
  newTask, 
  create, 
  deleteTask, 
  updateTask 
}