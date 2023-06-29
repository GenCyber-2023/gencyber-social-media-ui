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

    const storedUsername = this.getCookie("username");
    const storedUser = localStorage.getItem("currentUser");

    if (storedUser) {
      this.user = JSON.parse(storedUser);
    } else if (storedUsername) {
      this.getAllUsers().subscribe(users => {
        const foundUser = users.find(user => user.username === storedUsername);
        this.user = foundUser || new User();
        localStorage.setItem("currentUser", JSON.stringify(this.user));
      });
    } else {
      this.user = new User();
      this.user.username = "Anonymous";
    }
  }

  login(attemptedUser: User): Observable<User> {
    return this.http.post<User>(this.loginURL + "/login", attemptedUser, this.httpOptions).pipe(
      tap((actualUser) => {
        console.log(`[user service] logged in with`, actualUser);
        this.user = actualUser;
        this.setCookie("username", actualUser.username);
      })
    );
  }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.loginURL + "/getAll").pipe(
      tap(_ => this.log('fetched users')),
      catchError(this.handleError<User[]>('getAllUsers', []))
    )
  }
  isLoggedIn(): boolean {
    return this.user.username !== "Anonymous";
  }

  logout(): void {
    this.user = new User();
    this.user.username = "";
    this.setCookie("username", "");
    localStorage.removeItem("currentUser");
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
  private getCookie(name: string): string | undefined {
    let value = "; " + document.cookie;
    let parts = value.split("; " + name + "=") || "";
    if (parts.length == 2) return parts?.pop()?.split(";")?.shift() || undefined;
    return undefined;
  }

  private setCookie(name: string, value: string) {
    document.cookie = name + "=" + value + "; path=/";
  }
}
