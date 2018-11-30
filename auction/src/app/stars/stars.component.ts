import {Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit,
OnChanges {
  @Input()
  private rating: number;
  @Output()
  private ratingChange: EventEmitter<number> = new EventEmitter();
  // 输出属性是输入属性 + Change可用[(ngModel)]双向数据绑定语法
  private stars: boolean[];
  @Input()
  private readonly = true;
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.stars = [];
    for (let i = 0; i < 5; i++) {
      this.stars.push(i > this.rating - 1);
    }
  }
  clickStar(index: number) {
    if (!this.readonly) {
      this.rating = index + 1;
      this.ratingChange.emit(this.rating);
    }
  }

}
