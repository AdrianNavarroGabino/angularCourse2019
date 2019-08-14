// Adrián Navarro Gabino

import { Observable } from 'rxjs';

export interface ComponentDeactivate {
    canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}
