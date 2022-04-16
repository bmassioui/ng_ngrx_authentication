import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ErrorListComponent } from "./components/errorList/errorList.component";

import { HeaderComponent } from "./components/header/header.component";
import { HomeComponent } from "./components/home/home.component";
import { LeftNavComponent } from "./components/leftnav/leftnav.component";
import { NotFoundComponent } from "./components/notfound/notfound.component";
import { PreceedStringWithSlashPipe } from "./pipes";
import { LocalStorageService } from "./services/localStorage.service";

@NgModule({
    declarations: [HeaderComponent, ErrorListComponent, LeftNavComponent, HomeComponent, NotFoundComponent, PreceedStringWithSlashPipe],
    imports: [CommonModule, RouterModule],
    exports: [HeaderComponent, ErrorListComponent, LeftNavComponent, HomeComponent, NotFoundComponent, PreceedStringWithSlashPipe],
    providers: [LocalStorageService]
})

export class SharedModule { }

