export interface IProduct {
  product_id: number,
  category_id: number,
  size: {
    width: number,
    hight: number
    length: number
  },
  weight: number
  import_date: string
  export_date: string | Date
  cost?: number
} 