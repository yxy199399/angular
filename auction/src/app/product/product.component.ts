import { Component, OnInit } from '@angular/core';
// import {Product} from '../shared/product.service';
import {Product, ProductService} from '../shared/product.service';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/internal/operators';
import {Observable} from 'rxjs/index';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: Observable<Product[]>;
  // private keyword: string;
  // private titleFilter: FormControl = new FormControl();
  constructor(private productService: ProductService) {
    // this.titleFilter
    //   .valueChanges
    //   .pipe(debounceTime(500))
    //   .subscribe(value => this.keyword = value);
  }

  ngOnInit() {
    this.products = this.productService.getProducts();
    this.productService.searchEvent.subscribe(
      params => this.products = this.productService.search(params)
    );
  }

}

