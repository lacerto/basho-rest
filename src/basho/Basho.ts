import * as moment from 'moment';

export interface Basho {
    readonly description: string;
    readonly venue: string;
    readonly firstDay: string;
    readonly finalDay: string;
    readonly previousFinalDay: string;
    readonly hasStarted: boolean;
}
