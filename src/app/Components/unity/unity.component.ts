import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';

@Component({
    selector     : 'unity',
    templateUrl  : './unity.component.html',
    styleUrls    : ['./unity.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class UnityComponent implements OnInit
{

  constructor() { }

  gameInstance: any;
  progress = 0;
  isReady = false;
  buttonInUnityText = "";


  async ngOnInit() {

    let container = document.querySelector("#unity-container") || new Element();
    var canvas : HTMLElement = document.querySelector("#unity-canvas") || new HTMLElement();
    var loadingBar : HTMLElement = document.querySelector("#unity-loading-bar") || new HTMLElement();
    var progressBarFull : HTMLElement = document.querySelector("#unity-progress-bar-full") || new HTMLElement();
    var fullscreenButton : HTMLElement = document.querySelector("#unity-fullscreen-button") || new HTMLElement();
    var mobileWarning : HTMLElement = document.querySelector("#unity-mobile-warning") || new HTMLElement();

    function unityShowBanner(msg:any, type:any) {
      function updateBannerVisibility() {
        mobileWarning.style.display = mobileWarning.children.length ? 'block' : 'none';
      }
      var div = document.createElement('div');
      div.innerHTML = msg;
      mobileWarning.appendChild(div);
      if (type == 'error') div.setAttribute("style", "background: red; padding: 10px;");
      else {
        if (type == 'warning') div.setAttribute("style", "background: yellow; padding: 10px;");
        setTimeout(function() {
          mobileWarning.removeChild(div);
          updateBannerVisibility();
        }, 5000);
      }
      updateBannerVisibility();
    }

    var buildUrl = "/assets/Build/Build";
    var loaderUrl = buildUrl + "/Build.loader.js";
    var config = {
      dataUrl: buildUrl + "/Build.data",
      frameworkUrl: buildUrl + "/Build.framework.js",
      codeUrl: buildUrl + "/Build.wasm",
      streamingAssetsUrl: "StreamingAssets",
      companyName: "Dataverse",
      productName: "AngularUnityDataversePOC",
      productVersion: "0.1",
      showBanner: unityShowBanner,
    };
  
    
    if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
      // Mobile device style: fill the whole browser client area with the game canvas:

      var meta = document.createElement('meta');
      meta.name = 'viewport';
      meta.content = 'width=device-width, height=device-height, initial-scale=1.0, user-scalable=no, shrink-to-fit=yes';
      document.getElementsByTagName('head')[0].appendChild(meta);
      container.className = "unity-mobile";
      canvas.className = "unity-mobile";

      // To lower canvas resolution on mobile devices to gain some
      // performance, uncomment the following line:
      // config.devicePixelRatio = 1;

      alert('WebGL builds are not supported on mobile devices.');
    } else {
      // Desktop style: Render the game canvas in a window that can be maximized to fullscreen:

      canvas.style.width = "960px";
      canvas.style.height = "600px";
    }



    createUnityInstance(canvas, config, (progress: any) => {
      progressBarFull.style.width = 100 * progress + "%";
    }).then((unityInstance: any) => {

      this.gameInstance = unityInstance;
      loadingBar.style.display = "none";
      fullscreenButton.onclick = () => {
        unityInstance.SetFullscreen(1);
      };
    }).catch((message: any) => {
      alert(message);
    });



  
  // get data from unity (recieve data from unity)
  //
  (window as any).getUnityData = (textValue: string) => {
    this.buttonInUnityText = textValue;
  }


  }


  // call function in unity (send data to unity)
  //
  callUnityFunction() {
    this.gameInstance.SendMessage("Managers", "buttonInAngular", "Clicked a button in Angular!");
    console.log("Clicked a button in Angular!");
  }


}
