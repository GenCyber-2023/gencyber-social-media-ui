import {Component, Input, OnInit} from '@angular/core';
import {Post} from "./post-feed/post.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../user.service";
import {Observable} from "rxjs";
import {PostsService} from "../../posts.service";

@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.css']
})
export class NewsFeedComponent implements OnInit {
  @Input() posts: Post[] = [];
  // @ts-ignore
  postForm: FormGroup;
  constructor(private formBuilder: FormBuilder, public userService: UserService, public postService: PostsService) { }

  ngOnInit(): void {
    this.postForm = this.formBuilder.group({
      content: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.postForm.valid) {
      const postContent = { postContent: this.postForm.value.content }; // Wrap postContent in an object
      this.postService.createPost(postContent).subscribe(
        (response) => {
          // Handle the response as needed
          console.log('Post created successfully', response);
          this.postForm.reset();
        },
        (error) => {
          console.error("Error creating post", error);
          // Handle the error as needed
        }
      );
    }
  }
}
