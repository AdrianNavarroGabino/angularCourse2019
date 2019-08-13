// Adrián Navarro Gabino

import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators'
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Responses } from 'interfaces/responses';
import { IEvent } from 'interfaces/i-event';
import { SERVICES } from '../app.constants';
import { ResponseEvent } from 'interfaces/response-event';
import { OkResponse } from 'interfaces/ok-response';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(private http: HttpClient) { }

  getEvents(): Observable<IEvent[]> {
    return this.http.get<Responses>(SERVICES + '/events').pipe(
      map(response => response.events),
      catchError((resp: HttpErrorResponse) =>
        throwError(`Error obteniendo eventos. Codigo de servidor: ${resp.status}. Mensaje: ${resp.message}`))
    );
  }

  addEvent(event: IEvent) : Observable<IEvent> {
    return this.http.post<ResponseEvent>(SERVICES + '/events', event).pipe(
      catchError((resp: HttpErrorResponse) => throwError(`Error insertando
       evento! Código de servidor: ${resp.status}. Mensaje: ${resp.message}`)),
        map(resp => {
          if(!resp.ok) { throw resp.error; }
          return resp.event;
        })
    );
  }

  deleteEvent(idEvent: number): Observable<boolean> {
    return this.http.delete<OkResponse>(SERVICES + '/events/' + idEvent).pipe(
      catchError((resp: HttpErrorResponse) => throwError(`Error eliminando
       evento! Código de servidor: ${resp.status}. Mensaje: ${resp.message}`)),
        map(resp => {
          if(!resp.ok) { throw resp.error; }
          return resp.ok;
        })
    );
  }
}
