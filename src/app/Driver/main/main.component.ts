import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit {

  sideNavState = "expanded";

  // currentComponent = "document";
  // components: Array<string> = ["document", "reporting", "settings"];

  constructor() { }

  ngOnInit() {
  }

  toggleSideNAvState() {
    
  }

  // changeComponent(component: string) {
  //   if(this.components.includes(component)){
  //     this.currentComponent = component;
  //   }
  // }

}
