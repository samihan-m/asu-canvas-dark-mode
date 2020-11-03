//making the button usable on canvas pages
chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
      chrome.declarativeContent.onPageChanged.addRules([{
        conditions: [new chrome.declarativeContent.PageStateMatcher({
          pageUrl: {hostEquals: 'canvas.asu.edu'},
        })
        ],
            actions: [new chrome.declarativeContent.ShowPageAction()]
      }]);
    });