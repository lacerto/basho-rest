import * as express from "express";
import RequestHandler from './handler';

const app: express.Express = express();

app.get("/nextbasho", RequestHandler);

app.listen(3000, () => {
    console.log('Server started.');
});
