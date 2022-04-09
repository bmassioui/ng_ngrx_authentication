import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ErrorListComponent } from "./components/errorList/errorList.component";

import { FooterComponent } from "./components/footer/footer.component";
import { HeaderComponent } from "./components/header/header.component";
import { LocalStorageService } from "./services/localStorage.service";

@NgModule({
    declarations: [HeaderComponent, FooterComponent, ErrorListComponent],
    imports: [CommonModule, RouterModule],
    exports: [HeaderComponent, FooterComponent, ErrorListComponent],
    providers: [LocalStorageService]
})

export class SharedModule { }

