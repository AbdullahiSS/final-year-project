import { Directive, OnInit, Input, Output, EventEmitter, HostListener, OnDestroy } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { tap, map, take, debounceTime } from 'rxjs/operators';

@Directive({
  selector: '[appFireForm]'
})
export class FireFormDirective implements OnInit, OnDestroy {

  @Input() path: string;  //give it a path to the firestore collection
  @Input() formGroup: FormGroup;


  //complex state management situation. The form might be loading or synched; which means the 
  //reactive form and firestore have the same data. It might be modified where the reactive
  //form is different in firestore or it can also be in an error state; which means firestore 
  //sent an error after we tried to update the form
  private _state: 'loading' | 'synced' | 'modified' | 'error';

  @Output() stateChange = new EventEmitter<string>();
  @Output() formError = new EventEmitter<string>();

  //firestore document
  private docRef: AngularFirestoreDocument;

  //subscriptions - declaring a variable for document reference as well unscribe when this 
  //component is destroyed
  private formSub: Subscription;

  constructor(private afs: AngularFirestore) { }

  ngOnInit() {
    this.preloadData();
    this.autoSave();
  }

  //setter for state changes
  set state(val) {
    this._state = val;
    this.stateChange.emit(val);
  }

  //writes changes to Firestore
  async setDoc() {
    try {
      await this.docRef.set(this.formGroup.value, { merge: true });
      this.state = 'synced';
    } catch (err) {
      console.log(err)
      this.formError.emit(err.message)
      this.state = 'error';
    }
  }

  //loads initial form data from Firestore
  preloadData() {
    this.state = 'loading';
    this.docRef = this.getDocRef(this.path);
    this.docRef
      .valueChanges()
      .pipe(
        tap(doc => {
          if (doc) {
            this.formGroup.patchValue(doc);
            this.formGroup.markAsPristine();
            this.state = 'synced';
          }
        }),
        take(1)
      )
      .subscribe();
  }

  //Autosaves form Changes - it is left as a realtime stream of reactive form changes
  autoSave() {
    this.formSub = this.formGroup.valueChanges
      .pipe(
        // as soon as a change happens, we want to set the form state to modified, but then it'll
        // be super inefficient and expensive to write to the database after every change. Therefore
        // a debounceTime of 2000 ms is piped in which will wait for a user to stop typing for atleast
        // 2000ms before excecuting the next operator in this pipe
        tap(change => {
          this.state = 'modified';
        }),
        debounceTime(2000),
        tap(change => {
          if (this.formGroup.valid && this._state === 'modified') {
            this.setDoc();
          }
        })
      )
      .subscribe();
  }

  //allows the user to submit the form without having to wait for the autosave debounce to expire
  @HostListener('ngSubmit', ['$event'])
  onSubmit(e) {
    this.setDoc();
  }

  //Determines if a path is a collection or a document. If we break up a document path by slashes
  //we know that every odd numbered segment is a collection and every numbered segment is a 
  //collection 
  getDocRef(path: string): any {
    if (this.path.split('/').length % 2) {
      return this.afs.doc(`${path}/${this.afs.createId()}`);
    }
    else {
      return this.afs.doc(path)
    }
  }
  
  //reactive form subscriptions can be pretty expensive, so this is very important especially 
  //because they're many reavtive forms throughout this application 
  ngOnDestroy() {
    this.formSub.unsubscribe();
  }

}

