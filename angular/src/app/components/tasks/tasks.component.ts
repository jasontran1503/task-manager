import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AddUpdateItemComponent } from '../add-update-item/add-update-item.component';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  modalRef: BsModalRef;

  constructor(private modalService: BsModalService) { }

  ngOnInit(): void {
  }

  addTaskItem() {
    this.modalRef = this.modalService.show(AddUpdateItemComponent,
      {
        class: 'modal-dialog modal-dialog-centered',
        ignoreBackdropClick: true
      });
  }

}
