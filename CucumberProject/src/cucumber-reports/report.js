$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/sekeleton/registerwebdemo.feature");
formatter.feature({
  "name": "DemoWebShop feature",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Register in DemoWebShop",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user enters the url of DemoWebShp",
  "keyword": "Given "
});
formatter.match({
  "location": "RegistrationDemo.user_enters_the_url_of_DemoWebShp()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters the data for registration",
  "keyword": "When "
});
formatter.match({
  "location": "RegistrationDemo.user_enters_the_data_for_registration()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is registered successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "RegistrationDemo.user_is_registered_successfully()"
});
formatter.result({
  "status": "passed"
});
});