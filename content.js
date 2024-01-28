function clickAdSkipButton() {
  // Find the ad skip button by class
  const adSkipButton = document.querySelector('.ytp-ad-skip-button-modern');

  // Check if the button is found
  if (adSkipButton) {
    // Click the ad skip button
    adSkipButton.click();
  }
}

// Set an interval to check every 1000 milliseconds (1 second)
const intervalId = setInterval(clickAdSkipButton, 100);
