import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { New, NewsData } from 'src/app/models/newsModel';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private service : NewsService ,private route : ActivatedRoute) { }
  query : string = "";
  news : New[] = [];
  isLoading : boolean = false;

  ngOnInit(): void {
    this.route.params.subscribe(params => this.query = params["query"]);
    this.searchNews(this.query);
  }

  searchNews(query : string){
    this.isLoading = true;
    this.service.searchNews(query).subscribe((data : NewsData) =>{
      this.isLoading = false;
      this.news = data.articles;
    })
  }

  

}
