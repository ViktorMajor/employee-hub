import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, of } from "rxjs";

export interface User {
  id: number;
  email: string;
  userName: string;
  password: string;
  token: string;
  role: string;
}

@Injectable({
  providedIn: "root",
})
export class UserService {
  private users: User[] = [];
  private currentUserSubject: BehaviorSubject<User | null> =
    new BehaviorSubject<User | null>(null);
  public currentUser$: Observable<User | null> =
    this.currentUserSubject.asObservable();

  constructor() {}

  public getUser(id: string): Observable<User> {
  

    return of({
      id: 1,
      userName: "József",
      email: "pallagijoe@gmail.com",
      password: "J",
      token: "1234567890",
      role: "admin",
    });
  }

  public signUP(
    userName: string,
    email: string,
    password: string
  ): Observable<User> {
    const newUser: User = {
      id: Date.now(),
      email: email,
      token: Date.now().toString(),
      role: "admin",
      password: password,
      userName: userName,
    };
    this.users.push(newUser);
    localStorage.setItem("userId", newUser.id.toString());
    return of(newUser);
  }

  public signIn(email: string, password: string): Observable<User> {
    const user = this.users.find(
      (u) => u.email === email && u.password === password
    );
    if (user) {
      localStorage.setItem("userId", user.id.toString());
      this.currentUserSubject.next(user);
      return of(user);
    } else {
      return new Observable((observer) => {
        observer.error("Invalid email or password");
      });
    }
  }
}
