import { Component, OnInit } from '@angular/core';

declare var FB: any;

@Component({
  selector: "app-facebook-login",
  templateUrl: "./facebook-login.component.html",
  styleUrls: ["./facebook-login.component.css"],
})
export class FacebookLoginComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.getFBSDK();
  }

  getFBSDK() {
    (<any>window).fbAsyncInit = function () {
      FB.init({
        appId: "4818567261528058",
        cookie: true,
        xfbml: true,
        version: "v12.0",
      });

      FB.AppEvents.logPageView();
    };

    (function (d, s, id) {
      var js: any,
        fjs: any = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");
  }

  facebookLogin() {
    FB.login((res: any) => {
      console.log(res);
      this.getFBData(res.authResponse.accessToken, res.authResponse.userID);
    }, {});
  }

  getFBData(accessToken: any, userID: any) {
    console.log(
      "Facebook SDK/Graph API login",
      "accessToken:",
      accessToken,
      "\n",
      "userID:",
      userID
    );
    FB.api(
      "/" +
        userID +
        "?fields=id, first_name, last_name, middle_name, name, name_format, picture, short_name, accounts, email",
      (res: any) => {
        if (res && !res.error) {
          console.log(res);
        } else {
          console.log(res);
        }
      }
    );
  }
}
