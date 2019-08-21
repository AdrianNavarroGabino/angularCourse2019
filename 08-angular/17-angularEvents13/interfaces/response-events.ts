// Adrián Navarro Gabino

import { IEvent } from '../src/app/events/interfaces/i-event';

export interface ResponseEvents {
    ok: boolean;
    events?: IEvent[];
    error?: string;
}
