import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { PostService } from "../shared/post.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-new-post",
  templateUrl: "./new-post.component.html",
  styleUrls: ["./new-post.component.css"],
})
export class NewPostComponent implements OnInit {
  postForm: FormGroup;
  constructor(private postService: PostService, private router: Router) {}

  ngOnInit() {
    this.postForm = new FormGroup({
      title: new FormControl(""),
      categories: new FormControl(""),
      content: new FormControl(""),
    });
  }
  onSubmit() {
    this.postService.addPost(this.postForm.value);
    this.router.navigate([""]);
  }
  onCancel() {
    this.router.navigate([""]);
  }
}
