import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SignInComponent } from "./auth/signIn/components/signIn.component";
import { SignUpComponent } from "./auth/signUp/components/signUp.component";

const routes: Routes = [
    {path: 'signIn', component: SignInComponent},
    {path: 'signUp', component: SignUpComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class FeaturesRoutingModule{}