import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { CardValidatorService } from "../card-validator.service";

@Component({
  selector: "app-ng-form",
  templateUrl: "./ng-form.component.html",
  styleUrls: ["./ng-form.component.scss"],
})
export class NgFormComponent implements OnInit {

  basicUsageForm: FormGroup = this.formBuilder.group({
    cardId: new FormControl("", [
      Validators.required,
      Validators.minLength(13),
    ]),
    email: new FormControl("", [Validators.required, Validators.email]),
    confirmEmail: new FormControl("", [Validators.required, Validators.email]),
  });

  // Without Form Group
  cardId: FormControl = new FormControl("", [
    Validators.required,
    Validators.minLength(13),
  ]);

  advanceForm = this.formBuilder.group(
    {
      cardId: new FormControl(
        "",
        Validators.compose([Validators.required, Validators.minLength(13)]),
        this.cardIdValidatorService.cardIdValidator()
      ),
      email: new FormControl("", [Validators.required, Validators.email]),
      confirmEmail: new FormControl("", [
        Validators.required,
        Validators.email,
      ]),
    },
    {
      validators: [this.matchingEmails("email", "confirmEmail")],
    }
  );

  constructor(
    private formBuilder: FormBuilder,
    private cardIdValidatorService: CardValidatorService
  ) {}

  ngOnInit() {}

  matchingEmails(emailKey: string, confirmEmailKey: string) {
    return (group: FormGroup): { [key: string]: any } => {
      const email = group.controls[emailKey];
      const confirmEmail = group.controls[confirmEmailKey];
      if (email.value !== confirmEmail.value) {
        return {
          mismatchedEmails: true,
        };
      }
    };
  }
}
