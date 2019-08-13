// Adrián Navarro Gabino

import { IEvent } from './i-event';

export interface ResponseEvent {
    ok: boolean;
    event: IEvent;
    error?: string;
    errors?: string[];
}
