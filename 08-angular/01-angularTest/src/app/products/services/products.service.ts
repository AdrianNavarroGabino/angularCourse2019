// Adrián Navarro Gabino

import { Injectable } from '@angular/core';
import { IProduct } from 'src/app/products/interfaces/i-product';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators'
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ResponseProducts } from 'interfaces/response-products';
import { OkResponse } from 'interfaces/ok-response';
import { ProductResponse } from 'interfaces/product-response';

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

  getProduct(id: number): Observable<IProduct> {
    return this.http.get<{ product: IProduct }>(`${this.productURL}/${id}`).pipe(
      map(resp => {
        const p = resp.product;
        return p;
      }),
      catchError((resp: HttpErrorResponse) =>
        throwError(`Error obteniendo producto. Codigo de servidor: ${resp.status}. Mensaje: ${resp.message}`))
    );
  }

  changeRating(idProduct: number, rating: number) : Observable<boolean> {
    return this.http.put<OkResponse>(this.productURL + '/rating/' + idProduct,
                                    {rating: rating}).pipe(
      catchError((resp: HttpErrorResponse) => throwError(`Error cambiando
      puntuación! Código de servidor: ${resp.error}. Mensaje: ${resp.message}`)),
      map(resp => {
        if(!resp.ok) { throw resp.error; }
        return true;
      })
    )
  }

  addProduct(product: IProduct) : Observable<IProduct> {
    return this.http.post<ProductResponse>(this.productURL, product).pipe(
      catchError((resp: HttpErrorResponse) => throwError(`Error insertando
       producto! Código de servidor: ${resp.status}. Mensaje: ${resp.message}`)),
        map(resp => {
          if(!resp.ok) { throw resp.error; }
          return resp.product;
        })
    );
  }

  updateProduct(product: IProduct): Observable<boolean> {
    return this.http.put<OkResponse>(this.productURL + '/' + product.id,
      product).pipe(
        catchError((resp: HttpErrorResponse) => throwError(`Error modificando 
        producto!. Código de servidor: ${resp.status}. Mensaje: ${resp.message}`)),
        map(resp => {
          if(!resp.ok) { throw resp.error; }
          return true;
        })
      );
  }
}
