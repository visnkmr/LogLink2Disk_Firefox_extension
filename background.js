import { getTodayDateTimeString } from './gettodaytime';
console.log("hello");
chrome.browserAction.onClicked.addListener(() => {
    chrome.tabs.query({ currentWindow: true }, function (tabs) {
        for (let tab of tabs) {
            fetch("http://127.0.0.1:8080", {
                method: 'PUT',
                body: JSON.stringify({ url: tab.url, title: tab.title, folder: getTodayDateTimeString() }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8'
                }
            })
                .then(response => {
                response.json();
            })
                .then(data => {
                console.log(data);
            })
                .catch(error => {
                console.error(error);
            });
        }
    });
});
