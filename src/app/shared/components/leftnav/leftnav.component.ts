import { Component } from "@angular/core";
import { SharedConstants } from "../../constants";

@Component({
    selector: 'leftnav-component',
    templateUrl: './leftnav.component.html'
})

export class LeftNavComponent{
    public homeRouteName: SharedConstants = SharedConstants.HOME_ROUTE_NAME
    public usersRouteName: SharedConstants = SharedConstants.USERS_ROUTE_NAME
}