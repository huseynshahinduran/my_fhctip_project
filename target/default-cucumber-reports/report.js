$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/fhctriphotellist.feature");
formatter.feature({
  "name": "Hotel List feature",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@hotellist"
    }
  ]
});
formatter.scenario({
  "name": "testing the hotel list on the web page",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@hotellist"
    }
  ]
});
formatter.step({
  "name": "user is on the fhc trip page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.FHCTripHotelList.user_is_on_the_fhc_trip_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user checks if the Hotel List button appears on the home page",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.FHCTripHotelList.user_checks_if_the_Hotel_List_button_appears_on_the_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Hotel List button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.FHCTripHotelList.user_clicks_on_Hotel_List_button()"
});
formatter.result({
  "error_message": "org.openqa.selenium.ElementNotInteractableException: element not interactable\n  (Session info: chrome\u003d85.0.4183.83)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027FALCON\u0027, ip: \u0027192.168.172.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002714.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 85.0.4183.83, chrome: {chromedriverVersion: 85.0.4183.83 (94abc2237ae0c..., userDataDir: C:\\Users\\husey\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:58003}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 985adaf1e426dc0a8d0d18a3ff0f8ed0\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:564)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat com.sun.proxy.$Proxy16.click(Unknown Source)\r\n\tat stepdefinitions.FHCTripHotelList.user_clicks_on_Hotel_List_button(FHCTripHotelList.java:31)\r\n\tat ✽.user clicks on Hotel List button(file:///C:/Users/husey/IdeaProjects/myfhctripproject/src/test/resources/features/fhctriphotellist.feature:6)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user gets the existing URL and checks it",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.FHCTripHotelList.user_gets_the_existing_URL_and_checks_it()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user checks on the page title",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.FHCTripHotelList.user_checks_on_the_page_title()"
});
formatter.result({
  "status": "skipped"
});
});