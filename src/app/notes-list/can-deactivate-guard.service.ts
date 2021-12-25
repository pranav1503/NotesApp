import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";


export interface canDeactivateComponent{
    canDeactivate : () => boolean | Promise<boolean> | Observable<boolean>;
}

export class canDeactivateGuardService implements CanDeactivate<canDeactivateComponent>{
    canDeactivate(
        component: canDeactivateComponent, 
        currentRoute: ActivatedRouteSnapshot, 
        currentState: RouterStateSnapshot, 
        nextState?: RouterStateSnapshot
        ):  boolean | Promise<boolean> | Observable<boolean>{
        
        return component.canDeactivate();
    }
}