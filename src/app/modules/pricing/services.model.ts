export class ServicesModel {
    serviceName: string;
    isRequested?: boolean; // if true : user want this feature or service .  
    features?: ServicesModel[];
    price?: number; // service or feature should have price, هf no price was specifiedو So it's free .
}
