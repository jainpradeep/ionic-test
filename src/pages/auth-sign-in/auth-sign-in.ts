import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';


/**
 * Generated class for the AuthSignInPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-auth-sign-in',
  templateUrl: 'auth-sign-in.html',
})
export class AuthSignInPage {

  username = "";
  password = "";
  constructor(public navCtrl: NavController, private http: Http) {
  }
  login(){
  
    let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'}); 
    let options = new RequestOptions({ headers: headers })
    var parser = new DOMParser();
    var reqBody = "email=" + this.username + "&" + "mobile_no=" + this.password
this.http.post<any>('http://10.10.100.24:3006/authenticate', { username: this.username, password: this.password })
        .pipe(map(res => {
            // login successful if there's a jwt token in the response
            this.spinner.hide();
            if (res.msg == "success") {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(res.msg));
                localStorage.setItem('username', username);
                this.userName  = username
            } 
            return res;
        }));
    
  }

}
