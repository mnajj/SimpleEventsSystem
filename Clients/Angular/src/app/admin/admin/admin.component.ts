import { Component, OnInit } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  public isMain: boolean = true;
  // Event Section
  public eventsList: any = [
    {
      title: 'First',
    },
    {
      title: 'Second',
    },
  ];
  public selectedEvents: any = [];

  public isAddEvent: boolean = false;
  public isEditEvent: boolean = false;
  public isDeleteEvent: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  showAddEvent() {
    this.isMain = false;
    this.isAddEvent = true;
  }
  showEditEvent() {
    this.isMain = false;
    this.isEditEvent = true;
  }
  showDeleteEvent() {
    this.isMain = false;
    this.isDeleteEvent = true;
  }

  addNewEvent() {
    console.log(this.selectedEvents[0].$ngOptionLabel);
  }
}
