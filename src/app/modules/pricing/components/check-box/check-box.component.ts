import { Component, Input, EventEmitter, Output, ViewChildren, ElementRef, QueryList } from '@angular/core';
import { ServicesModel } from 'src/app/modules/pricing/services.model';

@Component({
  selector: 'bos-check-box',
  templateUrl: './check-box.component.html',
  styleUrls: ['./check-box.component.scss']
})
export class CheckBoxComponent {

  @Input('checkboxList') checkboxList: ServicesModel[];  

  // ** 
  // checkedArrayList : this event should emit after any change or anytime when we want send checked List (required service/features) to backend 
  // @Output('checkedArrayList') checkedArrayList: EventEmitter<string[]> = new EventEmitter(); 
  
  @ViewChildren('mainCheckbox') mainCheckbox: QueryList<ElementRef>; 

  constructor() { }

  // Function will call when any click on features, 
  // Check if checked features < features length so Service shouldn't set as checked
  // If checked features Was equal to features length so hole service is required and should be set as checked

  featureListChange(isChecked: boolean, subList: ServicesModel[], parentCheckBoxIndex: number, subListClickedIndex: number) {
    let checkedCount = 0;
    subList[subListClickedIndex].isRequested = isChecked;
    subList.forEach((checkboxItem) => {
      checkboxItem.isRequested && checkedCount++;
    });
    this.mainCheckbox.toArray()[parentCheckBoxIndex].nativeElement.checked = 
    this.checkboxList[parentCheckBoxIndex].isRequested = 
    checkedCount > 0 && checkedCount === subList.length;

    this.mainCheckbox.toArray()[parentCheckBoxIndex].nativeElement.indeterminate = checkedCount > 0 && checkedCount < subList.length;
  }

  // If check service , if it has any features so all of them going to required feature 

  parentChange(isChecked: boolean, parentCheckBoxIndex: number) {
    let featuresToChange = this.checkboxList[parentCheckBoxIndex].features;
    if(featuresToChange && featuresToChange.length) {
      featuresToChange.forEach((service: ServicesModel) => {
        service.isRequested = isChecked;
      })
    }
    this.checkboxList[parentCheckBoxIndex].isRequested = isChecked;
  }
}

