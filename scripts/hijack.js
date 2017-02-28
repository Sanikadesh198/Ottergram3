//function to disable default click functionlity

function disableAllLinks() {
    'use strict';
    document.addEventListener('click', function(e) {
      //event.preventDefault();
        e.preventDefault();
        e.stopPropogation();
        return false;
    });
}

var links = [].slice.call(document.getElementByTagName('a'));
links.forEach(disableAllLinks);
