import express from "express";
import bodyParser from "body-parser";
import {apiRouter} from "./src/routers/api.router";
import * as path from "path";

const PORT = 3000;
const app = express();

//cau hinh views:
app.set('view engine','ejs');
app.set('views','./src/views');

//Parse:
app.use(bodyParser.json());
app.use(express.json());

//Router:
app.use(apiRouter);

//listen:
app.listen(PORT,'localhost',()=>{
    console.log(`App is running at http://localhost:${PORT}`);
})