import { Task } from '../models/task.js';

function index(req, res) {
  Task.find({}, function(err, task) {
    res.render('task/index', { title: 'All Task', task });
  });
}

function newTask(req, res) {
  res.render("task/new", { title: "Add Task" });
}

function create(req, res) {
  Task.findById(req.params.id, function(err, task) {
  var task = new Task(req.body);
  task.save(function(err) {
    if (err) return res.redirect('/task/new');
    res.redirect("/task");
    });
  });
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

export { index, newTask, create, deleteTask }