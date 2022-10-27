import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'node-config-sidebar',
  templateUrl: './node-config-sidebar.component.html',
  styleUrls: ['./node-config-sidebar.component.css']
})
export class NodeConfigSidebarComponent implements OnInit {

  showFiller = false;

  constructor() { }

  ngOnInit(): void {
  }

}
