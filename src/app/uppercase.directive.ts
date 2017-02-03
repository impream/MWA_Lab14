import { Directive ,ElementRef, AfterViewInit} from '@angular/core';

@Directive({
  selector: '[appUppercase]',
  inputs: ['word']
})
export class UppercaseDirective {
_word:string;
  constructor(private element: ElementRef) { }

ngAfterViewInit():void {
	this.element.nativeElement.innerHTML = this.element.nativeElement.innerHTML.toUpperCase();
  }
}