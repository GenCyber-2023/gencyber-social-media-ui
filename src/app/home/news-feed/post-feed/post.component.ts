import {Component, Input, OnInit} from '@angular/core';
import { Post } from "./post.model";
import { PostsService } from "../../../posts.service";
import {UserService} from "../../../user.service";
import {User} from "../../../User";

@Component({
  selector: 'app-post-feed',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit{
  @Input() post: Post = new Post();
  users: User[] = [];
  userPicture: string = this.getUserPicture();

  constructor(private postService: PostsService, public userService: UserService) { }

  ngOnInit() {
    this.userService.getAllUsers().subscribe((users) => {
        this.users = users; // Assuming getUsers() returns an Observable<User[]>
      },(error) => {
        console.error('Error fetching users', error);
      }
    );
    return this.postService.getPost().getPostContent() && this.postService.getPost().getUsername();
  }
  getUserPicture(): string {
    let pictureUrl = '';
    const currentPost = this.postService.getPost();
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].username === currentPost.username) {
        pictureUrl = this.users[i].profilePhoto.toString();
        break;
      }
    }
    return pictureUrl;
  }
}
