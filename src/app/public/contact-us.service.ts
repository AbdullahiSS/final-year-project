import { Injectable } from '@angular/core';
import { ContactUs } from './contact-us';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ContactUsService {

  constructor(private db: AngularFirestore) { }

  sendRequest(cus: ContactUs) {

    // console.log(this.db.collection("users", ref => ref.where('username', '==', authData.username) ))


    this.db.collection('contacts').doc('customers').set({
      name: cus.name,
      email: cus.email,
      tel: cus.tel,
      department: cus.department,
      subject: cus.subject,
      message: cus.message
    }).then(function (d) {
        console.log("Document successfully written!", d);
        console.log()

      }).catch(function (error) {
        console.error("Error writing document: ", error);
      })
  }

}
