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
function getTodayDateTimeString() {
  // Create a new Date object with the current date and time
  let today = new Date();
  // Get the year, month, day, hour, minute and second from the Date object
  let year = today.getFullYear();
  let month = today.getMonth() + 1; // Months are zero-based
  let day = today.getDate();
  let hour = today.getHours();
  let minute = today.getMinutes();
  let second = today.getSeconds();
  // Pad the month, day, hour, minute and second with leading zeros if needed
  month = month < 10 ? "0" + month : month;
  day = day < 10 ? "0" + day : day;
  hour = hour < 10 ? "0" + hour : hour;
  minute = minute < 10 ? "0" + minute : minute;
  second = second < 10 ? "0" + second : second;
  // Return the date and time as a string in the format yyyy-mm-dd_hh-mm-ss
  return year + "-" + month + "-" + day + "_" + hour + "-" + minute + "-" + second;
  }

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
