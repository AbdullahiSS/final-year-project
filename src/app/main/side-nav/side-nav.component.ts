import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'main-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.sass']
})
export class SideNavComponent implements OnInit {

  @Input('state') state: string = "expanded";
  @Input('initialState') initialState;

  constructor() { }

  ngOnInit() {
    this.state = this.initialState? this.initialState: 'expanded';
  }

}
