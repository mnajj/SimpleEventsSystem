import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { Observable } from 'rxjs';
import { EventDto, NewInfoDataDto } from '../Dtos';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  private baseUrl = 'http://localhost:8080/';
  constructor(private http: HttpClient) {}

  getUserInfo() {
    const token = localStorage.getItem('access-token')?.toString();
    if (token) {
      const decodedToken = this.getDecodedAccessToken(token);
      return decodedToken;
    }
  }

  submitNewInfoData(dto: NewInfoDataDto) {
    const token = this.getUserToken();
    const jwtHeader = this.createTokenHeader(token);
    this.http.put<any>(this.baseUrl + 'student', dto, jwtHeader).subscribe();
  }

  private getDecodedAccessToken(token: string): any {
    try {
      return jwtDecode(token);
    } catch (Error) {
      return null;
    }
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
