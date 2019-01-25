import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {ContactComponent} from './contact/contact.component';
import {PostsComponent} from './posts/posts.component';
import {DetailsComponent} from './details/details.component';
import { HeroesComponent } from './heroes/heroes.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'posts',component:PostsComponent},
  {
    path: 'details/:id',
    component: DetailsComponent
  },
  {path:'heroes',component:HeroesComponent},
];
// respective component's HTML templating shows up in the <router-outlet></router-outlet> 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
