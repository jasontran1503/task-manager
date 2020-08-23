import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { TasksComponent } from '../tasks/tasks.component';
import { AddUpdateItemComponent } from '../add-update-item/add-update-item.component';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit {

  modalRef: BsModalRef;
  lists = ['Học tập', 'Làm việc', 'Nghỉ ngơi', 'Du lịch'];
  selectedIndex: number = null;

  constructor(private modalService: BsModalService) { }

  ngOnInit(): void {
  }

  addListItem() {
    this.modalRef = this.modalService.show(AddUpdateItemComponent,
      {
        class: 'modal-dialog modal-dialog-centered',
        ignoreBackdropClick: true
      });
  }

  activeListItem(index: number) {
    this.selectedIndex = index;
  }

}
