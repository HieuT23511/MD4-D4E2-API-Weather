"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const api_router_1 = require("./src/routers/api.router");
const PORT = 3000;
const app = (0, express_1.default)();
app.set('view engine', 'ejs');
app.set('views', './src/views');
app.use(body_parser_1.default.json());
app.use(express_1.default.json());
app.use(api_router_1.apiRouter);
app.listen(PORT, 'localhost', () => {
    console.log(`App is running at http://localhost:${PORT}`);
});
//# sourceMappingURL=index.js.map