import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { GoodsInterfaces } from 'src/app/core/interfaces/goods.interfaces';

@Injectable({
  providedIn: 'root'
})
export class GoodsService {
  private url = 'http://localhost:3000';

  constructor(
    private http: HttpClient
  ) { }

  getGoods(): Observable<Array<GoodsInterfaces>> {
    return this.http.get<Array<GoodsInterfaces>>(`${this.url}/goods`)
  }

}

