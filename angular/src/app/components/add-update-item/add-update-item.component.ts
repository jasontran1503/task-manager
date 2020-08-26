import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalType } from 'src/app/shared/enum/modal-type.enum';
import { List } from 'src/app/shared/models/list';
import { Task } from 'src/app/shared/models/task';

@Component({
  selector: 'app-add-update-item',
  templateUrl: './add-update-item.component.html',
  styleUrls: ['./add-update-item.component.css']
})
export class AddUpdateItemComponent implements OnInit {

  @Input() modalType: string;
  @Input() modalTitle: string;
  @Input() updatedList: List;
  @Input() updatedTask: Task;

  @Output() eventAddList = new EventEmitter();
  @Output() eventAddTask = new EventEmitter();
  @Output() eventUpdateList = new EventEmitter();
  @Output() eventUpdateTask = new EventEmitter();

  formGroup: FormGroup;
  submitted = false;

  constructor(private modalRef: BsModalRef, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.formGroup = this.initForm();

    if (this.modalType === ModalType.UPDATE_LIST) {
      this.patchValueForm(this.updatedList.listName);
    }
    if (this.modalType === ModalType.UPDATE_TASK) {
      this.patchValueForm(this.updatedTask.taskName);
    }
  }

  initForm() {
    return this.fb.group({
      content: ['', Validators.required]
    });
  }

  patchValueForm(value: string) {
    this.formGroup.patchValue({
      content: value
    });
  }

  onSubmit() {
    this.formGroup.markAllAsTouched();
    this.submitted = true;
    const formValue = this.formGroup.getRawValue();

    switch (this.modalType) {
      case ModalType.ADD_LIST:
        this.eventAddList.emit(formValue);
        break;
      case ModalType.UPDATE_LIST:
        this.eventUpdateList.emit(formValue);
        break;
      case ModalType.ADD_TASK:
        this.eventAddTask.emit(formValue);
        break;
      case ModalType.UPDATE_TASK:
        this.eventUpdateTask.emit(formValue);
        break;
    }
    this.cancel();
  }

  cancel() {
    this.modalRef.hide();
  }

}
