document.addEventListener('DOMContentLoaded', function () {
  // Function to change text content dynamically
  function changeText() {
    const textElement = document.getElementById('dynamicText');
    textElement.textContent = 'Text changed by JavaScript!';
  }

  // Function to modify CSS styles via JavaScript
  function changeStyle() {
    const button = document.getElementById('changeTextButton');
    button.style.color = 'red';
  }

  // Function to add or remove an element
  function toggleElement() {
    const toggleElement = document.getElementById('elementToToggle');
    if (toggleElement.style.display === 'block') {
      toggleElement.style.display = 'none';
    } else {
      toggleElement.style.display = 'block';
    }
  }

  // Attach event listeners
  document.getElementById('changeTextButton').addEventListener('click', changeText);
  document.getElementById('toggleElementButton').addEventListener('click', toggleElement);
});
