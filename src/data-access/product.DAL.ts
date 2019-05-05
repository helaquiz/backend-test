import { calculateCostSuppleMentary, calculateCostWearing, calculateCostOther } from "../libs/basic-helper";
import { IProduct } from "../interfaces/product.interface";

export class ProductDAL {

    private data: any

    constructor(data: any) {
        this.data = data;
    }

    getAllProduct(): any {
        return new Promise((resolve, reject) => {
            return resolve(this.data.product._data)
        });
    }

    addProduct(product: IProduct) {
        return new Promise((resolve, reject) => {
            return resolve(this.data.product._data.push(product))
        });
    }

    removeProduct(productID: number) {
        return new Promise((resolve, reject) => {
            const position: number = this.data.product._data.findIndex((val: any) => {
                return val.product_id == productID
            });
            if (position != -1) {
                const productDetail: IProduct = this.data.product._data[position]
                productDetail.export_date = new Date().toJSON();
                productDetail.cost = this.calculateCost(productDetail);
                return resolve(productDetail);
            } else {
                return resolve(false);
            }
        });

    }
    calculateCost(productDetail: IProduct): any {
        const categoryID = Number(productDetail.category_id)
        const day = Math.ceil((new Date(productDetail.export_date).getTime() - new Date(productDetail.import_date).getTime()) / (24 * 60 * 60 * 1000));
        const pricing = this.data.pricing._data.find((pricing: any) => {
            return this.data.category._data.find((category: any) => {
                return (category.pricing_type_id == pricing.pricing_type_id && productDetail.category_id == category.category_id);
            });
        });
        const rate = pricing.rate;
        switch (categoryID) {
            case 1:
                return calculateCostSuppleMentary(day, productDetail, rate);
            case 2:
                return calculateCostWearing(day, productDetail, rate);
            case 3:
                return calculateCostOther(day, productDetail, rate);
            default:
                return 0;
        }
    }


}