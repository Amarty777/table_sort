import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit, OnDestroy {
  protected ngUnsubscribe: Subject<void> = new Subject<void>();
  @Input() page = 1;
  @Input() total = 1;
  @Input() take = 5;
  @Input() id = '';
  @Output() pageChange = new EventEmitter<number>();

  type = 0;
  pageCount = 1;

  constructor() { }

  ngOnInit(): void {
    this.initType();
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  changePage(page: number): void {
    if (page < 1) {
      page = 1;
    }
    if (page > this.pageCount) {
      page = this.pageCount;
    }
    this.page = page;
    this.initType();
    this.pageChange.emit(this.page);
  }

  initType(): void {
    this.pageCount = Math.trunc(this.total / this.take) + (this.total % this.take === 0 ? 0 : 1);
    if (this.total === 0) {
      this.type = 6;
      return;
    }
    if (this.pageCount <= 5) {
      this.type = 0;
      return;
    }
    if (this.page >= 1 && this.page < 3) {
      this.type = 1;
      return;
    }
    if (this.page >= 3 && this.page <= 5) {
      this.type = 2;
      return;
    }
    if (this.page - 4 > 1 && this.page + 4 < this.pageCount) {
      this.type = 3;
      return;
    }
    if (this.page >= this.pageCount - 4 && this.page <= this.pageCount - 3) {
      this.type = 4;
      return;
    }
    if (this.page + 3 > this.pageCount) {
      this.type = 5;
      return;
    }
  }
}
