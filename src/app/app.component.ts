import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import 'firebase/firestore';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'final-year-project';

  loadedPosts = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchPosts()
  }

  onCreatePost(postData: { title: string; content: string; }) {
    //send Http request
    this.http.post('https://fyproject-94dc2.firebaseio.com/posts.json', postData)
    .subscribe(responseData => {
      console.log(responseData);
    });
  }

  onFetchPosts() {
    //send Http request
  }

  private fetchPosts() {
    this.http.get('https://fyproject-94dc2.firebaseio.com/posts.json')
    //observable operators for transforming data
    //get and read data automatically wrapped into an observable
    .pipe(map(responseData => {
      const postArray = [];
      for (const key in responseData) {
        if (responseData.hasOwnProperty(key)) {
          postArray.push({ ...responseData[key], id: key })
        }
      }
      return postArray;
    }))
    .subscribe(posts => {
      console.log(posts);
    });
  }
}
