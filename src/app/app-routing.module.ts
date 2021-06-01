import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from './characters/characters.component';
import { DetailComponent } from './series/detail/detail.component';
import { SeriesComponent } from './series/series.component';

const routes: Routes = [
  {
    path: '', redirectTo: '/characters', pathMatch: 'full'
  },
  {
    path: 'characters', component: CharactersComponent
  },
  {
    path: 'series', component: SeriesComponent
  },
  {
    path: 'series/:id', component: DetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
