function searchElement(tab, value, callback) {
    const index = tab.indexOf(value);
    
    callback(index); 
}

module.exports = searchElement;