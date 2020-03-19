import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, Directive, Input, OnChanges, SimpleChanges } from '@angular/core';
import { GoogleMapsAPIWrapper } from '@agm/core';
import { ILatLng } from '../directions-map.directive';

@Component({
  selector: 'main-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.sass']
})

export class NavigationComponent implements OnInit, AfterViewInit {

  // public lat = 24.799448;
  // public lng = 120.979021;

  // public origin: any;
  // public destination: any;

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
    // this.getDirection();
  }

  // getDirection() {
  //   this.origin = { lat: 24.799448, lng: 120.979021 };
  //   this.destination = { lat: 24.799524, lng: 120.975017 };
  // }

  ngAfterViewInit(): void { }

}