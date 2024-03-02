// index.js
(function() {
    function addingEventListener() {
      const input = document.getElementById('button');
  
      function clickAlert() {
        alert('I was clicked!');
      }
  
      input.addEventListener('click', clickAlert);
    }
  
    if (typeof module !== 'undefined' && module.exports) {
      module.exports = addingEventListener; // Export the function for CommonJS environments
    } else {
      window.addingEventListener = addingEventListener; // Expose the function globally for browsers
      addingEventListener(); // Call the function immediately in a browser environment
    }
  
  })();
  
