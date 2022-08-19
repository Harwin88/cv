// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.



let clientid = "882e3a05-3045-4208-b671-cbb9c1f3bd81";
let secret = "882e3a05-3045-4208-b671-cbb9c1f3bd81";
let issuer = "https://myidpportal.com/idp/myapp/";
let logoutUrl = "http://sistema-plan-desarrollo.lndo.site?clicnt_id=882e3a05-3045-4208-b671-cbb9c1f3bd81";
 
export const environment = {​​​​
  production: false,
  idp: {​​​​
    issuer: issuer,
    redirectUri: "http://localhost:4200/",
    production: false,
    url_api: "https://sistema-plan-desarrollo.lndo.site/oauth/token",
    clicnt_id: "882e3a05-3045-4208-b671-cbb9c1f3bd81",
    scope: "openid profile email",
    responseType: "code",
    showDebugInformation: true,
    dummyClientSecret: secret,
    logoutUrl: logoutUrl+clientid,
    skipIssuerCheck:true
  }​​​​,
}​​​​;

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
