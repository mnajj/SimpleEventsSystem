import { Component, OnInit } from '@angular/core';
import { EventDto } from '../../Dtos';
import { HomePageService } from '../home-page.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  public events: EventDto[] = [];
  constructor(private homeService: HomePageService) {}

  ngOnInit(): void {
    this.homeService.getUserEvents().subscribe((res) => {
      console.log(this.events);
      this.events = res;
      console.log(this.events);
    });
  }
}
