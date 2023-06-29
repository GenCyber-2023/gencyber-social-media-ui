import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, of, tap} from "rxjs";
import {User} from "./User";
import {MessageService} from "./message.service";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };
  loginURL: string = 'http://localhost:8080/user'
  private user: User = new User();

  constructor(private http: HttpClient, private messageService: MessageService) {
    console.log("Started user script");
  }

  login(attemptedUser: User): Observable<User> {
    return this.http.post<User>(this.loginURL + "/login", attemptedUser, this.httpOptions).pipe(
      tap((actualUser) => {
        console.log(`[user service] logged in with`, actualUser);
        this.user = actualUser;
      })
    );
  }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.loginURL + "/getAll").pipe(
      tap(_ => this.log('fetched users')),
      catchError(this.handleError<User[]>('getAllUsers', []))
    )
  }

  logout(): void {
    this.user = new User();
  }

  createUser(user: User): Observable<User> {
    return new Observable<User>((observer) => {
      this.http.post<User>(this.loginURL + "/create", user, this.httpOptions).subscribe(
        (user) => {
          console.log(`created new user w/ username ${user.username}`);
          observer.next(user);
          observer.complete();
        },
        (error) => {
          console.error('Error creating user', error);
          observer.error(error);
        }
      );
    });
  }

  getUser(): User {
    return this.user;
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private log(message: string) {
    this.messageService.add(`PostService: ${message}`);
  }
}
