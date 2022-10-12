import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'unity',
  templateUrl: './unity.component.html',
  styleUrls: ['./unity.component.css']
})
export class UnityComponent implements OnInit {

  gameInstance: any;
  progress = 0;
  isReady = false;
  buttonInUnityText = "";

  constructor() { }

  ngOnInit(): void {
    const loader = (window as any).UnityLoader;

    this.gameInstance = loader.instantiate(
      'gameContainer',
      '/assets/Build/assets.json', {
      onProgress: (gameInstance: any, progress: number) => {
        this.progress = progress;
        if (progress === 1) {
          this.isReady = true;
        }
      }
    });


    // get data from unity (recieve data from unity)
    (window as any).getUnityData = (textValue: string) => {
      this.buttonInUnityText = textValue;
    }


  }

  // call function in unity (send data to unity)
  callUnityFunction() {
    this.gameInstance.SendMessage("Main Screen", "buttonInAngular", "Clicked a button in Angular!");
    console.log("Clicked a button in Angular!");
  }


}
