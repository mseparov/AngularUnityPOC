import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import {Router} from "@angular/router";


@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
  template: "The href is: {{href}}",
})
export class NavBarComponent implements OnInit {

    public href: string = "";
    public urlCheck: string = "";

    constructor(private router: Router) {

      // additional buttons colored page indicator
      router.events.subscribe((val) => {

        this.href = window.location.href;
      
      if(this.href.includes("/home")){
        this.urlCheck="home"
      }
      if(this.href.includes("/second-page")){
        this.urlCheck="second-page"
      }
    });
  }

  ngOnInit(): void {
    
  }
}