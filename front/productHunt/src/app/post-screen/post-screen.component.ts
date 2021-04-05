import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {formatDate} from '@angular/common';
import { PostService } from '../services/post.service';
import { Post } from '../models/post.model';

@Component({
  selector: 'app-post-screen',
  templateUrl: './post-screen.component.html',
  styleUrls: ['./post-screen.component.scss']
})
export class PostScreenComponent implements  OnInit {
  range = new FormGroup({
  start: new FormControl((new Date())),
  end: new FormControl((new Date())) });
  maxDate = formatDate(new Date(), 'yyyy-MM-dd', 'en');
  posts:Post[] = []
  order = "NEWEST"
  isLoading = false
  constructor(private postService: PostService) {
  }

  ngOnInit(): void {
    this.getRange()
  }
  
  getRange(){
    this.isLoading= !this.isLoading
    this.postService.getPosts(this.range, this.order).subscribe((data) => {
    this.isLoading= !this.isLoading
      this.posts = data.posts.edges
      return data.posts.edges
    });
  }
}
