import * as express from 'express'
import { HistoryController } from '../controllers/history.controllers';

const router = express.Router()
const historyCtrl = new HistoryController()

router.route('/history')
  .get(historyCtrl.getAllHistortList);

export { router }