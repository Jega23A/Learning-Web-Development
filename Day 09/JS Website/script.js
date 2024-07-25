// Create the HTML elements
let body = document.body;
let h1 = document.createElement('h1');
let main = document.createElement('main');
let button = document.createElement('button');
let footer = document.createElement('footer');

// Set the attributes
h1.setAttribute('style', 'background-color: lightblue; padding: 20px; text-align: center;');
main.setAttribute('style', 'padding: 20px;');
button.setAttribute('style', 'background-color: lightgreen; padding: 10px; border: none; border-radius: 5px; cursor: pointer; buttononclick');
footer.setAttribute('style', 'background-color: lightgray; padding: 10px; text-align: center; clear: both;');

// Add text content
h1.textContent = 'My Website';
main.textContent = 'This is my website.';
button.textContent = 'Click me!';
footer.textContent = 'The End';

// Append the elements
body.appendChild(h1);
body.appendChild(main);
body.appendChild(button);
body.appendChild(footer);

// Add an event listener to the button to display an alert message
button.addEventListener('click', function() {
  alert('Hello, World!');
});