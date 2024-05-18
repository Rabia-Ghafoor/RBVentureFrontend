// This function is called when a menu item is clicked.
// The parameter 'contentId' is the id of the content div that should be displayed.
function changeContent(contentId) {
    // First, get all the children of the 'content' div.
    var contentElements = document.getElementById('content').children;

    // Loop through each child element.
    for (var i = 0; i < contentElements.length; i++) {
        // Hide each child element.
        contentElements[i].style.display = 'none';
    }

    // Finally, display the content div with the id that matches 'contentId'.
    document.getElementById(contentId).style.display = 'block';
}
