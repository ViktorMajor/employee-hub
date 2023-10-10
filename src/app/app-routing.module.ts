import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './employee/components/home/home.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'employees', loadChildren: () => import('./employee/employee.module').then(m => m.EmployeeModule) }
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
