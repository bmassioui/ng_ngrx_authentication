import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { SharedModule } from "../shared/shared.module";

import { SignInComponent } from "./auth/components/signIn/signIn.component";
import { SignUpComponent } from "./auth/components/signUp/signUp.component";
import { AuthService } from "./auth/services/auth.service";
import { AuthEffects } from "./auth/store/auth.effects";
import { reducers } from "./auth/store/auth.reducer";
import { AdminDashbordComponent } from "./dashboard/admin/admin-dashboard.component";
import { UserList } from "./usersMangement/component/userList/userList.component";

@NgModule({
    declarations: [SignInComponent, SignUpComponent, UserList, AdminDashbordComponent],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule,
        StoreModule.forFeature('auth', reducers),
        EffectsModule.forFeature([AuthEffects])
    ],
    exports: [SignInComponent, SignUpComponent, UserList, AdminDashbordComponent],
    providers: [AuthService]
})

export class FeaturesModule { }