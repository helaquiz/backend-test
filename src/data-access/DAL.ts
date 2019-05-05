var product = require('../../../mockdata/product.json');
var category = require('../../../mockdata/category.json');
var pricing = require('../../../mockdata/pricing.json');
var history = require('../../../mockdata/history.json');

const data = {
    product,
    category,
    pricing,
    history
}

import { ProductDAL } from './product.DAL';
import { HistoryDAL } from './history.DAL';

class DAL {
    data: any
    private static productDAL: ProductDAL;
    private static historyDAL: HistoryDAL;

    constructor() {
        this.init()
    }

    init(): void {
        this.data = data;
        DAL.productDAL = new ProductDAL(this.data);
        DAL.historyDAL = new HistoryDAL(this.data);
    }

    static getProductDAL() {
        return this.productDAL;
    }

    static getHistoryDAL() {
        return this.historyDAL;
    }

}

export { DAL }