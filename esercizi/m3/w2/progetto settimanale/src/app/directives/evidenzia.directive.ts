import { Directive, Input, HostBinding } from '@angular/core';

@Directive({
  selector: '[appEvidenzia]'
})
export class EvidenziaDirective {

@Input('appEvidenzia') newColor : string = 'yellow'
@HostBinding('style.background-color') color: string ='yellow';
  constructor() { }

}
