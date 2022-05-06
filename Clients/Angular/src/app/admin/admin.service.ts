import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SpeakertDto, StudentDto } from '../Dtos';
import { CreateEventDto } from '../Dtos/createEventDto.dto';
import { EventDto } from '../Dtos/EventDto.dto';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  private baseUrl = 'http://localhost:8080/';
  constructor(private http: HttpClient) {}

  // Data
  getAllEvents(): Observable<EventDto[]> {
    const token = this.getUserToken();
    const jwtHeader = this.createTokenHeader(token);
    return this.http.get<EventDto[]>(this.baseUrl + 'event', jwtHeader);
  }

  getAllSpeakers(): Observable<SpeakertDto[]> {
    const token = this.getUserToken();
    const jwtHeader = this.createTokenHeader(token);
    return this.http.get<SpeakertDto[]>(this.baseUrl + 'speaker', jwtHeader);
  }

  getAllStudents(): Observable<StudentDto[]> {
    const token = this.getUserToken();
    const jwtHeader = this.createTokenHeader(token);
    return this.http.get<StudentDto[]>(this.baseUrl + 'student', jwtHeader);
  }
  // ** //

  // Events Funcs
  addNewEvent(dto: CreateEventDto) {
    const token = this.getUserToken();
    const jwtHeader = this.createTokenHeader(token);
    this.http.post<any>(this.baseUrl + 'event', dto, jwtHeader).subscribe();
  }

  getEvent(eventId: number) {
    const token = this.getUserToken();
    let headers_object = {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token,
    };
    const params = new HttpParams().set('eventId', eventId);
    return this.http.get<EventDto>(this.baseUrl + 'getevent', {
      headers: headers_object,
      params: params,
    });
  }

  deleteEvent(eventId: number) {
    const token = this.getUserToken();
    let headers_object = {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token,
    };
    const params = new HttpParams().set('eventId', eventId);
    this.http
      .delete(this.baseUrl + 'event', {
        headers: headers_object,
        params: params,
      })
      .subscribe();
  }
  // ** //

  private getUserToken() {
    return window.localStorage.getItem('access-token');
  }

  private createTokenHeader(token: string | null) {
    let headers_object = {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token,
    };
    const httpOptions = {
      headers: new HttpHeaders(headers_object),
    };
    return httpOptions;
  }
}
