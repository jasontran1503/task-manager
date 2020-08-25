import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
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
  @Output() openModalAddTaskItem = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  addTask() {
    this.openModalAddTaskItem.emit();
  }

  activeTaskItem(index: number) {
    this.selectedIndex = index;
  }

}
