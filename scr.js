const urlstart = "https://youtube.com/";


//Upon click
chrome.tabs.onUpdated.addListener(function(t,e,a) {
    //On page load, inject the javascript
    fnc();
  });

async function fnc(){
  await chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
    url = tabs[0].url;
    if (url.slice(0,urlstart.length) != urlstart){
        // wrong url
        return;
    }
    chrome.tabs.executeScript(null, {
      file: "/inject.js"
    }, function() {
      // If you try and inject into an extensions page or the webstore/NTP you'll get an error
      if (chrome.runtime.lastError) {
        // textbox.innerText = 'There was an error injecting script : \n' + chrome.runtime.lastError.message;
      }
    });
});
}
