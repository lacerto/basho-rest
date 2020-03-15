import * as express from "express";

const app: express.Express = express();

app.get("/basho/:bashoId", (req: express.Request, res: express.Response) => {
    res.json({ basho: req.params.bashoId });
});

app.listen(3000, () => {
    console.log('Server started.');
});
