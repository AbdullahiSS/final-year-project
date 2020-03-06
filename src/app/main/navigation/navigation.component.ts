import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, Directive, Input, OnChanges, SimpleChanges } from '@angular/core';
import { GoogleMapsAPIWrapper } from '@agm/core';
import { ILatLng } from '../directions-map.directive';

@Component({
  selector: 'main-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.sass']
})

export class NavigationComponent implements OnInit, AfterViewInit {

  // Washington, DC, USA
  origin: ILatLng = {
    latitude: 38.889931,
    longitude: -77.009003
  };
  // New York City, NY, USA
  destination: ILatLng = {
    latitude: 40.730610,
    longitude: -73.935242
  };
  displayDirections = true;
  zoom = 14;
  constructor(private gmapsApi: GoogleMapsAPIWrapper) { }


  ngOnInit() {

  }


  ngAfterViewInit(): void { }

}