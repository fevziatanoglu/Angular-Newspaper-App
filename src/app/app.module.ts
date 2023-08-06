import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { CategoryComponent } from './pages/category/category.component';
import { AboutmeComponent } from './pages/aboutme/aboutme.component';
import { NewItemComponent } from './components/new-item/new-item.component';
import { SliderComponent } from './components/slider/slider.component';
import { HeaderComponent } from './components/header/header.component';
import { NewsListComponent } from './components/news-list/news-list.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { SearchComponent } from './pages/search/search.component';
import { LoadingScreenComponent } from './components/loading-screen/loading-screen.component';
import { NewSliderItemComponent } from './components/new-slider-item/new-slider-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CategoriesComponent,
    CategoryComponent,
    AboutmeComponent,
    NewItemComponent,
    SliderComponent,
    HeaderComponent,
    NewsListComponent,
    PaginationComponent,
    SearchComponent,
    LoadingScreenComponent,
    NewSliderItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
