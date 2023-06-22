import {Component, Input, OnInit} from '@angular/core';
import {Post} from "./post-feed/post.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.css']
})
export class NewsFeedComponent implements OnInit {
  @Input()
  public posts: Post[] =[];
  // @ts-ignore
  postForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.postForm = this.formBuilder.group({
      content: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.postForm.valid) {
      const postContent = this.postForm.value.content;
      // Do something with the post content, e.g., send it to the server
      console.log('Posted content:', postContent);

      // Reset the form after submission
      this.postForm.reset();
    }
  }
}
