# Product Route

## Get all product list
| Name   | Description     |
| ------ | --------------- |
| Method | GET             |
| Path   | {{url}}/product |

#### Request Query description
| Name | Require | Value | Description |
| ---- | ------- | ----- | ----------- |

#### Request Body description
| Name | Require | Value | Description |
| ---- | ------- | ----- | ----------- |

#### Request example
URL : `{{url}}/product`

METHOD : `GET`

BODY:
```
```

#### Response example
```
{
    "code": 0,
    "status": true,
    "msgInfo": "getProductList() is finished",
    "data": [
        {
            "warehouse_id": 1,
            "product_id": 1,
            "category_id": 1,
            "size": {
                "width": 0.01,
                "hight": 0.01,
                "length": 0.01
            },
            "weight": 0.001,
            "import_date": "2019-05-02T10:33:54.775Z",
            "export_date": ""
        },
        {
            "warehouse_id": 1,
            "product_id": 2,
            "category_id": 2,
            "size": {
                "width": 0.05,
                "hight": 0.05,
                "length": 0.05
            },
            "weight": 3,
            "import_date": "2019-04-25T09:33:54.775Z",
            "export_date": ""
        },
        {
            "warehouse_id": 1,
            "product_id": 3,
            "category_id": 2,
            "size": {
                "width": 0.35,
                "hight": 0.1,
                "length": 0.1
            },
            "weight": 0,
            "import_date": "2019-04-25T09:33:54.775Z",
            "export_date": ""
        },
        {
            "warehouse_id": 1,
            "product_id": 4,
            "category_id": 3,
            "size": {
                "width": 0.01,
                "hight": 0.01,
                "length": 0.01
            },
            "weight": 0.1,
            "import_date": "2019-05-03T09:33:54.775Z",
            "export_date": ""
        }
    ]
}
```


## Add new product
| Name   | Description     |
| ------ | --------------- |
| Method | PUT             |
| Path   | {{url}}/product |

### Request Body description
| Name        | Require | Type   | Description                                             |
| ----------- | ------- | ------ | ------------------------------------------------------- |
| category_id | YES     | Number | หมวดหมู่ของประเภทสินค้า 1=อาหารเสริม 2=เสื้อผ้า 3=อื่นๆ |
| size        | YES     | `Size` | -                                                       |

### `Size` object description
| Name   | Require | Type   | Description |
| ------ | ------- | ------ | ----------- |
| width  | YES     | Number | ความกว้าง   |
| hight  | YES     | Number | ความยาว     |
| length | YES     | Number | ความสูง     |

#### Request example
URL : `{{url}}/product`

METHOD : `PUT`

BODY : 
```
{
    "category_id": 2,
    "size": {
        "width": 0.1,
        "hight": 0.1,
        "length": 0.1
    }
}
```                                                   

#### Response example
```
{
    "code": 1,
    "msgInfo": "OK",
    "data": {
        "product_id": 5,
        "category_id": 2,
        "size": {
            "width": 0.1,
            "hight": 0.1,
            "length": 0.1
        },
        "weight": 0,
        "import_date": "2019-05-05T09:57:40.870Z",
        "export_date": ""
    }
}
```

## Remove product
| Name   | Description                 |
| ------ | --------------------------- |
| Method | DELETE                      |
| Path   | {{url}}/product/:product_id |

### Request query description
| Name       | Require | Type   | Description       |
| ---------- | ------- | ------ | ----------------- |
| product_id | YES     | Number | รหัส id ของสินค้า |

#### Request example
URL : `{{url}}/product/5`

METHOD : `DELETE`

BODY : 
```
```

#### Response example
```
{
    "code": 1,
    "msgInfo": "OK",
    "data": {
        "product_id": 5,
        "category_id": 2,
        "size": {
            "width": 0.1,
            "hight": 0.1,
            "length": 0.1
        },
        "weight": 0,
        "import_date": "2019-05-05T09:57:40.870Z",
        "export_date": "2019-05-05T09:58:28.655Z",
        "cost": 50
    }
}
```