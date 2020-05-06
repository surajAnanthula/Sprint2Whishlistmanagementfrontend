import { Component, OnInit } from '@angular/core';
import { MyserviceService, Product } from '../myservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewwhishlist',
  templateUrl: './viewwhishlist.component.html',
  styleUrls: ['./viewwhishlist.component.css']
})
export class ViewwhishlistComponent implements OnInit {
  message: string;
  whishlist: Product[];
  constructor(private myservice: MyserviceService, private router: Router) { }

  ngOnInit(): any {
    this.myservice.getWhishlist().subscribe(response => this.handleSuccessfulResponse(response),
    );
  }
  handleSuccessfulResponse(response: Product[]): any {
    this.whishlist = response;
  }


}
