import { Component, OnInit } from '@angular/core';
import { GetPostsService } from '../get-posts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
h1Style:boolean=false;
user:Object;

  constructor(private data:GetPostsService) { }

  ngOnInit() {
    this.data.getUsers().subscribe(data=>{
      this.user=data
    console.log(this.user);

    });
  }

firstClick(){
console.log("aa");
}
}
