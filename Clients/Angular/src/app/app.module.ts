import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { LogInModule } from './log-in/log-in.module';
import { SignUpModule } from './sign-up/sign-up.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    //
    CoreModule,
    //
    LogInModule,
    SignUpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
