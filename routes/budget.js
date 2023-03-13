import { Router } from 'express'
import * as budgetCtrl from '../controllers/budget.js'

const router = Router();

router.get("/", budgetCtrl.index);
router.get("/new", budgetCtrl.newBudget);
router.post("/", budgetCtrl.create);


export { router }