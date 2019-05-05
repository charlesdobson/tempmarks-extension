var ul = document.querySelector("ul");
var li = document.querySelector("li");
var a = document.querySelector("a");
var href = document.querySelector("href");

var tempmarks = {
    init : function() {
        var self = this;

        // Listener for "add-bookmark" button
        document.querySelector('#add-bookmark').onclick = function() {
            self.addBookmark.apply(self);
        };

        // Listener for "cleanup" button
        document.querySelector('#cleanup').onclick = function() {
            self.clearBookmarks.apply(self);
        };
    },

    // Add new bookmark to list
    addBookmark : function() {
        var li = document.createElement("li");
        var title = getTitle();
        li.appendChild(document.createTextNode(title));
        ul.appendChild(li);
    },

    // Clear all bookmarks from list
    clearBookmarks : function() {
        ul.innerHTML = "";
    }
};


// Call init() when window loads
window.onload = function() {
    tempmarks.init();
};


// Get current tab title
getTitle = function() {
    var title = "";
    chrome.tabs.query({'active': true, 'lastFocusedWindow': true},
                        function (tabs) {
        title = tabs[0].title;
    });
    return title;
};


// Get current tab URL
getURL = function() {
    var url = "";
    chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, 
                        function (tabs) {
        url = tabs[0].url;
    });
    return url;
};

