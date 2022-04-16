import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./components/home/home.component";
import { SharedConstants } from "./constants";

const routes: Routes = [
    { path: SharedConstants.HOME_ROUTE_NAME, component: HomeComponent }
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class SharedRoutingModule { }