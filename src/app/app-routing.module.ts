import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { NewPostComponent } from "./new-post/new-post.component";
import { ViewComponent } from "./view/view.component";
import { EditComponent } from "./edit/edit.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "new",
    component: NewPostComponent,
  },
  {
    path: ":id",
    component: ViewComponent,
  },
  {
    path: "edit/:id",
    component: NewPostComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
