import { Component, OnInit , Input } from '@angular/core';
import { New } from 'src/app/models/newsModel';

@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.css']
})
export class NewItemComponent implements OnInit {

  @Input() new! : New;

  constructor() { }

  ngOnInit(): void {
  }

}
