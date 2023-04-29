import {getTodayDateTimeString} from './gettodaytime';


console.log("hello")
// var s=""
// Get all tabs in the current window
chrome.browserAction.onClicked.addListener(()=>{
chrome.tabs.query({currentWindow: true}, function(tabs) {
  // Loop over the tabs array
  
  for (let tab of tabs) {
    
      fetch("http://127.0.0.1:8080", {
          method: 'PUT',
          body: JSON.stringify({url: tab.url, title: tab.title, folder:getTodayDateTimeString()}),
          headers: {
          'Content-type': 'application/json; charset=UTF-8'
          }
      })
      .then(response => {
          // saved.value+="\nsaved:\t"+tab.title.substring(0,30);
          response.json()
        }
      )
      .then(data => {
          // Do something with the response data
          console.log(data);
      })
      .catch(error => {
          // Handle any errors
          console.error(error);
      });
    // Append the tab URL and title to the textarea value
    // s += "URL: " + tab.url + "\nTitle: " + tab.title + "\n\n";
  }
});
});

//   function (tab) {
//     console.log(tab)
//     console.log(JSON.stringify({url: tab.url, title: tab.title}))
//     // fetch('http://127.0.0.1:8080', {
//     //     method: 'PUT',
//     //     mode: 'cors',
//     //     body: JSON.stringify({url: tab.url, title: tab.title}),
//     //     headers: {
//     //         'Content-type': 'application/json; charset=UTF-8'
//     //     }
//     // });
//     // console.log
//     // var request = new XMLHttpRequest();
//     // request.open("PUT", 'http://localhost:8080/');
//     // request.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
//     // // request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
//     // request.send(JSON.stringify({url: tab.url, title: tab.title, folder:"foldername"}));
//     // request.send("url="+tab.url+"&title="+tab.title);
//   });
