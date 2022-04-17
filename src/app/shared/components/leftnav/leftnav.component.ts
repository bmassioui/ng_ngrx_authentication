import { Component } from "@angular/core";
import { SharedConstants } from "../../constants";

@Component({
    selector: 'leftnav-component',
    templateUrl: './leftnav.component.html'
})

export class LeftNavComponent {
    public homeRouteUrl: string = SharedConstants.ROUTENAMES_ROUTEURLS[SharedConstants.HOME_ROUTE_NAME]
    public usersRouteUrl: string = SharedConstants.ROUTENAMES_ROUTEURLS[SharedConstants.USERS_ROUTE_NAME]
}