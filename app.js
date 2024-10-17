document.getElementById('newsForm').addEventListener('submit', function (e) {
  e.preventDefault();
  
  // Fetch the input value
  let newsContent = document.getElementById('newsInput').value.trim();
  
  // Clear previous result
  let resultDiv = document.getElementById('result');
  let resultTitle = document.getElementById('resultTitle');
  let resultMessage = document.getElementById('resultMessage');
  
  // Mock result logic (this should be replaced with actual API calls)
  if (newsContent.length === 0) {
      resultDiv.style.display = 'none';
      return;
  }

  // Randomly decide if the news is fake or real for demonstration
  let isFake = Math.random() > 0.5; // Randomly decides if news is fake

  if (isFake) {
      resultDiv.className = 'alert alert-danger'; // Add danger class for fake news
      resultTitle.innerText = 'Fake News Detected!';
      resultMessage.innerText = 'This news seems to be fake. Please cross-check the facts.';
  } else {
      resultDiv.className = 'alert alert-success'; // Add success class for real news
      resultTitle.innerText = 'Real News Detected!';
      resultMessage.innerText = 'This news seems to be real. No fake content detected.';
  }

  resultDiv.style.display = 'block'; // Show the result
});
