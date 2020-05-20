import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { PostService } from "../shared/post.service";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { Post } from "../shared/post.model";

@Component({
  selector: "app-new-post",
  templateUrl: "./new-post.component.html",
  styleUrls: ["./new-post.component.css"],
})
export class NewPostComponent implements OnInit {
  postForm: FormGroup;
  editMode: boolean = false;
  id: number;
  post: Post;

  constructor(
    private postService: PostService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.postService.getPosts();
    this.route.params.subscribe((params: Params) => {
      this.id = params["id"];
    });
    this.editMode = this.id != null;
    this.initialisation();
  }
  onSubmit() {
    this.postService.addPost(this.postForm.value);
    this.router.navigate([""]);
    if (this.editMode) {
    }
  }
  onCancel() {
    this.router.navigate([""]);
  }
  initialisation() {
    this.postForm = new FormGroup({
      title: new FormControl(""),
      categories: new FormControl(""),
      content: new FormControl(""),
    });
    if (this.editMode) {
      this.postService.postChanged.subscribe((data) => {
        // this.post = data[this.id];
        // const index = data.indexOf(data[this.id]);
        console.log("in editmode index", this.id);
        const title = data[this.id].title;
        const categories = data[this.id].categories;
        const content = data[this.id].content;

        this.postForm = new FormGroup({
          title: new FormControl(title),
          categories: new FormControl(categories),
          content: new FormControl(content),
        });
      });
    }
  }
}
