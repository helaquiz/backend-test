import { IProduct } from "../interfaces/product.interface";

export function calProductWeight(weight: number = 0, size: { width: number, hight: number, length: number }) {
    if (!weight) {
        // 100 kg / m3
        const D = 100;
        // V ต้องอยู๋ในหน่วยของ M 
        const V = size.width * size.hight * size.length;
        const mass = (D * V)
        return mass.toPrecision(2);
    } else {
        return weight;
    }
}

export function calculateCostSuppleMentary(day: number, productDetail: IProduct, rate: number) {
    let cost = 0;
    const volume = Number((productDetail.size.width * productDetail.size.hight * productDetail.size.length).toPrecision(2)) * 1000000;
    const recursiveCalculateCost = (day: number, volume: number): number => {
        if (!day) {
            return cost;
        } else {
            cost += Math.pow(2, day - 1) * rate
            return recursiveCalculateCost(day - 1, volume);
        }
    }
    cost = recursiveCalculateCost(day, volume);
    return cost;
}

export function calculateCostWearing(day: number, productDetail: IProduct, rate: number) {
    let weight = 0
    if (productDetail.weight) {
        weight = Number(productDetail.weight);
    } else {
        weight = Number(calProductWeight(0, productDetail.size));
    }
    if (weight < 2.5) {
        weight = 1;
        rate = 50;
    }
    const cost = day * weight * rate
    return cost;
}

export function calculateCostOther(day: number, productDetail: IProduct, rate: number) {
    const volume = Number((productDetail.size.width * productDetail.size.hight * productDetail.size.length).toPrecision(2));
    return day * volume * rate;
}