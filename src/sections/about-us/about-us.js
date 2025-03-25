jQuery(function(){
    jQuery('.navbar').load('../../navbar/navbar.html');
});

navigationLinks = document.getElementsByClassName("nav") // Get all navigation links
navigationLinks[1].classList.add("active") // Add active for home