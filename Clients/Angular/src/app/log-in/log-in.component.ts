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
  public incorrect: boolean = false;
  constructor(private logInService: LogInService) {}

  ngOnInit(): void {}

  logIn() {
    const res: boolean = this.logInService.logIn(this.email, this.password);
    console.log(res);
    if (res == false) this.incorrect = true;
  }
}
