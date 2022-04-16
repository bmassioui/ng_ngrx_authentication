import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FeaturesRoutingModule } from './features/features-routing.module';
import { NotFoundComponent } from './shared/components/notfound/notfound.component';
import { SharedRoutingModule } from './shared/shared-routing.module';

const routes: Routes = [
  { path: '**', component: NotFoundComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes), FeaturesRoutingModule, SharedRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
