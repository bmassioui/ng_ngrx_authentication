import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router";

import { CurrentUserInterface, LocalStorageService, RouterService, SharedConstants } from "src/app/shared";

@Injectable()
export class AuthCanActivateGuard implements CanActivate {

    constructor(private localStorageService: LocalStorageService<CurrentUserInterface>, private routerService: RouterService) { }
    canActivate(): boolean {
        let currentUserInterface: CurrentUserInterface | null = this.localStorageService.get(SharedConstants.LOCALSTORAGE_CURRENTUSER_KEY);

        if (currentUserInterface) return true;

        this.routerService.navigateTo(SharedConstants.ROUTENAMES_ROUTEURLS[SharedConstants.SIGNIN_ROUTE_NAME])

        return false;

    }

}