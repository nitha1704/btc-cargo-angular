import { Component, OnInit } from '@angular/core';
import liff from "@line/liff";
@Component({
  selector: "app-line-login",
  templateUrl: "./line-login.component.html",
  styleUrls: ["./line-login.component.css"],
})
export class LineLoginComponent implements OnInit {
  title = "angular-line-login";
  idToken: any = "";
  displayName: any = "";
  pictureUrl: any = "";
  statusMessage: any = "";
  userId: any = "";
  liffId: any = "1656741191-5XJxXakb";

  ngOnInit(): void {
    this.isLineLogin();
  }

  initLine(): void {
    liff.init(
      { liffId: this.liffId },
      () => {
        if (liff.isLoggedIn()) {
          this.runApp();
        } else {
          liff.login();
        }
      },
      (err) => console.error(err)
    );
  }

  lineLogin(): void {
    liff.init(
      { liffId: this.liffId },
      () => {
        liff.login({ redirectUri: "https://localhost:4200/admin/purchase/" });
        //liff.login();
      },
      (err) => console.error(err)
    );
  }

  isLineLogin(): void {
    liff.init({ liffId: "1656741191-5XJxXakb" }, () => {
      if (liff.isLoggedIn()) {
        this.runApp();
      }
    });
  }

  runApp(): void {
    const idToken = liff.getIDToken();
    this.idToken = idToken;
    liff
      .getProfile()
      .then((profile) => {
        console.log(profile);
        this.displayName = profile.displayName;
        this.pictureUrl = profile.pictureUrl;
        this.statusMessage = profile.statusMessage;
        this.userId = profile.userId;
      })
      .catch((err) => console.error(err));
  }

  logout(): void {
    liff.logout();
    window.location.reload();

  }
}
