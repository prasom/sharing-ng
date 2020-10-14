import { NgHttpComponent } from "./ng-http/ng-http.component";
import { NgBindingComponent } from "./ng-binding/ng-binding.component";
import { NgClassComponent } from "./ng-class/ng-class.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { NgFormComponent } from "./ng-form/ng-form.component";

const routes: Routes = [
  { path: "ng-class", component: NgClassComponent },
  { path: "ng-binding", component: NgBindingComponent },
  { path: "ng-http", component: NgHttpComponent },
  { path: "ng-form", component: NgFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
