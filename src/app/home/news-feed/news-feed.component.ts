import {Component, Input, OnInit} from '@angular/core';
import {Post} from "./post-feed/post.model";

@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.css']
})
export class NewsFeedComponent implements OnInit {
  @Input()
  public posts: Post[] =[];

  constructor(){
  }

  ngOnInit(): void {
  }

}
