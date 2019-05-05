import { calculateCostSuppleMentary, calculateCostWearing, calculateCostOther } from "../src/libs/basic-helper";
const chai = require('chai');
const expect = chai.expect;
describe('Calculate Cost', function () {
  it('อาหารเสริม คำนวนถูกต้อง', function (done) {
    const productMock = {
      "product_id": 1,
      "category_id": 1,
      "import_code": "",
      "size": {
        "width": 0.01,
        "hight": 0.01,
        "length": 0.01
      },
      "weight": 0.001,
      "import_date": "2019-05-02T10:33:54.775Z",
      "export_date": ""
    }
    const cost = calculateCostSuppleMentary(5, productMock, 1)
    expect(cost).to.be.equal(31);
    done();
  });

  it('เสื้อผ้า รู้น้ำหนัก คำนวนถูกต้อง', function (done) {
    const productMock = {
      "product_id": 2,
      "category_id": 2,
      "size": {
        "width": 0.01,
        "hight": 0.01,
        "length": 0.01
      },
      "weight": 3.0,
      "import_date": "2019-05-03T09:33:54.775Z",
      "export_date": ""
    };
    const cost = calculateCostWearing(5, productMock, 20);
    expect(cost).to.be.equal(300)
    done()
  });

  it('เสื้อผ้า ไม่รู้น้ำหนัก คำนวนถูกต้อง', function (done) {
    const productMock = {
      "product_id": 3,
      "category_id": 2,
      "size": {
        "width": 0.35,
        "hight": 0.10,
        "length": 0.10
      },
      "weight": 0,
      "import_date": "2019-04-25T09:33:54.775Z",
      "export_date": ""
    }
    
    const cost = calculateCostWearing(10, productMock, 20);
    expect(cost).to.be.equal(500)
    done()
  });


  it('อื่นๆ คำนวนถูกต้อง', function (done) {
    const productMock = {
      "product_id": 4,
      "category_id": 3,
      "size": {
        "width": 2.0,
        "hight": 2.0,
        "length": 2.0
      },
      "weight": 0.1,
      "import_date": "2019-05-03T09:33:54.775Z",
      "export_date": ""
    }
    const cost = calculateCostOther(10, productMock, 10);
    expect(cost).to.be.equal(800)
    done()
  });
});

