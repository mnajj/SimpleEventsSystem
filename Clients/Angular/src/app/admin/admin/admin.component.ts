import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  public isMain: boolean = true;

  // Data
  // Event
  public eventsList: any = [];
  public selectedEvents: any = [];
  // Speaker
  public speakersList: any = [];
  public selectedSpeakers: any = [];
  public selectedOtherSpeakers: any = [];
  // Student
  public studentsList: any = [];
  public selectedStudents: any = [];

  public isAddEvent: boolean = false;
  public isEditEvent: boolean = false;
  public isDeleteEvent: boolean = false;

  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    this.getAllEvents();
    this.getAllSpeakers();
    this.getAllStudents();
  }

  // Data
  getAllEvents() {
    this.adminService.getAllEvents().subscribe((d) => {
      this.eventsList = d;
    });
  }

  getAllSpeakers() {
    this.adminService.getAllSpeakers().subscribe((d) => {
      this.speakersList = d;
    });
  }

  getAllStudents() {
    this.adminService.getAllStudents().subscribe((data) => {
      this.studentsList = data;
    });
  }

  // Toogels
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
    console.log(this.selectedSpeakers);
  }
}
