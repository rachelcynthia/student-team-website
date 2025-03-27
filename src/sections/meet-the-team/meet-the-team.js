// Lisy of ST nd pictures should be in the same order
listOfST = ['Rachel Cox', 'Fariha Agha']
// Add all pictures for the top bar
pictures = ["../../../assets/images/team/only-faces/rachel-cox.jpg", "../../../assets/images/team/only-faces/fariha-agha.jpg"];
// Add all information for the team members
information = {
    'Rachel Cox': {
        'name': 'Rachel Cox',
        'img': '../../../assets/images/team/rachel-cox.webp',
        'email': 'rachel.cox-2@manchester.ac.uk',
        'degree': 'PhD Fashion Management and Marketing',
        'description': 'Hi everyone! I\'m in my second year of my PhD in Fashion Management and Marketing. My topic focus explores the impact of information technology on garment workers. I previously graduated with a PGCert in Sociology in 2021 and a BSc in Fashion Buying and Merchandising from UoM in 2019. I\'m originally from Cheshire but have visited Manchester since I was 11. I love music, reading, environmental and sustainability work, knitting, films, cooking and Yoga (qualified to teach too). Oh, and I love dachshunds too! I\'m a member of the UoM Pole and Burlesque society which has been one of the most empowering experiences during my time at the University. Really looking forward to getting to know and work with you all and happy to answer your questions! :)'
    },
    'Fariha Agha': {
        'name': 'Fariha Agha',
        'img': '../../../assets/images/team/fariha-agha.webp',
        'email': 'fariha.agha@student.manchester.ac.uk',
        'degree': 'BSc Public Health',
        'description': 'Hi! I\'m Fariha, and I\'m in my second year of Public Health. I\'ve been on the student team for over 8 months now, and I\'ve really enjoyed getting involved with student voice work and widening participation workshops! In my (not so) free time I volunteer for a zoo and I\'m a student ambassador for a mental health charity — I\'m also a student partner intern for assessment and policy (within university). Outside of these roles you\'ll find me learning languages, watching dramas or eating tangerines 🥹'
    }
}


pictures.forEach((image,index) => {
    // Create image wrapper element
    var div = document.createElement("div");
    div.className = "image-wrapper";
    div.onclick = () => showStudentTeam(getSTMemberIndex(listOfST[index]));
    div.innerHTML = `
    <img class="profile-img" src=${image} alt="profile-pic">
    <div class="text">${listOfST[index]}</div>
    `;
    document.getElementById("profiles").appendChild(div);
})

getSTMemberIndex= (name) => {
    return listOfST.indexOf(name);
}

showStudentTeam = (index) => {
    content = document.getElementsByClassName("info");
    console.log(content)
    for (i = 0; i < content.length; i++) {
        content[i].style.display = "none";
    }
    content[index].style.display = "flex";
}

// Add all information for the team members
listOfST.forEach(StMember => {
    info = information[StMember]

    // Create div element
    var div = document.createElement("div");
    div.className = "info";
    div.innerHTML = `
    <div class="student-info-wrapper">
    <img src=${info['img']} alt="profile-pic">
    <div>
    <h1>${info['name']}</h1>
    <h2>${info['degree']}</h2>
    <h3>${info['email']}</h3>
    <p>${info['description']}</p>
    </div>
    </div>`;
    document.getElementById("information").appendChild(div);
});

showStudentTeam(0);



