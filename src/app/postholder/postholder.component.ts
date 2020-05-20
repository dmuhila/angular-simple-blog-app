import { Component, OnInit, Input } from "@angular/core";
import { Post } from "../shared/post.model";
import { PostService } from "../shared/post.service";

@Component({
  selector: "app-postholder",
  templateUrl: "./postholder.component.html",
  styleUrls: ["./postholder.component.css"],
})
export class PostholderComponent implements OnInit {
  @Input() i: number;
  post: Post[];

  constructor(private postService: PostService) {}

  ngOnInit() {
    console.log("in holder", this.post);
  }
}
