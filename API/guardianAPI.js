function requestToGuardianApi(){
  var url = "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?show-fields=body,thumbnail&api-key=test"
  var xhr = new XMLHttpRequest();
  xhr.onload = function () {
    if(this.readyState == 4 && this.status == 200) {
      var response = JSON.parse(this.responseText);
      console.log(response);
    }
  };
  xhr.open("GET", url, true);
  xhr.send();
}


// Call the API
requestToGuardianApi();
