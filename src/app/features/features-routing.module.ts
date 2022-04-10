import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { SignInComponent } from "./auth/components/signIn/signIn.component";
import { SignUpComponent } from "./auth/components/signUp/signUp.component";
import { UserList } from "./usersMangement/component/userList/userList.component";

const routes: Routes = [
    {path: 'signIn', component: SignInComponent},
    {path: 'signUp', component: SignUpComponent},
    {path: 'userList', component: UserList }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class FeaturesRoutingModule{}