// Adrián Navarro Gabino

import { Observable } from 'rxjs';

export interface ComponentDeactivate {
    canDeativate: () => Observable<boolean> | Promise<boolean> | boolean;
}
