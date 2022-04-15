import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ErrorListComponent } from "./components/errorList/errorList.component";

import { HeaderComponent } from "./components/header/header.component";
import { HomeComponent } from "./components/home/home.component";
import { LeftNavComponent } from "./components/leftnav/leftnav.component";
import { LocalStorageService } from "./services/localStorage.service";

@NgModule({
    declarations: [HeaderComponent, ErrorListComponent, LeftNavComponent, HomeComponent],
    imports: [CommonModule, RouterModule],
    exports: [HeaderComponent, ErrorListComponent, LeftNavComponent, HomeComponent],
    providers: [LocalStorageService]
})

export class SharedModule { }

