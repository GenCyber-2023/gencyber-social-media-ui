import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Post} from "./home/news-feed/post-feed/post.model";
import {catchError, map, Observable, of, tap} from "rxjs";
import {User} from "./User";
import {error} from "@angular/compiler-cli/src/transformers/util";
import {UserService} from "./user.service";
import {MessageService} from "./message.service";

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
  constructor(private http: HttpClient, private userService: UserService, private messageService: MessageService) {
    console.log("Starting script");
  }
  getAllPosts(): Observable<Post[]> {
    const url = `${this.postURL}/all`;
    // @ts-ignore
    return this.http.get<Post[]>(url).pipe(
      tap(posts => console.log('Response from backend:', posts)),
      tap(_ => this.log('Fetched Posts')),
      catchError(this.handleError<Post[]>('getAllPosts', []))
    );
  }
  getPost(): Post {
    return this.post;
  }

  createPost(post: { postContent: any }): Observable<Post> {
    return new Observable<Post>((observer) => {
      this.http.post<Post>(this.postURL + `/${this.userService.getUser().getUsername()}` + '/create', post, this.httpOptions).subscribe(
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
  private log(message: string) {
    this.messageService.add('PostService: ${message}');
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
