import { Component, OnInit, TemplateRef } from '@angular/core';

import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';
import {
  BsModalService,
  BsModalRef,
  PaginationModule,
  PageChangedEvent
} from 'ngx-bootstrap';
import { ActivatedRoute } from '@angular/router';
import { ChartDataService } from '../../services/chart-data.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  constructor(
    private userService: UserService,
    private modalService: BsModalService,
    private chatDataService: ChartDataService
  ) {}

  modalRef: BsModalRef;
  users: User[];
  returnedArray: User[];
  id: number;
  totalItems: number;
  itemsPerPage = 5;
  curentPage: number;
  alertMessage = {
    display: false,
    type: '',
    message: ''
  };

  ngOnInit() {
    this.getUsers();
  }

  openModal(template: TemplateRef<any>, id: number) {
    this.id = id;
    this.modalRef = this.modalService.show(template);
  }

  getUsers(): void {
    this.userService.getUsers().subscribe(users => {
      this.users = users;
      this.returnedArray = this.users.slice(0, 5);
      this.totalItems = this.users.length;
      this.chatDataService.designationsData.next(this.getDesgCountObject());
    });
  }

  deleteUser(): void {
    this.userService.deleteUser(this.id).subscribe(
      data => {
        console.log('Deleted object:' + this.id);
        this.users = this.users.filter(user => user.id !== this.id);
        this.setPage(this.curentPage);
        this.showAlert('warning', 'Sucessfully deleted');
      },
      error => {
        console.error(error);
        this.showAlert('danger', 'Error while deleting');
      }
    );
    this.modalRef.hide();
  }

  showAlert(type: String, message: String) {
    this.alertMessage.display = true;
    this.alertMessage.type = type + '';
    this.alertMessage.message = message + '';
    setTimeout(() => {
      this.alertMessage.display = false;
    });
  }

  pageChanged(event: any): void {
    this.curentPage = event.page;
    this.setPage(this.curentPage);
  }

  setPage(page: number): void {
    const startItem = (page - 1) * this.itemsPerPage;
    const endItem = page * this.itemsPerPage;
    this.returnedArray = this.users.slice(startItem, endItem);
    this.chatDataService.designationsData.next(this.getDesgCountObject());
  }

  getDesgCountObject(): any {
    const  programmerAnalystCount = this.users.filter(user => user.designation === 'Programmer Analyst').length;
    const  businessAnalystCount = this.users.filter(user => user.designation === 'Business Analyst').length;
    const  designAnalystCount = this.users.filter(user => user.designation === 'Design Analyst').length;
    const  qualityAnalystCount = this.users.filter(user => user.designation === 'Quality Analyst').length;
    return {
      'programmerAnalystCount': programmerAnalystCount,
      'designAnalystCount': designAnalystCount,
      'businessAnalystCount': businessAnalystCount,
      'qualityAnalystCount': qualityAnalystCount,
    };
  }
}
