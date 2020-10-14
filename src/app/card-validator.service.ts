import { Injectable } from "@angular/core";
import { AbstractControl, AsyncValidatorFn } from "@angular/forms";
import { Observable, of } from "rxjs";
import { map, tap } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class CardValidatorService {
  constructor() {}

  cardIdValidator(): AsyncValidatorFn {
    return (
      control: AbstractControl
    ): Observable<{ [key: string]: any } | null> => {
      return this.validCardId(control.value).pipe(
        tap((res) => console.log(res)),
        map((isCardId) => {
          if (!isCardId) {
            return { invalidCardId: true };
          }
        })
      );
    };
  }

  validCardId(cardId: string): Observable<boolean> {
    return of(this.isValidCard(cardId));
  }
  isValidCard(cardId: string) {
    if (cardId.length !== 13) return false;
    let sum = 0;
    for (let i = 0; i < 12; i++) {
      sum += parseFloat(cardId.charAt(i)) * (13 - i);
    }
    if ((11 - (sum % 11)) % 10 !== parseFloat(cardId.charAt(12))) {
      return false;
    } else {
      return true;
    }
  }
}
