import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentPageComponent } from './components/payment-page/payment-page.component';
import { PaymentRoutingModule } from './payments-routing.module';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [PaymentPageComponent],
    imports: [CommonModule, PaymentRoutingModule, RouterModule],
})
export class PaymentModule {}
