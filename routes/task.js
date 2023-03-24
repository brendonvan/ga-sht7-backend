import { Router } from 'express'
import * as taskCtrl from '../controllers/task.js'

const router = Router();

// show all tasks
router.get("/:id", taskCtrl.index);
// create new task
router.post("/:id", taskCtrl.create);
// update task
router.put("/:id/:id", taskCtrl.update);
// delete task
router.delete("/:id/:id", taskCtrl.deleteTask);



export { router }