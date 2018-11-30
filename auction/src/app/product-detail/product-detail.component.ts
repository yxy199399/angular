import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Product, Comment, ProductService} from '../shared/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  private product: Product;
  private comments: Comment[];
  private isCommentHidden = true;
  newRating = 5;
  newComment = '';
  constructor(private router: ActivatedRoute, private productService: ProductService) { }

  ngOnInit() {
    const productId: number = this.router.snapshot.params['productId'];
    this.product = this.productService.getProduct(productId);
    this.comments = this.productService.getCommentsForProductId(productId);
  }
  addComment() {
    const comment = new Comment(0, this.product.id, new Date().toISOString(), 'someone', this.newRating, this.newComment);
    this.comments.unshift(comment);
    this.newComment = null;
    this.newRating = 5;
    this.isCommentHidden = true;
    const sum = this.comments.reduce(( sum, comment) => sum + comment.rating, 0);
    this.product.rating = sum / this.comments.length ;
  }

}
