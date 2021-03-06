import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PricingRoutingModule } from './pricing-routing.module';
import { PricingComponent } from './pages/pricing/pricing.component';
import { CheckBoxComponent } from './components/check-box/check-box.component';
import { PricePipe } from 'src/app/shared/pipes/price.pipe';


@NgModule({
  declarations: [
    PricingComponent,
    CheckBoxComponent,
    PricePipe
  ],  
  imports: [
    CommonModule,
    PricingRoutingModule,
  ]
})
export class PricingModule { }
