import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';

import { mapToLoggedIn, MemberstackService } from '../memberstack.service';

@Injectable()
export class NoLoginNeededGuard implements CanActivate {

  constructor(private router: Router, private memberstackService: MemberstackService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<boolean | UrlTree> {

    const isLoggedIn = this.memberstackService.getMember().pipe(mapToLoggedIn());

    return isLoggedIn.toPromise().then((loggedIn) => {
      if (loggedIn) {
        this.router.navigate(['/sessions'], { queryParams: { returnUrl: state.url }});
        return false;
      }
      return !loggedIn;
    });
  }

}
