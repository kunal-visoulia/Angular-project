import { Component, OnInit } from '@angular/core';
import { SharedDataBwComponentsService } from '../shared-data-bw-components.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
h1Style:boolean=false;
users:Object;

// creating an instance of it through dependency injection within the constructor()  
constructor(private data: SharedDataBwComponentsService) { }

// a lifecycle hook for Angular. Any code placed in here will run when the component is loaded.
  ngOnInit() {
    this.data.getUsers().subscribe(data=>{
      this.users=data;
      console.log(this.users);
    });
  }

firstClick(){
this.data.firstClick();
}
}
