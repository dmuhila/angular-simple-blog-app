import { Component, OnInit, Input } from "@angular/core";
import { Post } from "../shared/post.model";
import { PostService } from "../shared/post.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-post",
  templateUrl: "./post.component.html",
  styleUrls: ["./post.component.css"],
})
export class PostComponent implements OnInit {
  @Input() post: Post;
  constructor(private postService: PostService, private router: Router) {}

  ngOnInit() {
    console.log("in post component", this.post);
  }

  onClick() {
    this.router.navigate([this.post.id]);
  }
}
