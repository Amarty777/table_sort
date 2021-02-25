import { IDataItemResponse, IDataResponse } from './../../common.models';
import { Component, OnInit } from '@angular/core';
import { getTestTableData } from './../../fake-db.helper';

@Component({
  selector: 'app-table-sort',
  templateUrl: './table-sort.component.html',
  styleUrls: ['./table-sort.component.scss']
})
export class TableSortComponent implements OnInit {

  table: IDataResponse;
  isDesc = false;
  column = 'ID';
  count = 1200;

  thead = ['ID', 'Name', 'Distance', 'Speed', 'Result', 'Birthdate'];

  constructor() { }

  get firstOnPage(): number {
    return this.table.paginator.page * this.table.paginator.take - this.table.paginator.take + 1;
  }

  get lastOnPage(): number {
    const lastOnPage = this.table.paginator.page * this.table.paginator.take;
    return lastOnPage > this.table.paginator.totalCount ? this.table.paginator.totalCount : lastOnPage;
  }

  get paginatorTitle(): string {
    return `${this.firstOnPage} - ${this.lastOnPage} of ${this.table.paginator.totalCount}`
  }

  ngOnInit(): void {
    this.generaTable();
  }

  generaTable(): void {
    if (this.count > 10000) {
      this.count = 10000;
    }
    this.table = getTestTableData(this.count);
    this.goto(1);
  }

  takeChanged(event: any): void {
    const page = Math.round(this.firstOnPage / event.target.value);
    this.table.paginator.take = event.target.value;
    this.goto(page + 1);
  }

  goto(page: number): void {
    if (page * this.table.paginator.take - this.table.paginator.take + 1 > this.table.paginator.totalCount) {
      page--;
    }
    if (page < 1) {
      page = 1;
    }
    this.table.paginator.page = page;
    this.table.displayed = this.table.items.slice(
      this.table.paginator.page * this.table.paginator.take - this.table.paginator.take,
      this.table.paginator.page * this.table.paginator.take);
  }

  orderBy(column: string): void {
    if (column !== this.column) {
      this.column = column;
      this.isDesc = false;
    } else {
      this.isDesc = !this.isDesc;
    }
    this.orderByField();
  }

  orderByField(): void {
    if (this.column === 'ID') {
      if (this.isDesc) {
        this.table.items.sort(function (a, b) { return a.id - b.id; });
      } else {
        this.table.items.sort(function (a, b) { return b.id - a.id; });
      }
    }
    if (this.column === 'Distance') {
    if (this.isDesc) {
      this.table.items.sort(function (a, b) { return a.distance - b.distance; });
    } else {
      this.table.items.sort(function (a, b) { return b.distance - a.distance; });
    }
  }
    if (this.column === 'Speed') {
    if (this.isDesc) {
      this.table.items.sort(function (a, b) { return a.speed - b.speed; });
    } else {
      this.table.items.sort(function (a, b) { return b.speed - a.speed; });
    }
  }
    if (this.column === 'Result') {
    if (this.isDesc) {
      this.table.items.sort(function (a, b) { return a.result - b.result; });
    } else {
      this.table.items.sort(function (a, b) { return b.result - a.result; });
    }
  }
    if (this.column === 'Birthdate') {
    if (this.isDesc) {
      this.table.items.sort(function (a, b) { return a.birthDate.getTime() - b.birthDate.getTime(); });
    } else {
      this.table.items.sort(function (a, b) { return b.birthDate.getTime() - a.birthDate.getTime(); });
    }
  }
    if (this.column === 'Name') {
    if (this.isDesc) {
      this.table.items.sort(function (a, b) {
        const firstA = a.firstName.toLowerCase();
        const firstB = b.firstName.toLowerCase();
        const lastA = a.lastName.toLowerCase();
        const lastB = b.lastName.toLowerCase();
        return (firstA > firstB) ? -1 : (firstA === firstB) ? ((lastA > lastB) ? -1 : 1) : 1;
      });
    } else {
      this.table.items.sort(function (a, b) {
        const firstA = a.firstName.toLowerCase();
        const firstB = b.firstName.toLowerCase();
        const lastA = a.lastName.toLowerCase();
        const lastB = b.lastName.toLowerCase();
        return (firstA > firstB) ? 1 : (firstA === firstB) ? ((lastA > lastB) ? 1 : -1) : -1;
      });
    }
  }
    this.goto(1);
  }

  pageChanged(event: any): void {
    this.goto(event);
  }
}
