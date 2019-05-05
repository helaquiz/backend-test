import * as express from 'express'
import { ProductController } from '../controllers/product.controller';

const router = express.Router()
const productCtrl = new ProductController()

router.route('/product')
  .get(productCtrl.getProductList)
  .put(productCtrl.addNewProduct)

router.route('/product/:product_id')
  .delete(productCtrl.removeProduct)

export { router }