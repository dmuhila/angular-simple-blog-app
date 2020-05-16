import { Component, OnInit } from "@angular/core";
import { PostService } from "../shared/post.service";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { Post } from "../shared/post.model";

@Component({
  selector: "app-view",
  templateUrl: "./view.component.html",
  styleUrls: ["./view.component.css"],
})
export class ViewComponent implements OnInit {
  id: number;
  post: Post;
  constructor(
    private postService: PostService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = params["id"];
    });
    this.postService.getPostById(this.id).subscribe((data) => {
      this.post = data;
    });
  }
}
