// List of ST and pictures should be in the same order
listOfST = ['Adrian Kosikowski', 'Alice Baggott', '()Aram Ameen', '()Ashleigh Glazzard', '()Chloe Burke', '()Dhruv Mistry', '()Divya Malhotra', 'Fariha Agha', 
    '()Hafsah Chawdry', '()Hailey Smith', '()Isobel Sibree-Dolan', '()Kai Prince', '()Keira Higgens', 'Nicholas Shangkala', '()Olivia Shaw', '()Preenal Asher',
    '()Rachael Howe', 'Rachel Cox', '()Rachel Cynthia Valavan Vetrigo', 'Raheel Ansari', '()Samhita Mukherjee', '()Sarah-Sonia Balan', '()Syeda Kazmi', 
    '()Szaffi Jarbath', '()Tabitha Glennon']
// Add all pictures for the top bar
pictures = ["../../../assets/images/team/only-faces/adrian-kosikowski.jpg",  "../../../assets/images/team/only-faces/alice-baggott.jpg", 
    "../../../assets/images/team/only-faces/aram-ameen.jpg", "../../../assets/images/team/only-faces/ashleigh-glazzard.jpg", 
    "../../../assets/images/team/only-faces/chloe-burke.jpg", "../../../assets/images/team/only-faces/dhruv-mistry.jpg", 
    "../../../assets/images/team/only-faces/divya-malhotra.jpg", "../../../assets/images/team/only-faces/fariha-agha.jpg", 
    "../../../assets/images/team/only-faces/hafsah-chawdry.jpg", "../../../assets/images/team/only-faces/hailey-smith.jpg", 
    "../../../assets/images/team/only-faces/isobel-sibree-dolan.jpg", "../../../assets/images/team/only-faces/kai-prince.jpg", 
    "../../../assets/images/team/only-faces/keira-higgens.jpg", "../../../assets/images/team/only-faces/nicholas-shangkala.jpg", 
    "../../../assets/images/team/only-faces/olivia-shaw.jpg", "../../../assets/images/team/only-faces/preenal-asher.jpg", 
    "../../../assets/images/team/only-faces/rachel-howe.jpg", "../../../assets/images/team/only-faces/rachel-cox.jpg", 
    "../../../assets/images/team/only-faces/rachel-cynthia-valavan-vertigo.jpg", "../../../assets/images/team/only-faces/raheel-ansari.jpg",\
    "../../../assets/images/team/only-faces/samhita-mukherjee.jpg", "../../../assets/images/team/only-faces/sarah-sonia-balan.jpg",
    "../../../assets/images/team/only-faces/syeda-kazmi.jpg", "../../../assets/images/team/only-faces/szaffi-jarbath.jpg",  
    "../../../assets/images/team/only-faces/tabitha-glennon.jpg"];
// Add all information for the team members
information = {
    'Adrian Kosikowski': {
        'name': 'Adrian Kosikowski',
        'img': '../../../assets/images/team/adrian-kosikowski.webp',
        'email': 'adrian.kosikowski@student.manchester.ac.uk',
        'degree': 'BEng Mechatronics Engineering',
        'description': 'Hi! I\'m Adrian, a first year student studying Mechatronic Engineering. Whilst I still get lost trying to find my way around the library, I enjoy helping out with all the academic workshops and events that we provide. In my free time I enjoy baking as well as taking apart random devices to figure out how they work.'
    }, 
    'Alice Baggott': {
        'name': 'Alice Baggott',
        'img': '../../../assets/images/team/alice-baggott.webp',
        'email': 'alice.baggott@student.manchester.ac.uk',
        'degree': 'BA Social Anthropology and Sociology',
        'description': 'Hi there! I\'m Alice, a 3rd year BA Social Anthropology and Sociology student. I have been working as part of the team for 6 months now and really love it! Outside of my degree, I love to explore Manchester, start new craft projects and read :)'
    },
    '()Aram Ameen': {
        'name': 'Fariha Agha',
        'img': '../../../assets/images/team/fariha-agha.webp',
        'email': 'fariha.agha@student.manchester.ac.uk',
        'degree': 'BSc Public Health',
        'description': 'Hi! I\'m Fariha, and I\'m in my third year of Public Health. I\'ve been on the student team for over 20 months now, and I\'ve really enjoyed getting involved with student voice work and widening participation workshops! In my (not so) free time I volunteer for a zoo and I\'m a student ambassador for a mental health charity — I\'m also a student partner intern for assessment and policy (within university). Outside of these roles you\'ll find me learning languages, watching dramas or eating tangerines 🥹'
    },
    '()Ashleigh Glazzard': {
        'name': 'Fariha Agha',
        'img': '../../../assets/images/team/fariha-agha.webp',
        'email': 'fariha.agha@student.manchester.ac.uk',
        'degree': 'BSc Public Health',
        'description': 'Hi! I\'m Fariha, and I\'m in my third year of Public Health. I\'ve been on the student team for over 20 months now, and I\'ve really enjoyed getting involved with student voice work and widening participation workshops! In my (not so) free time I volunteer for a zoo and I\'m a student ambassador for a mental health charity — I\'m also a student partner intern for assessment and policy (within university). Outside of these roles you\'ll find me learning languages, watching dramas or eating tangerines 🥹'
    },
    '()Chloe Burke': {
        'name': 'Fariha Agha',
        'img': '../../../assets/images/team/fariha-agha.webp',
        'email': 'fariha.agha@student.manchester.ac.uk',
        'degree': 'BSc Public Health',
        'description': 'Hi! I\'m Fariha, and I\'m in my third year of Public Health. I\'ve been on the student team for over 20 months now, and I\'ve really enjoyed getting involved with student voice work and widening participation workshops! In my (not so) free time I volunteer for a zoo and I\'m a student ambassador for a mental health charity — I\'m also a student partner intern for assessment and policy (within university). Outside of these roles you\'ll find me learning languages, watching dramas or eating tangerines 🥹'
    },
    '()Dhruv Mistry': {
        'name': 'Fariha Agha',
        'img': '../../../assets/images/team/fariha-agha.webp',
        'email': 'fariha.agha@student.manchester.ac.uk',
        'degree': 'BSc Public Health',
        'description': 'Hi! I\'m Fariha, and I\'m in my third year of Public Health. I\'ve been on the student team for over 20 months now, and I\'ve really enjoyed getting involved with student voice work and widening participation workshops! In my (not so) free time I volunteer for a zoo and I\'m a student ambassador for a mental health charity — I\'m also a student partner intern for assessment and policy (within university). Outside of these roles you\'ll find me learning languages, watching dramas or eating tangerines 🥹'
    },
    '()Divya Malhotra': {
        'name': 'Fariha Agha',
        'img': '../../../assets/images/team/fariha-agha.webp',
        'email': 'fariha.agha@student.manchester.ac.uk',
        'degree': 'BSc Public Health',
        'description': 'Hi! I\'m Fariha, and I\'m in my third year of Public Health. I\'ve been on the student team for over 20 months now, and I\'ve really enjoyed getting involved with student voice work and widening participation workshops! In my (not so) free time I volunteer for a zoo and I\'m a student ambassador for a mental health charity — I\'m also a student partner intern for assessment and policy (within university). Outside of these roles you\'ll find me learning languages, watching dramas or eating tangerines 🥹'
    },
    'Fariha Agha': {
        'name': 'Fariha Agha',
        'img': '../../../assets/images/team/fariha-agha.webp',
        'email': 'fariha.agha@student.manchester.ac.uk',
        'degree': 'BSc Public Health',
        'description': 'Hi! I\'m Fariha, and I\'m in my third year of Public Health. I\'ve been on the student team for over 20 months now, and I\'ve really enjoyed getting involved with student voice work and widening participation workshops! In my (not so) free time I volunteer for a zoo and I\'m a student ambassador for a mental health charity — I\'m also a student partner intern for assessment and policy (within university). Outside of these roles you\'ll find me learning languages, watching dramas or eating tangerines 🥹'
    },
    '()Hafsah Chawdry': {
        'name': 'Fariha Agha',
        'img': '../../../assets/images/team/fariha-agha.webp',
        'email': 'fariha.agha@student.manchester.ac.uk',
        'degree': 'BSc Public Health',
        'description': 'Hi! I\'m Fariha, and I\'m in my third year of Public Health. I\'ve been on the student team for over 20 months now, and I\'ve really enjoyed getting involved with student voice work and widening participation workshops! In my (not so) free time I volunteer for a zoo and I\'m a student ambassador for a mental health charity — I\'m also a student partner intern for assessment and policy (within university). Outside of these roles you\'ll find me learning languages, watching dramas or eating tangerines 🥹'
    },
    '()Hailey Smith': {
        'name': 'Fariha Agha',
        'img': '../../../assets/images/team/fariha-agha.webp',
        'email': 'fariha.agha@student.manchester.ac.uk',
        'degree': 'BSc Public Health',
        'description': 'Hi! I\'m Fariha, and I\'m in my third year of Public Health. I\'ve been on the student team for over 20 months now, and I\'ve really enjoyed getting involved with student voice work and widening participation workshops! In my (not so) free time I volunteer for a zoo and I\'m a student ambassador for a mental health charity — I\'m also a student partner intern for assessment and policy (within university). Outside of these roles you\'ll find me learning languages, watching dramas or eating tangerines 🥹'
    },
    '()Isobel Sibree-Dolan': {
        'name': 'Fariha Agha',
        'img': '../../../assets/images/team/fariha-agha.webp',
        'email': 'fariha.agha@student.manchester.ac.uk',
        'degree': 'BSc Public Health',
        'description': 'Hi! I\'m Fariha, and I\'m in my third year of Public Health. I\'ve been on the student team for over 20 months now, and I\'ve really enjoyed getting involved with student voice work and widening participation workshops! In my (not so) free time I volunteer for a zoo and I\'m a student ambassador for a mental health charity — I\'m also a student partner intern for assessment and policy (within university). Outside of these roles you\'ll find me learning languages, watching dramas or eating tangerines 🥹'
    },
    '()Kai Prince': {
        'name': 'Fariha Agha',
        'img': '../../../assets/images/team/fariha-agha.webp',
        'email': 'fariha.agha@student.manchester.ac.uk',
        'degree': 'BSc Public Health',
        'description': 'Hi! I\'m Fariha, and I\'m in my third year of Public Health. I\'ve been on the student team for over 20 months now, and I\'ve really enjoyed getting involved with student voice work and widening participation workshops! In my (not so) free time I volunteer for a zoo and I\'m a student ambassador for a mental health charity — I\'m also a student partner intern for assessment and policy (within university). Outside of these roles you\'ll find me learning languages, watching dramas or eating tangerines 🥹'
    },
    '(degree)Keira Higgens': {
        'name': 'Keira Higgens',
        'img': '../../../assets/images/team/keira-higgens.webp',
        'email': 'keira.higgens@student.manchester.ac.uk',
        'degree': '-unknown-',
        'description': 'Hi, I\'m Keira, a 1st year Undergraduate student studying English Literature! I have been part of the Student Team for two months now and I am really enjoying the work we do to support students and the Widening Participation programs we anre involved in. When I\'m not juggling work and my studies, you\'ll find me going to concerts or meeting up with my friends to try new bars and restaurants in Manchester. I love listening to music and reading fiction as well as watching TV shows and movies!'    
    },
    'Nicholas Shangkala': {
        'name': 'Nicholas Shangkala',
        'img': '../../../assets/images/team/nicholas-shangkala.webp',
        'email': 'nicholas.shangkala@student.manchester.ac.uk',
        'degree': 'course name',
        'description': 'Hey everyone!\nI\'m Nicholas, a second-year ITMB student from Indonesia. I\'ve been a part of the Library Student Team for three months now, and it has been an incredible experience from day one. Working with such a diverse team has allowed me to learn so much from my colleagues, things I had never learnt before. Engaging with people from different backgrounds, degrees, and personalities has been truly interesting. I especially enjoy meeting new people during our daily workshops and events. \nOutside of my role in the library, I have a few hobbies that keep me busy. I love listening to music, especially K-Pop, and I enjoy trying out new recipes (since I\'m an international student so I need to survive in the UK by myself 😊). I\'m also passionate about traveling and discovering new cultures and cuisines (although i have not done much traveling since coming to the UK, as I usually go back home only during the summer).\nIf you ever need any help, feel free to reach out, I\'m always happy to chat!'
    },
    '()Olivia Shaw': {
        'name': 'Fariha Agha',
        'img': '../../../assets/images/team/fariha-agha.webp',
        'email': 'fariha.agha@student.manchester.ac.uk',
        'degree': 'BSc Public Health',
        'description': 'Hi! I\'m Fariha, and I\'m in my third year of Public Health. I\'ve been on the student team for over 20 months now, and I\'ve really enjoyed getting involved with student voice work and widening participation workshops! In my (not so) free time I volunteer for a zoo and I\'m a student ambassador for a mental health charity — I\'m also a student partner intern for assessment and policy (within university). Outside of these roles you\'ll find me learning languages, watching dramas or eating tangerines 🥹'
    },
    '()Preenal Asher': {
        'name': 'Fariha Agha',
        'img': '../../../assets/images/team/fariha-agha.webp',
        'email': 'fariha.agha@student.manchester.ac.uk',
        'degree': 'BSc Public Health',
        'description': 'Hi! I\'m Fariha, and I\'m in my third year of Public Health. I\'ve been on the student team for over 20 months now, and I\'ve really enjoyed getting involved with student voice work and widening participation workshops! In my (not so) free time I volunteer for a zoo and I\'m a student ambassador for a mental health charity — I\'m also a student partner intern for assessment and policy (within university). Outside of these roles you\'ll find me learning languages, watching dramas or eating tangerines 🥹'
    },
    '()Rachael Howe': {
        'name': 'Fariha Agha',
        'img': '../../../assets/images/team/fariha-agha.webp',
        'email': 'fariha.agha@student.manchester.ac.uk',
        'degree': 'BSc Public Health',
        'description': 'Hi! I\'m Fariha, and I\'m in my third year of Public Health. I\'ve been on the student team for over 20 months now, and I\'ve really enjoyed getting involved with student voice work and widening participation workshops! In my (not so) free time I volunteer for a zoo and I\'m a student ambassador for a mental health charity — I\'m also a student partner intern for assessment and policy (within university). Outside of these roles you\'ll find me learning languages, watching dramas or eating tangerines 🥹'
    },
    'Rachel Cox': {
        'name': 'Rachel Cox',
        'img': '../../../assets/images/team/rachel-cox.webp',
        'email': 'rachel.cox-2@manchester.ac.uk',
        'degree': 'PhD Fashion Management and Marketing',
        'description': 'Hi everyone! I\'m in my second year of my PhD in Fashion Management and Marketing. My topic focus explores the impact of information technology on garment workers. I previously graduated with a PGCert in Sociology in 2021 and a BSc in Fashion Buying and Merchandising from UoM in 2019. I\'m originally from Cheshire but have visited Manchester since I was 11. I love music, reading, environmental and sustainability work, knitting, films, cooking and Yoga (qualified to teach too). Oh, and I love dachshunds too! I\'m a member of the UoM Pole and Burlesque society which has been one of the most empowering experiences during my time at the University. Really looking forward to getting to know and work with you all and happy to answer your questions! :)'
    },
    '()Rachel Cynthia Valavan Vetrigo': {
        'name': 'Fariha Agha',
        'img': '../../../assets/images/team/fariha-agha.webp',
        'email': 'fariha.agha@student.manchester.ac.uk',
        'degree': 'BSc Public Health',
        'description': 'Hi! I\'m Fariha, and I\'m in my third year of Public Health. I\'ve been on the student team for over 20 months now, and I\'ve really enjoyed getting involved with student voice work and widening participation workshops! In my (not so) free time I volunteer for a zoo and I\'m a student ambassador for a mental health charity — I\'m also a student partner intern for assessment and policy (within university). Outside of these roles you\'ll find me learning languages, watching dramas or eating tangerines 🥹'
    },
    'Raheel Ansari': {
        'name': 'Raheel Ansari',
        'img': '../../../assets/images/team/raheel-ansari.webp',
        'email': 'raheel.ansari@student.manchester.ac.uk',
        'degree': 'BEng Mechanical Engineering',
        'description': 'Hey! I\'m Raheel, a 2nd-year Mechanical Engineering student. I spent the first 18 years of my life in Pakistan before taking the leap to pursue higher education in the UK. When I\'m not deep into engineering work, you\'ll find me jamming on my guitar. Earlier last year, I went all-out adventurer and took an 18-day solo trip — definitely one of my most epic experiences. I also go through intense reading phases where I finish a book in a week, only to get stuck on the same page of another for a month :)'
    },
    '()Samhita Mukherjee': {
        'name': 'Fariha Agha',
        'img': '../../../assets/images/team/fariha-agha.webp',
        'email': 'fariha.agha@student.manchester.ac.uk',
        'degree': 'BSc Public Health',
        'description': 'Hi! I\'m Fariha, and I\'m in my third year of Public Health. I\'ve been on the student team for over 20 months now, and I\'ve really enjoyed getting involved with student voice work and widening participation workshops! In my (not so) free time I volunteer for a zoo and I\'m a student ambassador for a mental health charity — I\'m also a student partner intern for assessment and policy (within university). Outside of these roles you\'ll find me learning languages, watching dramas or eating tangerines 🥹'
    },
    '()Sarah-Sonia Balan': {
        'name': 'Fariha Agha',
        'img': '../../../assets/images/team/fariha-agha.webp',
        'email': 'fariha.agha@student.manchester.ac.uk',
        'degree': 'BSc Public Health',
        'description': 'Hi! I\'m Fariha, and I\'m in my third year of Public Health. I\'ve been on the student team for over 20 months now, and I\'ve really enjoyed getting involved with student voice work and widening participation workshops! In my (not so) free time I volunteer for a zoo and I\'m a student ambassador for a mental health charity — I\'m also a student partner intern for assessment and policy (within university). Outside of these roles you\'ll find me learning languages, watching dramas or eating tangerines 🥹'
    },
    '()Syeda Kazmi': {
        'name': 'Fariha Agha',
        'img': '../../../assets/images/team/fariha-agha.webp',
        'email': 'fariha.agha@student.manchester.ac.uk',
        'degree': 'BSc Public Health',
        'description': 'Hi! I\'m Fariha, and I\'m in my third year of Public Health. I\'ve been on the student team for over 20 months now, and I\'ve really enjoyed getting involved with student voice work and widening participation workshops! In my (not so) free time I volunteer for a zoo and I\'m a student ambassador for a mental health charity — I\'m also a student partner intern for assessment and policy (within university). Outside of these roles you\'ll find me learning languages, watching dramas or eating tangerines 🥹'
    },
    '()Szaffi Jarbath': {
        'name': 'Fariha Agha',
        'img': '../../../assets/images/team/fariha-agha.webp',
        'email': 'fariha.agha@student.manchester.ac.uk',
        'degree': 'BSc Public Health',
        'description': 'Hi! I\'m Fariha, and I\'m in my third year of Public Health. I\'ve been on the student team for over 20 months now, and I\'ve really enjoyed getting involved with student voice work and widening participation workshops! In my (not so) free time I volunteer for a zoo and I\'m a student ambassador for a mental health charity — I\'m also a student partner intern for assessment and policy (within university). Outside of these roles you\'ll find me learning languages, watching dramas or eating tangerines 🥹'
    },
    '()Tabitha Glennon': {
        'name': 'Fariha Agha',
        'img': '../../../assets/images/team/fariha-agha.webp',
        'email': 'fariha.agha@student.manchester.ac.uk',
        'degree': 'BSc Public Health',
        'description': 'Hi! I\'m Fariha, and I\'m in my third year of Public Health. I\'ve been on the student team for over 20 months now, and I\'ve really enjoyed getting involved with student voice work and widening participation workshops! In my (not so) free time I volunteer for a zoo and I\'m a student ambassador for a mental health charity — I\'m also a student partner intern for assessment and policy (within university). Outside of these roles you\'ll find me learning languages, watching dramas or eating tangerines 🥹'
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



