chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  if (changeInfo.status === 'complete' && tab.url.includes('youtube.com')) {
    chrome.tabs.executeScript(tabId, { file: 'content.js' });
  }
});
