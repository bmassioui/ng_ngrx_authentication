import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FeaturesRoutingModule } from './features/features-routing.module';
import { HomeComponent } from './shared/components/home/home.component';
import { NotFoundComponent } from './shared/components/notfound/notfound.component';
import { SharedConstants } from './shared/constants';
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
