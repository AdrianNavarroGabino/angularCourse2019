// Adrián Navarro Gabino

import { IEvent } from './i-event';

export interface ResponseEvents {
    ok: boolean;
    events?: IEvent[];
    error?: string;
}
