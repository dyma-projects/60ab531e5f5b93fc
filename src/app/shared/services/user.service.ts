import { ɵNullViewportScroller } from "@angular/common";
import { NonNullAssert } from "@angular/compiler";
import { Injectable } from "@angular/core";

import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class UserService {
  public users$: BehaviorSubject<string[]> = new BehaviorSubject(["dyma"]);

  // ici on code la methode add, qui doit mettre a jour la liste "users$" (behaviour),
  //avec la valeur de l input au moment du clic sur ajouter

  public addUser(user: string): void {
    //console.log("user entre method service :" + user);
    const value = this.users$.value;
    value.push(user);
    this.users$.next(value);

    // console.log("liste string nom :" + this.users);

    // console.log("this.users.values[0] : " + this.users.values[0]);
  }

  constructor() {}
}
