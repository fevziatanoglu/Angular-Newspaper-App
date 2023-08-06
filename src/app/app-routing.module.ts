import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { AboutmeComponent } from './pages/aboutme/aboutme.component';
import { CategoryComponent } from './pages/category/category.component';
import { SearchComponent } from './pages/search/search.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: "/home",
    pathMatch: "full"
  },
  {
    path: "home",
    component: HomeComponent,
  },
  {
    path: "categories",
    component: CategoriesComponent,
  },
  {
    path: "aboutme",
    component: AboutmeComponent,
  },
  {
    path: "category/:category",
    component: CategoryComponent,
  },
  {
    path: "search/:query",
    component: SearchComponent,
  },
  {
    path: "search",
    component: SearchComponent,
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
