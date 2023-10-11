import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface User {
    id: number;
    email: string;
    token: string;
    role: string;
}

@Injectable({
    providedIn: 'root',
})
export class UserService {
    constructor() {}

    public getUser(id: string): Observable<User> {

      // get the current user by id 
      // when user signin store its id in local storage

        return of({
            id: 1,
            email: 'pallagijoe@gmail.com',
            token: '1234567890',
            role: 'admin',
        });
    }

    public signUP(email: string, password: string): Observable<User> {
      //....

      return of();
    }

    public signIn(email: string, password: string): Observable<User> {
      //....

      return of();
    }


}
