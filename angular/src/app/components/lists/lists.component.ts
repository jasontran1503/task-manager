import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { List } from 'src/app/shared/models/list';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit {

  selectedIndex: number = null;

  @Input() lists: List[];
  @Output() getListItemDetail = new EventEmitter();
  @Output() deleteListItem = new EventEmitter();
  @Output() refreshListItem = new EventEmitter();
  @Output() openModalAddListItem = new EventEmitter();
  @Output() openModalUpdateListItem = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  addList() {
    this.openModalAddListItem.emit();
  }

  refreshList() {
    this.refreshListItem.emit();
  }

  updateList(list: List) {
    this.openModalUpdateListItem.emit(list);
  }

  deleteList(id: string) {
    this.deleteListItem.emit(id);
  }

  activeListItem(list: List, index: number) {
    this.selectedIndex = index;
    this.getListItemDetail.emit(list);
  }

}
