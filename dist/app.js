"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const index_1 = __importDefault(require("./routes/index"));
const mustache_express_1 = __importDefault(require("mustache-express"));
const app = (0, express_1.default)();
const port = process.env.port || 9000;
app.engine('html', (0, mustache_express_1.default)());
app.set('views', path_1.default.join(__dirname, '../views'));
app.set('view engine', 'html');
app.use('/static', express_1.default.static(path_1.default.join(__dirname, '../dist/static')));
app.use('/scripts', express_1.default.static(path_1.default.join(__dirname, '../node_modules')));
app.use('/', index_1.default);
app.listen(port, () => {
    console.log(`${__dirname}
################################################
    Server listening on port: ${port}
################################################`);
});
//# sourceMappingURL=app.js.map