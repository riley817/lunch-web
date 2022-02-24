import express, { Request, Response, NextFunction } from 'express';
import path from 'path';
import indexRouter from './routes/index'
import mustachExpress from 'mustache-express';

const app = express();
const port = process.env.port || 9000;

app.engine('html', mustachExpress())

app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'html');

app.use('/static', express.static(path.join(__dirname, '../dist/static')))
app.use('/scripts', express.static(path.join(__dirname, '../node_modules')))
app.use('/', indexRouter);

app.listen(port, () => {
    console.log(`${__dirname}
################################################
    Server listening on port: ${port}
################################################`);
});
