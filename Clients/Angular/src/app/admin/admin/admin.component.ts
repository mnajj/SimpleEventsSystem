import { Component, OnInit } from '@angular/core';
import { CreateEventDto } from '../../Dtos/createEventDto.dto';
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
  public title: string = '';
  public date: Date = new Date();

  public eventsList: any = [];
  public selectedEvents: any = [];
  // Speaker
  public speakersList: any = [];
  public mainSpeakerId: string = '';
  public selectedOtherSpeakers: any = [];
  // Student
  public studentsList: any = [];
  public selectedStudents: any = [];
  // *** //

  // Toggeles
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
  toggleAddEvent() {
    this.isMain = !this.isMain;
    this.isAddEvent = !this.isAddEvent;
  }
  toggleEditEvent() {
    this.isMain = !this.isMain;
    this.isEditEvent = !this.isEditEvent;
  }
  toggleDeleteEvent() {
    this.isMain = !this.isMain;
    this.isDeleteEvent = !this.isDeleteEvent;
  }

  addNewEvent() {
    const dto: CreateEventDto = {
      title: this.title,
      date: this.date,
      mainSpeakerId: Number.parseInt(this.mainSpeakerId),
      otherSpeakers: this.selectedOtherSpeakers,
      students: this.selectedStudents,
    };
    console.log(dto);
    this.adminService.addNewEvent(dto);
    this.toggleAddEvent();
  }
}
