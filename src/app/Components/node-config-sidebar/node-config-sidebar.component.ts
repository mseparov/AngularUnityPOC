import { Component, OnInit } from '@angular/core';
import { DataService } from '../../Services/data.service'

@Component({
  selector: 'node-config-sidebar',
  templateUrl: './node-config-sidebar.component.html',
  styleUrls: ['./node-config-sidebar.component.css']
})
export class NodeConfigSidebarComponent implements OnInit {

  isShowing: boolean = true;
  nodeConfigName: string = "";


  constructor(private data: DataService) { }

  ngOnInit(): void {
  
    this.data.nodeConfigDataFromUnity.subscribe((configData)=>{
      this.nodeConfigName = configData;
      this.isShowing = !this.isShowing;

    })
  
  }
  
  sendSliderData(event:any){
    this.data.setNodeConfigSliderApply(event);
  }


}