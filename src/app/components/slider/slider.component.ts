import { Component, OnInit, Input } from '@angular/core';
import { New } from 'src/app/models/newsModel';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  @Input() news!: New[];
  newIndex: number = 0;
  sliderTransform: number = 0;

  constructor() {

  }

  ngOnInit(): void {

  }

  nextNew(): void {
    if (this.newIndex < this.news.length - 1) {
      this.newIndex++;
    }
  }

  prewNew(): void {
    if (this.newIndex > 0) {
      this.newIndex--;
    }
  }

  sliderRight() {
    if (this.sliderTransform > (this.news.length-1) * -100) {
      this.sliderTransform -= 100;
    }
  }

  sliderLeft() {
    if (this.sliderTransform < 0) {
      this.sliderTransform += 100;
    }
  }

}
