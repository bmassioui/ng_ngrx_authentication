import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { FooterComponent } from "./components/footer/footer.component";
import { HeaderComponent } from "./components/header/header.component";

@NgModule({
    declarations: [HeaderComponent, FooterComponent],
    imports: [RouterModule],
    exports: [HeaderComponent, FooterComponent],
})

export class SharedModule { }

