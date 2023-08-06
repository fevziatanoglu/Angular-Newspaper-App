import { Component, OnInit } from '@angular/core';
import { New, NewsData } from 'src/app/models/newsModel';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  news! : New[];
  sliderNews! : New[];
  isLoading:boolean = false;

  constructor(private service: NewsService) {

  }

  ngOnInit(): void {
    this.getNews()
  }

  getNews(): void {
    this.isLoading = true;
    this.service.getNews().subscribe((data : NewsData) => {
      this.news = data.articles;
      this.sliderNews = data.articles.slice(0,3);
      this.isLoading = false;
    })
  }

}
