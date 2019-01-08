import { Component, OnInit } from '@angular/core';
import { GetPostsService } from '../get-posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {


posts$: Object;
constructor(private data:GetPostsService) { }

  ngOnInit() {
    
    
    this.data.getPosts().subscribe(
      data => {this.posts$ = data;      
       console.log(this.posts$);
        
      }
    );
   
  }

  
}
