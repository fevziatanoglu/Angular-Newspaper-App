import { Component, Input, OnInit } from '@angular/core';
import { New } from 'src/app/models/newsModel';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {

  @Input() news : New[] = [];
  @Input() title : string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
