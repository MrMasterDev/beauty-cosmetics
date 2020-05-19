import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { EventsInterfaces } from 'src/app/core/interfaces/events.interfaces';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  private url = 'http://localhost:3000';

  constructor(
    private http: HttpClient
  ) { }

  getEvents(): Observable<Array<EventsInterfaces>> {
    return this.http.get<Array<EventsInterfaces>>(`${this.url}/events`)
  }

}

