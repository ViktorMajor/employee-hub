import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './employee/components/navbar/navbar.component';
import { HomeComponent } from './employee/components/home/home.component';
import { EmployeeModule } from './employee/employee.module';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        HomeComponent,
        
    ],
    imports: [
        
        BrowserModule,
        AppRoutingModule,
        EmployeeModule 
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
