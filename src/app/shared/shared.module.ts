import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { FooterComponent } from "./components/footer/footer.component";
import { HeaderComponent } from "./components/header/header.component";
import { LocalStorageService } from "./services/localStorage.service";

@NgModule({
    declarations: [HeaderComponent, FooterComponent],
    imports: [RouterModule],
    exports: [HeaderComponent, FooterComponent],
    providers:[LocalStorageService]
})

export class SharedModule { }

