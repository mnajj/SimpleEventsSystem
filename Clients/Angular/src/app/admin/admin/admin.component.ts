import { Component, OnInit } from '@angular/core';
import { CreateSpeakerDto } from '../../Dtos';
import { CreateEventDto } from '../../Dtos/createEventDto.dto';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  // Data
  // Event
  public title: string = '';
  public date: Date = new Date();
  public eventId: string = '';

  public eventsList: any = [];
  public selectedEvents: any = [];
  // Speaker
  public speakersList: any = [];
  public mainSpeakerId: string = '';
  public selectedOtherSpeakers: any = [];
  public speakerEmail: string = '';
  public speakerPassword: string = '';
  public speakerUserName: string = '';
  public speakerAddress: string = '';

  // Student
  public studentsList: any = [];
  public selectedStudents: any = [];
  // *** //

  // Toggeles Flags
  public isMain: boolean = true;
  public isAddEvent: boolean = false;
  public isEditEvent: boolean = false;
  public isDeleteEvent: boolean = false;
  public isAddSpeaker: boolean = false;
  public isEditSpeaker: boolean = false;
  public isDeleteSpeaker: boolean = false;

  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    this.getAllEvents();
    this.getAllSpeakers();
    this.getAllStudents();
  }

  // Data
  getAllEvents() {
    this.adminService.getAllEvents().subscribe((data) => {
      this.eventsList = data;
    });
  }

  getAllSpeakers() {
    this.adminService.getAllSpeakers().subscribe((data) => {
      this.speakersList = data;
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

  toggleAddSpeaker() {
    this.isMain = !this.isMain;
    this.isAddSpeaker = !this.isAddSpeaker;
  }
  toggleEditSpeaker() {
    this.isMain = !this.isMain;
    this.isEditSpeaker = !this.isEditSpeaker;
  }
  toggleDeleteSpeaker() {
    this.isMain = !this.isMain;
    this.isDeleteEvent = !this.isDeleteEvent;
  }
  // *** //

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

  deleteEvent() {
    this.adminService.deleteEvent(Number.parseInt(this.eventId));
  }

  fillSelectedEventData(eventId: number) {
    this.adminService.getEvent(eventId).subscribe((data) => {
      this.date = data.date;
      this.mainSpeakerId = data.mainSpeaker.userName;
      this.selectedOtherSpeakers = data.otherSpeakers;
      this.selectedStudents = data.students;
    });
  }

  // Speaker Funcs
  addSpeaker() {
    const dto: CreateSpeakerDto = {
      email: this.speakerEmail,
      password: this.speakerPassword,
      userName: this.speakerUserName,
      address: this.speakerAddress,
    };
    this.adminService.addSpeaker(dto);
  }
}
