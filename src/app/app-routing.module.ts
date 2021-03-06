import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: "contact-us",
    loadChildren: () => import("./modules/contact-us/contact-us.module").then(m => m.ContactUsModule)
  },
  {
    path: "pricing",
    loadChildren: () => import("./modules/pricing/pricing.module").then(m => m.PricingModule)
  },
  { path: "", redirectTo: "pricing", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
