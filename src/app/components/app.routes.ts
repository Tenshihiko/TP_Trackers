import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BooksComponent } from './books/books.component';
import { CatsComponent } from './cats/cats.component';

export const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent, title: 'TimePrincess Trackers - Home'},
  {path: 'books', component: BooksComponent, title: 'TimePrincess Trackers - Books'},
  {path: 'cats', component: CatsComponent, title: 'TimePrincess Trackers - Cats'},
  { path: '**', redirectTo: 'home' }
];

@NgModule({
    declarations: [],
    imports: [
      RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }