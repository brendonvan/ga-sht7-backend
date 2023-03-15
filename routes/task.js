import { Router } from 'express'
import * as taskCtrl from '../controllers/task.js'

const router = Router();

router.get("/", taskCtrl.index);
router.get("/new", taskCtrl.newTask);
router.post("/:profileId/:childId/create", taskCtrl.create);
router.put("/:profileId/:childId/:taskId", taskCtrl.updateTask);
router.delete("/:id", taskCtrl.deleteTask);


export { router }