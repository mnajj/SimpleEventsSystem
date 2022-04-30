import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpComponent } from './sign-up.component';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {CheckboxModule} from 'primeng/checkbox';


@NgModule({
  declarations: [SignUpComponent],
  imports: [
    CommonModule,
    PasswordModule,
    InputTextModule,
    ButtonModule,
    FormsModule,
    RouterModule,
    CheckboxModule
  ],
  exports: [SignUpComponent],
})
export class SignUpModule {}
