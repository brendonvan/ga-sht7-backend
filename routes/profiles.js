import { Router } from 'express'
import * as profilesCtrl from '../controllers/profiles.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

/*---------- Public Routes ----------*/


/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)

//! Parent
//fetch all profiles
router.get('/:id', checkAuth, profilesCtrl.index)
// create profile
router.post('/', profilesCtrl.createProfile);
// add photo
router.put('/:id/add-photo', checkAuth, profilesCtrl.addPhoto)
//update profile
router.patch('/:id', checkAuth, profilesCtrl.updateProfile)

// //? Child
// // create child
// router.post('/:id/child', checkAuth, profilesCtrl.createChild)
// //fetch child
// router.get('/:id/:childId', checkAuth, profilesCtrl.showChild)
// //update child
// router.put('/:id/:childId', checkAuth, profilesCtrl.updateChild)

export { router }
