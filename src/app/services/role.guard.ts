import { CanActivate } from '@angular/router';
import { map, of, tap } from 'rxjs';

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
    providedIn: 'root',
})
export class RoleService implements CanActivate {
    constructor(private router: Router, private userService: UserService) {}

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        return this.userService.getUser('123').pipe(
            map(user => user.role === 'admin'),
            tap(isAdmin => {
                if (!isAdmin) {
                    this.router.navigate(['/employees']);
                }
            })
        );
        // felüle ugyenez történik csak pipe nelkül
        // this.userService.getUser('123').subscribe(user => {
        //     if (user.role === 'admin') {
        //         this.router.navigate(['/employees']);
        //     } else {
        //         return of(true);
        //     }
        // });
    }
}
