import { Router } from 'express'
import * as profilesCtrl from '../controllers/profiles.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

/*---------- Public Routes ----------*/

// create profile
router.post('/', profilesCtrl.create)

/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)

//! Parent
//fetch all profiles
router.get('/', checkAuth, profilesCtrl.index)
// fetch specific profile
router.get('/:id', checkAuth, profilesCtrl.show)
//update profile
router.patch('/:id', checkAuth, profilesCtrl.update)


export { router }
