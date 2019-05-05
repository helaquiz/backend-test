# History Route

## Get history list
| Name   | Description     |
| ------ | --------------- |
| Method | GET             |
| Path   | {{url}}/history |

#### Request Query description
| Name | Require | Value | Description |
| ---- | ------- | ----- | ----------- |

#### Request Body description
| Name | Require | Value | Description |
| ---- | ------- | ----- | ----------- |

#### Request example
URL : `{{ur}}/history`

METHOD : `GET`

BODY:
```
```

#### Response example
```
{
    "code": 0,
    "status": true,
    "msgInfo": "getAllHistortList() is finished",
    "data": [
        {
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
    ]
}
```