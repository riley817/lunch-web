import express, { Request, Response, NextFunction } from 'express';

const app = express();
const port = process.env.port || 9000;

app.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.send('welcome!');
});

app.listen(port, () => {
    console.log(`
################################################
    Server listening on port: ${port}
################################################`);    
});
