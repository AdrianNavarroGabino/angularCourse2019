import { Injectable } from '@angular/core';
import { IProduct } from 'interfaces/i-product';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators'
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ResponseProducts } from 'interfaces/response-products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private productURL = 'http://arturober.com/products-angular/products';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<IProduct[]> {
    return this.http.get<ResponseProducts>(this.productURL).pipe(
      map(response => response.products),
      catchError((resp: HttpErrorResponse) =>
        throwError(`Error obteniendo productos. Codigo de servidor: ${resp.status}. Mensaje: ${resp.message}`))
    );
  }
}
