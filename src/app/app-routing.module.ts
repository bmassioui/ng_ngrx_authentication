import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeaturesRoutingModule } from './features/features-routing.module';
import { HomeComponent } from './shared/components/home/home.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), FeaturesRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
