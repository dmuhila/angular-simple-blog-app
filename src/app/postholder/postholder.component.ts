import { Component, OnInit, Input } from "@angular/core";
import { Post } from "../shared/post.model";

@Component({
  selector: "app-postholder",
  templateUrl: "./postholder.component.html",
  styleUrls: ["./postholder.component.css"],
})
export class PostholderComponent implements OnInit {
  @Input() post: Post[];

  constructor() {}

  ngOnInit() {
    console.log("in holder", this.post);
  }
}
