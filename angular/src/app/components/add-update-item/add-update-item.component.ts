import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalType } from 'src/app/shared/enum/modal-type.enum';

@Component({
  selector: 'app-add-update-item',
  templateUrl: './add-update-item.component.html',
  styleUrls: ['./add-update-item.component.css']
})
export class AddUpdateItemComponent implements OnInit {

  @Input() modalType: string;
  @Input() modalTitle: string;
  @Output() eventAddList = new EventEmitter();
  @Output() eventAddTask = new EventEmitter();

  formGroup: FormGroup;
  submitted = false;

  constructor(private modalRef: BsModalRef, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.formGroup = this.initForm();
  }

  initForm() {
    return this.fb.group({
      content: ['', Validators.required]
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
      case ModalType.ADD_TASK:
        this.eventAddTask.emit(formValue);
        break;
    }
    this.cancel();
  }

  cancel() {
    this.modalRef.hide();
  }

}
