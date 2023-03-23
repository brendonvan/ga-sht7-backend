import { Router } from 'express'
import * as taskCtrl from '../controllers/task.js'

const router = Router();

// show all tasks
router.get("/", taskCtrl.index);
// create new task
router.post("/:profileId/:childId/create", taskCtrl.create);
// update task
router.put("/:profileId/:childId/:taskId", taskCtrl.updateTask);
// delete task
router.delete("/:id", taskCtrl.deleteTask);



export { router }