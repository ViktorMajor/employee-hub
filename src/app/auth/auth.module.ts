import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthPageComponent } from './components/auth-page/auth-page.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { AuthRoutingModule } from './auth-routing/auth-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AuthPageComponent,
    LogInComponent,
    SignUpComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { 


  
}
