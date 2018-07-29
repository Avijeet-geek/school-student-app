import { Directive, ElementRef } from '@angular/core';

/**
 * Generated class for the SquareDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
@Directive({
  selector: '[square]' // Attribute selector
})
export class SquareDirective {

  constructor(private el:ElementRef) {
    setTimeout(function(){

      let width = el.nativeElement.width;
      el.nativeElement.height = width;

    })

    

    console.log('Hello SquareDirective Directive');
  }

}
