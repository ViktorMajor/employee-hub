import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './common/components/home/home.component';
import { RoleService } from './services/role.guard';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
    { path: 'employees', loadChildren: () => import('./employee/employee.module').then(m => m.EmployeeModule) },
    { path: 'payments', loadChildren: () => import('./payment/payment.module').then(m => m.PaymentModule), canActivate: [RoleService] },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
