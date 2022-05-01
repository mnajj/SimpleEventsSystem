import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';

import { HomePageComponent } from './home-page/home-page.component';
import { HomePageService } from './home-page.service';

@NgModule({
  declarations: [HomePageComponent],
  providers: [HomePageService],
  imports: [CommonModule, CardModule],
  exports: [HomePageComponent],
})
export class HomePageModule {}
