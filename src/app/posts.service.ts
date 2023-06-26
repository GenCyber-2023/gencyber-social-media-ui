import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Post} from "./home/news-feed/post-feed/post.model";
import {Observable} from "rxjs";
import {User} from "./User";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };
  postURL: string = 'http://localhost:8080/post';
  // @ts-ignore
  private post: Post = new Post();
  private user: User = new User();
  constructor(private http: HttpClient) {
    console.log("Starting script");
  }
  createPost(post: Post): Observable<Post> {
    return new Observable<Post>((observer) => {
      this.http.post<Post>(this.postURL + `/${this.user.username}/create`, post, this.httpOptions).subscribe(
        (response) => {
          observer.next(response);
          observer.complete();
        },
        (error) => {
          console.error("Error creating post", error);
          observer.error(error);
        }
      );
    });
  }


}
