import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SharedConstants } from "../shared/constants";

import { SignInComponent } from "./auth/components/signIn/signIn.component";
import { SignUpComponent } from "./auth/components/signUp/signUp.component";
import { Users } from "./usersMangement/component/users/users.component";

const routes: Routes = [
    { path: SharedConstants.SIGNIN_ROUTE_NAME, component: SignInComponent },
    { path: SharedConstants.SIGNUP_ROUTE_NAME, component: SignUpComponent },
    { path: SharedConstants.USERS_ROUTE_NAME, component: Users }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class FeaturesRoutingModule { }