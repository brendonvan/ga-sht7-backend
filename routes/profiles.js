import { Router } from 'express'
import * as profilesCtrl from '../controllers/profiles.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

/*---------- Public Routes ----------*/


/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.get('/:id', checkAuth, profilesCtrl.index)
router.post('/', profilesCtrl.createProfile);
router.put('/:id/add-photo', checkAuth, profilesCtrl.addPhoto)
router.post('/:id/child', checkAuth, profilesCtrl.createChild)
router.get('/:id/:childId', checkAuth, profilesCtrl.showChild)
router.put('/:id/:childId', checkAuth, profilesCtrl.updateChild)

export { router }
