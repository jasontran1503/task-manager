import { Component, OnInit, Input } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AddUpdateItemComponent } from '../add-update-item/add-update-item.component';
import { Task } from 'src/app/shared/models/task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  modalRef: BsModalRef;
  selectedIndex: number = null;

  @Input() tasks: Task[];

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

  activeTaskItem(index: number) {
    this.selectedIndex = index;
  }

}
