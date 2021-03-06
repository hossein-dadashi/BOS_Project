import { Component, OnInit } from '@angular/core';
import { ServicesModel } from '../../services.model';
import { ServicesDataService } from '../../services-data.service';

@Component({
  selector: 'bos-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PricingComponent implements OnInit {

  activeTab: string = 'services' || 'additionals';
  services: ServicesModel[];
  requiredService: ServicesModel[];
  additionals: ServicesModel[];
  requiredAdditional: ServicesModel[];
  perYearPrice: number = 1449;
  perMonthPrice: number = 149;
  
  constructor(
    private ServicesDataService : ServicesDataService
    ) { }

  ngOnInit() {
    this.getAllServices();
  }

  // This function can give the final list of required services that made by user. 
  onChangeServices(checkedServiceList: ServicesModel[]) {
    this.requiredService = checkedServiceList;
  }

  // This function can give the final list of required additional services that made by user .
  onChangeAdditionals(checkedAdditionalList: ServicesModel[]) {
    this.requiredAdditional = checkedAdditionalList;
  }

  changeTab(tabToActive: string) {
    this.activeTab = tabToActive;
  }

  // Get all of our company services and categorize them .
  async getAllServices(){
    let allServicesData = await this.ServicesDataService.getContactUsInformation();
    this.services = allServicesData.services;
    this.additionals = allServicesData.additionals;
  }

}
