import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { ErrorListComponent, HeaderComponent, LeftNavComponent, NotFoundComponent } from "./components";
import { LocalStorageService, RouterService } from "./services";



@NgModule({
    declarations: [HeaderComponent, ErrorListComponent, LeftNavComponent, NotFoundComponent],
    imports: [CommonModule, RouterModule],
    exports: [HeaderComponent, ErrorListComponent, LeftNavComponent, NotFoundComponent],
    providers: [LocalStorageService, RouterService]
})

export class SharedModule { }

