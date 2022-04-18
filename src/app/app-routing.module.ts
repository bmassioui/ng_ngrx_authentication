import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FeaturesRoutingModule } from './features/features-routing.module';
import { HomeComponent } from './features/home';
import { NotFoundComponent, SharedConstants } from './shared';
import { SharedRoutingModule } from './shared/shared-routing.module';



const routes: Routes = [
  { path: SharedConstants.EMPTY_ROUTE_NAME, component: HomeComponent },
  { path: SharedConstants.NOTFOUND_ROUTE_NAME, component: NotFoundComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes), FeaturesRoutingModule, SharedRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
