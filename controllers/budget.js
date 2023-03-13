import { Budget } from '../models/budget.js';

function index(req, res) {
  Budget.find({}, function(err, budget) {
    res.render('budget/index', { title: 'All Budget', budget });
  });
}

function newBudget(req, res) {
  res.render("budget/new", { title: "Add Budget" });
}

function create(req, res) {
  Budget.findById(req.params.id, function(err, budget) {
  var budget = new Budget(req.body);
  budget.save(function(err) {
    if (err) return res.redirect('/budget/new');
    res.redirect("/budget");
    });
  });
}

export { index, newBudget, create }