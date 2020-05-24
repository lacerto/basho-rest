import * as express from 'express';
import * as moment from 'moment';
import { Basho } from './basho/Basho';
import getNextBasho from './basho/next_basho';

export default function RequestHandler(req: express.Request, res: express.Response): void {
    let now = moment().startOf('day');
    console.log(`Current date: ${now.format('YYYY-MM-DD')}`);

    let bashoData: Basho = getNextBasho(now);

    res.json(bashoData);
}