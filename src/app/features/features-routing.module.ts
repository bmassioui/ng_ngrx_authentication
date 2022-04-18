import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthCanActivateGuard } from "../core";

import { SharedConstants } from "../shared";
import { SignInComponent, SignUpComponent } from "./auth";
import { HomeComponent } from "./home";
import { Users } from "./usersMangement";

const routes: Routes = [
    { path: SharedConstants.HOME_ROUTE_NAME, component: HomeComponent },
    { path: SharedConstants.SIGNIN_ROUTE_NAME, component: SignInComponent },
    { path: SharedConstants.SIGNUP_ROUTE_NAME, component: SignUpComponent },
    { path: SharedConstants.USERS_ROUTE_NAME, component: Users, canActivate: [AuthCanActivateGuard] }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class FeaturesRoutingModule { }