import { Router } from 'express'
import * as childCtrl from '../controllers/child.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

/*---------- Public Routes ----------*/


/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)


//? Child
// create child
router.post('/', checkAuth, childCtrl.create)
//fetch all childern of parent
router.get('/', checkAuth, childCtrl.index)
//fetch child
router.get('/:id', checkAuth, childCtrl.show)
//update child
router.patch('/:id', checkAuth, childCtrl.update)



//? Task
// create task
router.post('/:childId', checkAuth, childCtrl.createTask)
// featch all tasks
router.get('/:childId', checkAuth, childCtrl.indexTask)
// show task
router.get('/:childId/:id', checkAuth, childCtrl.showTask)
// update task
router.patch('/:childId/:id', checkAuth, childCtrl.updateTask)
// delete task
router.delete('/:childId/:id', checkAuth, childCtrl.deleteTask)


export { router }
