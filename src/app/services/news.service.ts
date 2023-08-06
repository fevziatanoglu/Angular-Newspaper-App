import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NewsData } from '../models/newsModel';

import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }

  getNews() : Observable<NewsData> {
    return this.http.get<NewsData>(environment.apiUrl + environment.apiKey);
  }

  getNewsByCategory(category : string) : Observable<NewsData>{
    return this.http.get<NewsData>(environment.apiUrl + `&category=${category}` + environment.apiKey);
  }

  searchNews(query : string) : Observable<NewsData>{
    return this.http.get<NewsData>(environment.apiUrl + `&q=${query}` + environment.apiKey)
  }

}
