import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthenticationService } from '../../authentication/authentication.service';

@Component({
  selector: 'main-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {

  private trips: [];
  private orders: [];
  public trip_number: 0;
  public order_number: 0;

  constructor(private db: AngularFirestore, private authService: AuthenticationService) { }

  ngOnInit() {
    this.getTrips();
    this.getOrders();
  }

  updateTrips(){
    this.getTrips()
  }

  updateOrders(){
    this.getOrders()
  }

  setTrips(docs){
    this.trips = docs
    this.trip_number = this.trips.length
    console.log('trips', this.trips)
  }

  setOrders(docs){
    this.orders = docs
    this.order_number = this.orders.length
    console.log('orders', this.orders)
  }

  getTrips(){
    console.log('userrrr',this.authService.username)
    this.db.collection('orders', ref=> ref.where('driver_username', '==', this.authService.username))
    .get().subscribe(snapshot =>{
      console.log('made it here')
      this.setTrips(snapshot.docs)
    })
  }

  getOrders(){
    console.log('userrrr',this.authService.username)
    this.db.collection('orders', ref=> ref.where('customer_username', '==', this.authService.username))
    .get().subscribe(snapshot =>{
      console.log('made it here')
      this.setOrders(snapshot.docs)
    })
  }
}
