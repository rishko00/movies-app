import {Directive, ElementRef, Input } from '@angular/core';
 
@Directive({
    selector: '[rating]'
})
export class RatingDirective{
  @Input() rate: String;

  constructor(private elementRef: ElementRef){}

  ngOnInit(){
    let element = document.getElementById(this.elementRef.nativeElement.id);
    let stars = element.querySelectorAll('.' + element.classList[0] + " span");
    for(let i = 0; i < stars.length; i++){
      if(Number(stars[i].getAttribute('value')) <= Math.round(Number(this.rate))){
        stars[i].classList.add('active')
      }
    }; 
  }
}