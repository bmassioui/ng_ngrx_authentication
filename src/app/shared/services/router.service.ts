import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({
    providedIn: 'root'
})
export class RouterService {
    constructor(private router: Router) { }

    /**
     * Navigate to TargetUrl
     * @param targetUrl : Redirect To
     * @param isReload : If true Reload the page content
     * @returns 
     */
    navigateTo(targetUrl: string, isReload: boolean = false): void {

        if (isReload) {
            this.router.navigateByUrl(targetUrl).then(() => {
                window.location.reload();
            });

            return;
        }

        this.router.navigateByUrl(targetUrl);
    }
}