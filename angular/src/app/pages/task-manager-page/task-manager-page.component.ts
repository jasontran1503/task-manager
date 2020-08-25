import { Component, OnInit, OnDestroy } from '@angular/core';
import { ListService } from 'src/app/services/list.service';
import { List } from '../../shared/models/list';
import { Task } from '../../shared/models/task';
import { DataResponse } from 'src/app/shared/models/data-response';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { NgxSpinnerService } from 'ngx-spinner';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { AddUpdateItemComponent } from 'src/app/components/add-update-item/add-update-item.component';
import { ModalType } from 'src/app/shared/enum/modal-type.enum';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task-manager-page',
  templateUrl: './task-manager-page.component.html',
  styleUrls: ['./task-manager-page.component.css'],
  // providers: [NgxSpinnerService]
})
export class TaskManagerPageComponent implements OnInit, OnDestroy {

  lists: List[];
  tasks: Task[];
  modalRef: BsModalRef;
  listActive: List;

  destroy$ = new Subject();

  constructor(
    private listService: ListService,
    private taskService: TaskService,
    private modalService: BsModalService,
    private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.getAllLists();
  }

  getAllLists() {
    this.spinner.show();
    this.listService.getAllLists()
      .pipe(takeUntil(this.destroy$))
      .subscribe((response: DataResponse) => {
        this.spinner.hide();
        this.lists = response.data;
      });
  }

  getListItemDetail(listItem: List) {
    this.listActive = listItem;
    this.spinner.show();
    this.taskService.getAllTasksByListId(listItem._id)
      .pipe(takeUntil(this.destroy$))
      .subscribe((response: DataResponse) => {
        this.spinner.hide();
        this.tasks = response.data;
      });
  }

  deleteListItem(listId: string) {
    this.spinner.show();
    this.listService.deleteList(listId)
      .pipe(takeUntil(this.destroy$))
      .subscribe((response: any) => {
        this.spinner.hide();
        this.getAllLists();
      });
  }

  addListItem(listName: string) {
    this.spinner.show();
    this.listService.addList(listName)
      .pipe(takeUntil(this.destroy$))
      .subscribe((response: any) => {
        this.spinner.hide();
        console.log(response);
      });
  }

  openModalAddListItem() {
    const initialState = {
      modalType: ModalType.ADD_LIST,
      modalTitle: 'Create a new list'
    };
    this.modalRef = this.modalService.show(AddUpdateItemComponent,
      {
        class: 'modal-dialog modal-dialog-centered',
        ignoreBackdropClick: true,
        initialState
      });

    // after modal close
    this.modalRef.content.eventAddList.subscribe((res: any) => {
      this.addListItem(res.content);
      this.getAllLists();
    });
  }

  openModalUpdateListItem() {
    const initialState = {
      modalType: ModalType.UPDATE_LIST
    };
    this.modalRef = this.modalService.show(AddUpdateItemComponent,
      {
        class: 'modal-dialog modal-dialog-centered',
        ignoreBackdropClick: true,
        initialState
      });

    // after modal close
    this.modalRef.content.eventUpdateList.subscribe(res => {
      console.log(res);
    });
  }

  addTaskItem(listId: string, taskName: string) {
    this.spinner.show();
    this.taskService.addTask(listId, taskName)
      .pipe(takeUntil(this.destroy$))
      .subscribe((response: any) => {
        this.spinner.hide();
        console.log(response);
      });
  }

  openModalAddTaskItem() {
    if (this.listActive) {
      const initialState = {
        modalType: ModalType.ADD_TASK,
        modalTitle: 'Create a new task'
      };
      this.modalRef = this.modalService.show(AddUpdateItemComponent,
        {
          class: 'modal-dialog modal-dialog-centered',
          ignoreBackdropClick: true,
          initialState
        });

      // after modal close
      this.modalRef.content.eventAddTask.subscribe(res => {
        this.addTaskItem(this.listActive._id, res.content);
        this.getListItemDetail(this.listActive);
      });
    } else {
      alert('đá');
    }
  }

  openModalUpdateTaskItem() {
    const initialState = {
      modalType: ModalType.UPDATE_TASK
    };
    this.modalRef = this.modalService.show(AddUpdateItemComponent,
      {
        class: 'modal-dialog modal-dialog-centered',
        ignoreBackdropClick: true,
        initialState
      });

    // after modal close
    this.modalRef.content.eventUpdateTask.subscribe(res => {
      console.log(res);
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
