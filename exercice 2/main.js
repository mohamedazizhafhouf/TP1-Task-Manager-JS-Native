var { tab, element } = require('./data.js');
var searchElement = require('./searchElement.js');

var displayResult = (pos) => {
    if (pos !== -1) {
        console.log(`Success: Element found at position ${pos}`);
    } else {
        console.log("Error: Element not found.");
    }
};

searchElement(tab, element, displayResult);