import { Directive, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { GoogleMapsAPIWrapper } from '@agm/core';

// You can use any other interface for origin and destination, but it must contain latlng data
export interface ILatLng {
  latitude: number;
  longitude: number;
}

export interface Waypoint {
  location: {
    latitude: number;
    longitude: number;
  };
  stopover: boolean;
}

// the will keep typescript from throwing errors w.r.t the google object
declare var google: any;

@Directive({
  selector: '[appDirectionsMap]'
})

export class DirectionsMapDirective implements OnInit, OnChanges {
  @Input() origin: ILatLng;
  @Input() destination: ILatLng;
  @Input() showDirection: boolean;

  // We'll keep a single google maps directions renderer instance so we get to reuse it.
  // using a new renderer instance every time will leave the previous one still active and visible on the page
  private directionsRenderer: any;

  // We inject AGM's google maps api wrapper that handles the communication with the Google Maps Javascript
  constructor(private gmapsApi: GoogleMapsAPIWrapper) { }

  ngOnInit() {
    this.drawDirectionsRoute();
  }

  drawDirectionsRoute() {
    this.gmapsApi.getNativeMap().then(map => {
      if (!this.directionsRenderer) {
        // if you already have a marker at the coordinate location on the map, use suppressMarkers option
        // suppressMarkers prevents google maps from automatically adding a marker for you
        this.directionsRenderer = new google.maps.DirectionsRenderer({ suppressMarkers: true });
      }
      const directionsRenderer = this.directionsRenderer;

      if (this.showDirection && this.destination) {
        const directionsService = new google.maps.DirectionsService;
        // const directionsRenderer = new google.maps.DirectionsRenderer();
        directionsRenderer.setMap(map);
        directionsService.route({
          origin: { lat: this.origin.latitude, lng: this.origin.longitude },
          destination: { lat: this.destination.latitude, lng: this.destination.longitude },
          waypoints: [
            {
              location: { lat: 39.0921167, lng: -94.8559005 },
              stopover: true
            },
            {
              location: { lat: 41.8339037, lng: -87.8720468 },
              stopover: true
            }
          ],
          optimizeWaypoints: true,
          provideRouteAlternatives: false,
          travelMode: 'DRIVING',
          drivingOptions: {
            departureTime: new Date(/* now, or future date */),//Date.now() + N
            trafficModel: 'pessimistic'
          },
          unitSystem: google.maps.UnitSystem.IMPERIAL
        },
        
          (response, status) => {
            if (status === 'OK') {
              directionsRenderer.setDirections(response);
              // If you'll like to display an info window along the route
              // middleStep is used to estimate the midpoint on the route where the info window will appear
              // const middleStep = (response.routes[0].legs[0].steps.length / 2).toFixed();
              // const infowindow2 = new google.maps.InfoWindow();
              // infowindow2.setContent(`${response.routes[0].legs[0].distance.text} <br> ${response.routes[0].legs[0].duration.text}  `);
              // infowindow2.setPosition(response.routes[0].legs[0].steps[middleStep].end_location);
              // infowindow2.open(map);
            } else {
              console.log('Directions request failed due to ' + status);
            }
          });
      }

    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.destination || changes.showDirection) {
      // this checks if the show directions input changed, if so the directions are removed
      // else we redraw the directions
      if (changes.showDirection && !changes.showDirection.currentValue) {
        if (this.directionsRenderer !== undefined) { // check this value is not undefined
          this.directionsRenderer.setDirections({ routes: [] });
          return;
        }
      } else {
        this.drawDirectionsRoute();
      }
    }
  }

}