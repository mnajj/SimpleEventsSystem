import { Component, OnInit } from '@angular/core';
import { LogInService } from './log-in.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css'],
})
export class LogInComponent implements OnInit {
  public email: string = '';
  public password: string = '';
  constructor(private logInService: LogInService) {}

  ngOnInit(): void {}

  logIn() {
    this.logInService.logIn(this.email, this.password);
  }
}
