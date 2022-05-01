import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { EventDto } from '../Dtos';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HomePageService {
  private baseUrl = 'http://localhost:8080/';
  constructor(private http: HttpClient) {}

  getUserEvents(): Observable<EventDto[]> {
    const token = this.getUserToken();
    const jwtHeader = this.createTokenHeader(token);
    return this.http.get<EventDto[]>(this.baseUrl + 'event', jwtHeader);
  }

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
