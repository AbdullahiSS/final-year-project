import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, Directive, Input, OnChanges, SimpleChanges } from '@angular/core';
import { GoogleMapsAPIWrapper } from '@agm/core';
import { ILatLng } from '../directions-map.directive';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'main-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.sass']
})

export class DriverNavigationComponent implements OnInit, AfterViewInit {

  // pickupForm: FormGroup;
  // dropoffForm: FormGroup;
  orderForm: FormGroup;


  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;

  isTracking = false;

  currentLat: any;
  currentLong: any;

  marker: google.maps.Marker;

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
  constructor(private gmapsApi: GoogleMapsAPIWrapper, private fb: FormBuilder) { }


  ngOnInit() {
    this.orderForm = this.fb.group({
      'p_street': ['', Validators.required],
      'p_state': ['', Validators.required],
      'p_tel': ['', Validators.required],
      'p_zip_code': ['', Validators.required],
      'p_date': ['', Validators.required],

      dropoff: this.fb.group({
        'd_street': ['', Validators.required],
        'd_state': ['',  Validators.required],
        'd_tel': ['', Validators.required],
        'd_zip_code': ['', Validators.required],
        'd_date': ['', Validators.required],

      })
    });

    this.getDirection();
  }

  getDirection() {
    this.origin;
    this.destination;
  }


  findMe() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.showPosition(position);
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }

  trackMe() {
    if (navigator.geolocation) {
      this.isTracking = true;
      navigator.geolocation.watchPosition((position) => {
        this.showTrackingPosition(position);
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }

  showPosition(position) {
    this.currentLat = position.coords.latitude;
    this.currentLong = position.coords.longitude;

    let location = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    this.map.panTo(location);

    if (!this.marker) {
      this.marker = new google.maps.Marker({
        position: location,
        map: this.map,
        title: 'Got you!'
      });
    }
    else {
      this.marker.setPosition(location);
    }
  }

  showTrackingPosition(position) {
    console.log(`tracking postion:  ${position.coords.latitude} - ${position.coords.longitude}`);
    this.currentLat = position.coords.latitude;
    this.currentLong = position.coords.longitude;

    let location = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    this.map.panTo(location);

    if (!this.marker) {
      this.marker = new google.maps.Marker({
        position: location,
        map: this.map,
        title: 'Got you!'
      });
    }
    else {
      this.marker.setPosition(location);
    }
  }

  ngAfterViewInit(): void { }

  onSubmit() {
    console.log('order placed:' +this.orderForm.value)
  }
}