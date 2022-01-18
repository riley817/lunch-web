import express, { Request, Response, NextFunction } from 'express';
import path from 'path';
import indexRouter from './routes/index';
import mustachExpress from 'mustache-express';

const app = express();
const port = process.env.port || 9000;

app.engine('html', mustachExpress())

app.set('view engine', 'html');
app.set('views', path.join(__dirname, 'views'));

app.use('/', indexRouter);

app.listen(port, () => {
    console.log(`${__dirname}
################################################
    Server listening on port: ${port}
################################################`);    
});
