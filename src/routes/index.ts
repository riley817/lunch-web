import * as express from 'express';


const router = express.Router();

router.get('/',async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.render('index', {
        title : '페이지 제목입니다',
        data: [
            { name: 'bitcoin', symbol: 'BTC' },
            { name: 'ethereum', symbol: 'ETC' },
            { name: 'ripple', symbol: 'XRP' },
        ],
    });    
});

export default router;