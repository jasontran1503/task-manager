import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-add-update-item',
  templateUrl: './add-update-item.component.html',
  styleUrls: ['./add-update-item.component.css']
})
export class AddUpdateItemComponent implements OnInit {

  constructor(private modalRef: BsModalRef) { }

  ngOnInit(): void {
  }

  cancel() {
    this.modalRef.hide();
  }

}
