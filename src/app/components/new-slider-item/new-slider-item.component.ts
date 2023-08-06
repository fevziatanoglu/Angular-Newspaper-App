import { Component, Input, OnInit } from '@angular/core';
import { New } from 'src/app/models/newsModel';

@Component({
  selector: 'app-new-slider-item',
  templateUrl: './new-slider-item.component.html',
  styleUrls: ['./new-slider-item.component.css']
})
export class NewSliderItemComponent implements OnInit {

  @Input() new! : New;

  constructor() { }

  ngOnInit(): void {
  }

}
