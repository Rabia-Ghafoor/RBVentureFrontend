
function changeContent(contentId) {

    var contentElements = document.getElementById('content').children;

    
    for (var i = 0; i < contentElements.length; i++) {

        contentElements[i].style.display = 'none';
    }

  
    document.getElementById(contentId).style.display = 'block';
}
