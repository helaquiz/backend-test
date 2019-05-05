// declare static node env
const env = process.env.NODE_ENV; // 'local' | development'|'production'
// 3rd Party
import * as express from "express";
import methodOverride from "method-override";
import * as bodyParser from "body-parser"
import * as cors from "cors";
import * as morgan from "morgan";
import * as errorHandler from "errorhandler";
import * as path from 'path';

import { Configuration } from "./config"
import { DAL } from './data-access/DAL'

import * as ROUTE from "./routes/ROUTES"

new Configuration();
new DAL();

let server = express.default();
server.disable('etag');
server.use(cors.default());
server.use(bodyParser.json({ limit: '10mb' }));
server.use(bodyParser.urlencoded({ extended: true, limit: '10mb' }));
server.use(methodOverride());
server.use(express.static(path.join(__dirname, '..')));

if (env === 'development' || env == 'local') {
    server.use(morgan.default('common'));
    server.use(errorHandler.default());
} else {
    server.use(morgan.default(':remote-addr :remote-user [:date[clf]] :method :url :status :res[content-length] :response-time ms :referrer ":user-agent"'));
}

// ==============================
server.use(ROUTE.productRoute);
server.use(ROUTE.historyRoute);


server.listen(Configuration.serverPort, function () {
    console.log(`${Configuration.serverTitle} Server start listening on port : ${Configuration.serverPort}`);
    console.log(`=========================Worker ${process.pid} started ===================================`);
});

// export const startServer = (port: number, callback: Function) => {
//     server.listen(port, callback);
// }

// export { server }

// รับเข้าสินค้าได้เป็นกล่อง 
// นำสินค้าออกได้เป็นกล่อง
// คำนวณค่าบริการสำหรับการจัดเก็บสินค้าครั้งนั้นๆ ได้
// ดูรายละเอียดสินค้าต่างๆ ที่อยู่ในคลังได้   PASS 
// ดูข้อมูลรายละเอียดผลประกอบการทั้งหมดได้
// อื่นๆ ที่เห็นว่าเป็นประโยชน์ต่อการดำเนินกิจการ