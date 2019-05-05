import * as express from 'express'
// DAL
import { DAL, } from '../data-access/DAL';
import { SuccessResponse, ErrorResponse } from '../models/response.model';
import { IProduct } from '../interfaces/product.interface';


export class ProductController {

  async getProductList(req: express.Request, res: express.Response, next: express.NextFunction) {
    try {
      const productList: IProduct[] = await DAL.getProductDAL().getAllProduct();
      const response = new SuccessResponse(ProductController.prototype.getProductList.name, productList);
      return res.json(response);
    } catch (err) {
      const errResponse = new ErrorResponse(ProductController.prototype.getProductList.name, err);
      return res.status(500).json(errResponse);
    }
  }

  async addNewProduct(req: express.Request, res: express.Response, next: express.NextFunction) {
    try {
      const productList: IProduct[] = await DAL.getProductDAL().getAllProduct();
      const object: any = {
        product_id: productList.length + 1,
        category_id: req.body.category_id,
        size: {
          width: req.body.size.width,
          hight: req.body.size.hight,
          length: req.body.size.length
        },
        weight: req.body.weight || 0,
        import_date: new Date().toJSON(),
        export_date: ""
      }
      await DAL.getProductDAL().addProduct(object);
      return res.json({ code: 1, msgInfo: `OK`, data: object });
    } catch (err) {
      const errResponse = new ErrorResponse(ProductController.prototype.addNewProduct.name, err);
      return res.status(500).json(errResponse);
    }
  }

  async removeProduct(req: express.Request, res: express.Response, next: express.NextFunction) {
    try {
      const productID = req.params.product_id;
      const history: any = await DAL.getProductDAL().removeProduct(productID);
      await DAL.getHistoryDAL().addNewHistory(history);
      return res.json({ code: 1, msgInfo: `OK`, data: history });
    } catch (err) {
      const errResponse = new ErrorResponse(ProductController.prototype.removeProduct.name, err);
      return res.status(500).json(errResponse);
    }
  }

}
