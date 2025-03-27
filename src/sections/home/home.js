// Carousel
images = ["../../../assets/images/1.jpeg", "../../../assets/images/2.png", "../../../assets/images/3.png"];
contents = ["Founded in 2014 starting off as a small group of students helping stack books", 
    "Recognised by the University of Manchester with the ITL Teaching Excellence Award (2023)",
    "Recognised across the whole sector with the Collaborative Award for Teaching Excellence (CATE) award"  
]
images.forEach((image, index) => {
    // Create image element
    var img = document.createElement("img");
    img.src = image;
    img.className = "images";
    document.getElementById("slideshow").appendChild(img);

    // Create div element
    var div = document.createElement("div");
    div.className = "content";
    div.innerHTML = contents[index];
    document.getElementById("contents").appendChild(div);

    // Create dot element
    var dot = document.createElement("div");
    dot.className = "dot";
    dot.onclick = () => currentSlide(images.indexOf(image) + 1);
    document.getElementById("dots").appendChild(dot);
});



let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// Function to display the current image and information
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("images");
    var contents = document.getElementsByClassName("content");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        contents[i].style.display = "none";
        dots[i].classList.remove("active");
    }
    slides[slideIndex - 1].style.display = "block";
    contents[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.add("active");
}