chrome.browserAction.onClicked.addListener(
  function (tab) {
    console.log(tab)
    console.log(JSON.stringify({url: tab.url, title: tab.title}))
    // fetch('http://127.0.0.1:8080', {
    //     method: 'PUT',
    //     mode: 'cors',
    //     body: JSON.stringify({url: tab.url, title: tab.title}),
    //     headers: {
    //         'Content-type': 'application/json; charset=UTF-8'
    //     }
    // });
    var request = new XMLHttpRequest();
    request.open("PUT", 'http://localhost:8080/');
    request.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
    // request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    request.send(JSON.stringify({url: tab.url, title: tab.title, folder:"foldername"}));
    // request.send("url="+tab.url+"&title="+tab.title);
  });
