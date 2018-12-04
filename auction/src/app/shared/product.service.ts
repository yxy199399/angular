import {EventEmitter, Injectable} from '@angular/core';
import {Observable} from 'rxjs/index';
import { map } from 'rxjs/internal/operators';
import {Http} from '@angular/http';
import { URLSearchParams } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  searchEvent: EventEmitter<ProductSearchParams> = new EventEmitter();
  constructor(private http: Http) {
  }
  getProducts(): Observable<Product[]> {
    return this.http.get('/api/products').pipe(map(res => res.json()));
  }
  getProduct(id: number): Observable<Product> {
    return this.http.get('/api/product/' + id).pipe(map(res => res.json()));
  }
  getCommentsForProductId(id: number): Observable<Comment[]> {
    return this.http.get('/api/product/' + id + '/comments').pipe(map(res => res.json()));
  }
  getAllCategories(): string[] {
    return ['电子产品', '硬件设备', '图书'];
  }
  search(params: ProductSearchParams): Observable<Product[]> {
    return this.http.get('/api/products', {search: this.encodeParams(params)}).pipe(map(res => res.json()));
  }
  private encodeParams(params: ProductSearchParams) {
    return Object.keys(params)
      .filter(key => params[key])
      .reduce((sum: URLSearchParams , key: string) => {
        sum.append(key, params[key]);
        return sum;
      }, new URLSearchParams());
  }
}

export class ProductSearchParams {
  constructor(
    public title: string,
    public price: number,
    public category: string) {}
}
export class Product {
  constructor(
    public id: number,
    public title: string,
    public price: number,
    public rating: number,
    public desc: string,
    public cateqories: Array<string>
  ) { }
}

export class Comment {
  constructor(
    public id: number,
    public productId: number,
    public timestamp: string,
    public user: string,
    public rating: number,
    public content: string
  ) {}
}


