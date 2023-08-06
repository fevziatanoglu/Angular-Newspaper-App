import { Component, OnInit , Input } from '@angular/core';
import { New } from 'src/app/models/newsModel';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  @Input() perItemForPage: number = 0;
  @Input() news: New[] = [];

  pageNews: New[] = [];
  currentPaginationPage: number = 0;

  constructor() { }

  ngOnInit(): void {
   
      
    
  }
  
  // This hook is called when the component's data-bound properties change.
  ngOnChanges():void{
    this.setPaginationPage(1);
  }

  getPageAmount(): number[] {
    const range = [];
    let pageAmount = Math.ceil(this.news?.length / this.perItemForPage);
    for (let i:number = 1; i <= pageAmount; i++) {
      range.push(i);
    }
    return range;
  }

  
  setPaginationPage(pageIndex: number): void {
    this.currentPaginationPage = pageIndex;
    this.pageNews = this.news?.slice((pageIndex - 1) * this.perItemForPage, pageIndex * this.perItemForPage);
  }

}
