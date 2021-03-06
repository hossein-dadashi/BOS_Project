import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "price"
})
export class PricePipe implements PipeTransform {
  transform(value: string, currencySymbol: string = '$'): string {

    // Add thousand separator (,) 
    // Add currency symbol and return price
    
    value = value.toString();
    value = (parseInt(value.replace(/[^\d]+/gi, "")) || "").toLocaleString("en-US");
    return currencySymbol + value;
  }
}
