import { Router } from 'express'
import * as taskCtrl from '../controllers/task.js'

const router = Router();

// show all tasks
router.get("/", taskCtrl.index);
// create new task
router.post("/", taskCtrl.create);
// update task
router.put("/:id", taskCtrl.update);
// delete task
router.delete("/:id", taskCtrl.deleteTask);



export { router }