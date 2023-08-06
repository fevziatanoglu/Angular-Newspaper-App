import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  searchQuery: string = "";
  categories: string[] = ["business", "entertainment", "general", "health", "science", "sports", "technology"];
  currentHref : string = "";

  isSliderMenuShow:boolean = false;

  constructor(private location: Location) {
    
  }

  ngOnInit(): void {
    this.currentHref = this.location.path();
  }

  isLinkActive(href: string): boolean {
    return this.currentHref == href;
  }

  onChangeSearch(query : string){
    this.searchQuery = query;
  }

  sliderMenuToggle(){
    this.isSliderMenuShow = (this.isSliderMenuShow ? false : true);
  }

}
