import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { CurrentUserInterface, LocalStorageService, SharedConstants } from "src/app/shared";

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

    constructor(private localStorageService: LocalStorageService<CurrentUserInterface>) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        let currentUserInterface: CurrentUserInterface | null = this.localStorageService.get(SharedConstants.LOCALSTORAGE_CURRENTUSER_KEY);

        if (!currentUserInterface || !currentUserInterface.user || !currentUserInterface.user.token) return next.handle(req);

        req = req.clone({
            setHeaders: { Authorization: `Bearer ${currentUserInterface.user.token}` }
        });

        return next.handle(req);
    }

}