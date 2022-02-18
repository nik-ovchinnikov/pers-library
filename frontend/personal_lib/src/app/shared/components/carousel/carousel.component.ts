import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

//Тут видос про карусели из bs and angular
// https://www.youtube.com/watch?v=jvfCIPRrcvY

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  @Input()
  sources: string[] = [];

  @Output() closeCarousel = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  onCloseCarousel() {
    this.closeCarousel.emit();
  }

}
