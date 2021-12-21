import { noUndefined } from '@angular/compiler/src/util';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { BehaviorSubject, ReplaySubject } from 'rxjs';

@Component({
  selector: "app-google-login",
  templateUrl: "./google-login.component.html",
  styleUrls: ["./google-login.component.css"],
})
export class GoogleLoginComponent implements OnInit {
  private auth2: gapi.auth2.GoogleAuth;
  private subject = new ReplaySubject<gapi.auth2.GoogleUser>(1);

  constructor(private ref: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.googleAuthInit();
  }

  googleAuthInit(): void {
    gapi.load("auth2", () => {
      this.auth2 = gapi.auth2.init({
        client_id:
          "652626006625-1oe3ac9rp86ug4npolkl6ob5do03as7v.apps.googleusercontent.com",
      });
    });
    this.ref.detectChanges();
  }

  googleSignIn(): void {
    this.auth2
      .signIn({
        scope: "https://www.googleapis.com/auth/gmail.readonly",
      })
      .then((user) => {
        this.subject.next(user);
        console.log(user);
      })
      .catch((err) => {
        this.subject.next(null);
      });
  }

  googleSignOut(): void {
    this.auth2.signOut().then(() => {
      this.subject.next(null);
    });
  }
}
