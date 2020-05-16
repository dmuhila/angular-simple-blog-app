import { Injectable } from "@angular/core";
import { Post } from "./post.model";
import { Subject, ReplaySubject } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class PostService {
  private posts: Post[] = [];
  postChanged = new ReplaySubject<Post[]>(1);

  constructor(private http: HttpClient) {}

  addPost(newPost: Post) {
    var title: string = newPost.title;
    var categories: string = newPost.categories;
    var content: string = newPost.content;

    // this.posts.push(newPost);
    // console.log("in service add", this.posts);
    // this.postChanged.next(this.posts);
    this.http
      .post<Post>("https://reduxblog.herokuapp.com/api/posts?key=muhiladblog", {
        title: title,
        categories: categories,
        content: content,
      })
      .subscribe((res) => {
        console.log("addpost", res);
        this.posts.push(res);

        this.postChanged.next(this.posts);
      });
  }

  deletePost(id: number) {
    // this.posts.splice(id, 1);
    // this.postChanged.next(this.posts.slice());
    this.http
      .delete("https://reduxblog.herokuapp.com/api/posts", {
        params: { id: "" + id, key: "muhiladblog" },
      })
      .subscribe((res) => {
        console.log("delete", res);
        //this.postChanged.next(res);
      });
  }

  getPosts() {
    this.http
      .get<Post[]>("https://reduxblog.herokuapp.com/api/posts", {
        params: { key: "muhiladblog" },
      })
      .subscribe((res) => {
        console.log("getposts", res);
        this.posts = res;
        //console.log("in getposts", this.posts.push(res));
        this.postChanged.next(res);
      });
  }

  getPostById(id: number) {
    return this.http.get<Post>(
      `https://reduxblog.herokuapp.com/api/posts/${id}`,
      {
        params: { key: "muhiladblog" },
      }
    );
    // .subscribe((res) => {
    //   console.log("getpostbyid", res);
    //   this.posts.push(res);
    //   this.postChanged.next(this.posts);
    // });
  }
}
