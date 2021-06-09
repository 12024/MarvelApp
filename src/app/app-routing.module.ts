import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from './characters/characters.component';
import { DetailComponent } from './series/detail/detail.component';
import { SeriesComponent } from './series/series.component';
import { DetailComponent } from './series/serie/detail/detail.component';

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
<<<<<<< HEAD
  {
    path: 'series/:id', component: DetailComponent
  }



||||||| 133ca34

=======
  {
    path: 'series/:id', component: DetailComponent
  }
>>>>>>> 7b5b598f571c6c416f361a25fe1c7d022279ab05
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
