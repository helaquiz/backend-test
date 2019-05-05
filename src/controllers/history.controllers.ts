import * as express from 'express'
// DAL
import { DAL, } from '../data-access/DAL';
import { SuccessResponse } from '../models/response.model';


export class HistoryController {

  async getAllHistortList(req: express.Request, res: express.Response, next: express.NextFunction) {
    try {
      const historyList: any = await DAL.getHistoryDAL().getAllHistoryList();
      const response = new SuccessResponse(HistoryController.prototype.getAllHistortList.name, historyList);
      return res.json(response);
    } catch (err) {
      console.log(err);
      return res.status(404).json({ code: 404, message: `NOT FOUND.` });
    }
  }

}
