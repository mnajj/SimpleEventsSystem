import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class SignUpService {
  constructor(private http: HttpClient, private router: Router) {}
  private baseUrl = 'http://localhost:8080/';
  private role = 'student';

  signUp(input: any): boolean {
    let role = 'student';
    if (input.isSpeaker) role = 'speaker';
    const result = this.http
      .post<any>(
        this.baseUrl + 'signup',
        {
          ...input,
          role
        },
        { observe: 'response' }
      )
      .subscribe(
        (res) => {
          if (res.status == 201) {
            this.saveAccessTokenToLocalStorage(res.body.token);
            this.router.navigate(['/home']);
            return true;
          } else {
            console.log(res.body);
            return false;
          }
        },
        (err) => {
          console.log(err);
        }
      );
    return false;
  }

  saveAccessTokenToLocalStorage(token: string) {
    window.localStorage.setItem('access-token', token);
  }
}
