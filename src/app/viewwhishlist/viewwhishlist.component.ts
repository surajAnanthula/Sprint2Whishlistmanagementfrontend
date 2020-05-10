import { Component, OnInit } from '@angular/core';
import { MyserviceService, Product, Whishlist } from '../myservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewwhishlist',
  templateUrl: './viewwhishlist.component.html',
  styleUrls: ['./viewwhishlist.component.css']
})
export class ViewwhishlistComponent implements OnInit {
  message: string;
  whishlist: Whishlist[];
  userId:any;
  constructor(private myservice: MyserviceService, private router: Router) { }

  ngOnInit(): any {
    this.userId=123;
    console.log(this.userId);
    this.myservice.getWhishlist(this.userId).subscribe(response => this.handleSuccessfulResponse(response),
    );
  }
  handleSuccessfulResponse(response: Whishlist[]): any {
    this.whishlist = response;
  }


}
