import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    new Product(1, '第一个商品', 1.99, 3, '这是第一个商品，我在学习angular', ['电子产品', '硬件设备']),
    new Product(2, '第二个商品', 2.99, 3, '这是第二个商品，我在学习angular', ['图书']),
    new Product(3, '第三个商品', 1.85, 4, '这是第三个商品，我在学习angular', ['电子产品', '图书']),
    new Product(4, '第四个商品', 3.96, 4, '这是第四个商品，我在学习angular', ['硬件设备']),
    new Product(5, '第五个商品', 4.79, 4, '这是第五个商品，我在学习angular', ['图书', '硬件设备']),
    new Product(6, '第六个商品', 2.88, 3, '这是第六个商品，我在学习angular', ['电子产品']),
  ];
  private comments: Comment[] = [
    new Comment(1, 1, '2018-05-18 18:35:00', '张三', 3, '东西不错'),
    new Comment(2, 1, '2018-06-22 12:42:00', '张三', 3, '东西是不错'),
    new Comment(3, 1, '2018-07-30 17:57:00', '张三', 3, '东西挺不错'),
    new Comment(1, 2, '2018-08-26 13:46:00', '张三', 3, '东西还不错'),
  ];
  constructor() {
  }
  getProducts(): Product[] {
    return this.products;
  }
  getAllCategories(): string[] {
    return ['电子产品', '硬件设备', '图书'];
  }
  getProduct(id: number): Product {
    return this.products.find((product) => product.id == id);
  }
  getCommentsForProductId(id: number): Comment[] {
    return this.comments.filter((comment: Comment) => comment.productId == id);
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
