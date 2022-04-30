import { Component, OnInit } from '@angular/core';
import { SignUpService } from './sign-up.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  public email: string = '';
  public password: string = '';
  public userName: string = '';
  public address: string = '';
  public isSpeaker: boolean = false;
  constructor(private singUpService: SignUpService) {}

  ngOnInit(): void {}

  signUp() {
    this.singUpService.signUp({
      email: this.email,
      password: this.password,
      userName: this.userName,
      address: this.address,
      isSpeaker: this.isSpeaker,
    });
  }
}
