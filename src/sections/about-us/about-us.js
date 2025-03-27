displayContent = (index) => {
    content = document.getElementsByClassName("content");
    for (i = 0; i < content.length; i++) {
        content[i].style.display = "none";
    }
    content[index].style.display = "block";
}

displayContent(0);