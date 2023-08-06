import { Component, OnInit , Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { New, NewsData } from 'src/app/models/newsModel';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  news! : New[];
  isLoading:boolean = false;
  @Input() currentCategory : string = "";


  constructor(private service: NewsService , private route: ActivatedRoute) {

  
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => this.currentCategory = params["category"]);
    this.getNews();
  }


  getNews(): void {
    this.isLoading = true;
    this.service.getNewsByCategory(this.currentCategory).subscribe((data : NewsData) => {
    this.news = data.articles;
      this.isLoading = false;
    })
  }


}
