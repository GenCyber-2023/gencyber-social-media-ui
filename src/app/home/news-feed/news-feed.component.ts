import {Component, Input, OnInit} from '@angular/core';
import {Post} from "./post-feed/post.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../user.service";
import {PostsService} from "../../posts.service";

@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.css']
})
export class NewsFeedComponent implements OnInit {
  @Input() posts: Post[] = [];
  userPicture: string = this.getUserPicture();

  // @ts-ignore
  postForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
              public userService: UserService,
              public postService: PostsService) { }

  ngOnInit() {
    this.postForm = this.formBuilder.group({
      content: ['', Validators.required]
    });
    this.userService.getUser();
    this.postService.getAllPosts().subscribe(
      (posts) => {
        this.posts = posts.reverse();
        this.userPicture = this.getUserPicture();
      },
      (error) => {
        console.error("Error fetching posts", error);
      }
    );
  }

  getUserPicture(): string {
    console.log("fetching user photo")
    console.log("This is the photo url: " + this.userService.getUser().profilePhoto)
    return this.userService.getUser().profilePhoto;
  }

  onSubmit(): void {
    if (this.postForm.valid) {
      const postContent = { postContent: this.postForm.value.content }; // Wrap postContent in an object
      this.postService.createPost(postContent).subscribe(
        (response) => {
          // Handle the response as needed
          console.log('Post created successfully', response);
          this.postForm.reset();
          this.fetchPosts(); // Fetch updated list of posts
        },
        (error) => {
          console.error("Error creating post", error);
          // Handle the error as needed
        }
      );
    }
  }

  private fetchPosts(): void {
    this.postService.getAllPosts().subscribe(
      (posts) => {
        this.posts = posts.reverse();
      },
      (error) => {
        console.error("Error fetching posts", error);
      }
    );
  }
}
