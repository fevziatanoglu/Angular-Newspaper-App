import { Component, OnInit } from '@angular/core';
import { New, NewsData } from 'src/app/models/newsModel';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  newsMap : Map<string , New[]> = new Map();
  news : New[] = [];
  isLoading:boolean = false;
  currentCategory : string = "";
  categories: string[] = ["business", "general", "health", "science", "sports", "technology" , "entertainment",];


  constructor(private service: NewsService) {

  }

  ngOnInit(): void {
  }


  getNews(category : string): void {
    this.isLoading = true;
    this.service.getNewsByCategory(category).subscribe((data : NewsData) => {
      this.newsMap.set( category , [...data.articles]);

      this.setNews();

      this.isLoading = false;
    })
  }

  
  categoriesOnChange(event: Event):void {
    let isChecked = (event.target as HTMLInputElement).checked;
    let category = (event.target as HTMLInputElement).value;

    if (isChecked) {
      // fetch data from service and push into news map
        this.getNews(category);
    } else {
      // delete newss related categories from news map
      this.newsMap.delete(category);

      this.setNews();        

    }

    
  }


  setNews() : void{
    let news : New[] = [];
    Array.from(this.newsMap.values()).map((data : New[])=>{
      data.map((item: New)=>{
        news.push(item);
      })
    })
    this.news = news;
  }

}




