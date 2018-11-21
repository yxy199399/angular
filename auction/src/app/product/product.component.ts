import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  private products: Array<Product>;
  constructor() { }

  ngOnInit() {
    this.products = [
      new Product(1, '第一个商品', 1.99, 3, '这是第一个商品，我在学习angular', ['电子产品', '硬件设备']),
      new Product(2, '第二个商品', 2.99, 3, '这是第二个商品，我在学习angular', ['图书']),
      new Product(3, '第三个商品', 1.85, 4, '这是第三个商品，我在学习angular', ['电子产品', '图书']),
      new Product(4, '第四个商品', 3.96, 4, '这是第四个商品，我在学习angular', ['硬件设备']),
      new Product(5, '第五个商品', 4.79, 4, '这是第五个商品，我在学习angular', ['图书', '硬件设备']),
      new Product(6, '第六个商品', 2.88, 3, '这是第六个商品，我在学习angular', ['电子产品']),
    ];
  }

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
