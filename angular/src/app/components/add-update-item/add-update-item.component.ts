import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-update-item',
  templateUrl: './add-update-item.component.html',
  styleUrls: ['./add-update-item.component.css']
})
export class AddUpdateItemComponent implements OnInit {

  @Input() modalType: string;
  @Output() eventAddList = new EventEmitter();

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

    this.eventAddList.emit(formValue);
    this.cancel();
  }

  cancel() {
    this.modalRef.hide();
  }

}
