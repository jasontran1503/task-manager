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
  @Output() openModalUpdateTaskItem = new EventEmitter();
  @Output() deleteTaskItem = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  addTask() {
    this.openModalAddTaskItem.emit();
  }

  updateTask(task: Task) {
    this.openModalUpdateTaskItem.emit(task);
  }

  deleteTask(taskId: string) {
    this.deleteTaskItem.emit(taskId);
  }

}
