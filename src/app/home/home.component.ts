import { Component, OnInit } from "@angular/core";
import { Post } from "../shared/post.model";
import { Router } from "@angular/router";
import { PostService } from "../shared/post.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  posts: Post[];
  isPost: boolean = false;
  subscription: Subscription;
  constructor(private router: Router, private postService: PostService) {}

  ngOnInit() {
    this.postService.getPosts();
    this.subscription = this.postService.postChanged.subscribe((data) => {
      this.posts = data;
      console.log(data);
      if (this.posts) this.isPost = true;
      console.log(this.isPost);
    });
  }

  onAdd() {
    this.router.navigate(["new"]);
  }

  ngDestroy() {
    this.subscription.unsubscribe();
  }
}
