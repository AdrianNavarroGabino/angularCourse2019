// Adrián Navarro Gabino

import { IEvent } from '../src/app/events/interfaces/i-event';

export interface ResponseEvent {
    ok: boolean;
    event: IEvent;
    error?: string;
    errors?: string[];
}
