import { Component, Input } from "@angular/core";
import { ErrorListInterface } from "../../models";

@Component({
    selector: '<errorList-component',
    templateUrl: './errorList.component.html'
})

export class ErrorListComponent {
    formattedErrors: Array<string> = []

    /**
     * Set Error List
     */
    @Input()
    set errors(errorList: ErrorListInterface | null) {

        if (errorList == null) return

        this.formattedErrors = Object.keys(errorList.errors || {})
            .map(key => `${key} ${errorList.errors[key]}`)
    }

    /**
     * Get Error list
     */
    get errorList(): Array<string> {
        return this.formattedErrors
    }
}