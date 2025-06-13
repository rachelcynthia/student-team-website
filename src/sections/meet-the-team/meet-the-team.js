// List of ST and pictures should be in the same order
listOfST = ['Adrian Kosikowski', 'Alice Baggott', 'Aram Ameen', 'Ashleigh Glazzard', 'Chloe Burke', 'Dhruv Mistry', 'Divya Malhotra', 'Fariha Agha', 
    'Hafsah Chawdry', 'Hailey Smith', 'Isobel Sibree-Dolan', 'Kai Prince', 'Keira Higgens', 'Nicholas Shangkala', 'Olivia Shaw', 'Preenal Asher',
    'Rachael Howe', 'Rachel Cox', 'Rachel Cynthia Valavan Vetrigo', 'Raheel Ansari', 'Samhita Mukherjee', 'Sarah-Sonia Balan', '(deg)Syeda Kazmi', 
    'Szaffi Jarbath', 'Tabitha Glennon']
// Add all pictures for the top bar
pictures = ["../../../assets/images/team/only-faces/adrian-kosikowski.jpg",  "../../../assets/images/team/only-faces/alice-baggott.jpg", 
    "../../../assets/images/team/only-faces/aram-ameen.jpg", "../../../assets/images/team/only-faces/ashleigh-glazzard.jpg", 
    "../../../assets/images/team/only-faces/chloe-burke.jpg", "../../../assets/images/team/only-faces/dhruv-mistry.jpg", 
    "../../../assets/images/team/only-faces/divya-malhotra.jpg", "../../../assets/images/team/only-faces/fariha-agha.jpg", 
    "../../../assets/images/team/only-faces/hafsah-chawdry.jpg", "../../../assets/images/team/only-faces/hailey-smith.jpg", 
    "../../../assets/images/team/only-faces/isobel-sibree-dolan.jpg", "../../../assets/images/team/only-faces/kai-prince.jpg", 
    "../../../assets/images/team/only-faces/keira-higgens.jpg", "../../../assets/images/team/only-faces/nicholas-shangkala.jpg", 
    "../../../assets/images/team/only-faces/olivia-shaw.jpg", "../../../assets/images/team/only-faces/preenal-asher.jpg", 
    "../../../assets/images/team/only-faces/rachael-howe.jpg", "../../../assets/images/team/only-faces/rachel-cox.jpg", 
    "../../../assets/images/team/only-faces/rachel-cynthia-valavan-vetrigo.jpg", "../../../assets/images/team/only-faces/raheel-ansari.jpg",
    "../../../assets/images/team/only-faces/samhita-mukherjee.jpg", "../../../assets/images/team/only-faces/sonia-balan.jpg",
    "../../../assets/images/team/only-faces/syeda-kazmi.jpg", "../../../assets/images/team/only-faces/szaffi-jarbath.jpg",  
    "../../../assets/images/team/only-faces/tabby-glennon.jpg"];
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
    'Aram Ameen': {
        'name': 'Aram Ameen',
        'img': '../../../assets/images/team/aram-ameen.webp',
        'email': 'aram.ameen@student.manchester.ac.uk',
        'degree': 'BEng Chemical Engineering',
        'description': 'Hey, my name is Aram. I am a second-year Chemical Engineering student who joined the student team in December. I am quite passionate about social mobility and responsibility, and I am involved in different societies, such as the 93% Club! As someone who was raised in Manchester, I find it quite fun to explore the city with students who have moved here for university as they bring a new perspective and life to town and to areas that I had overlooked before. I love chatting to people and if I\'m not in lectures or at work, you\'ll probably find me in Nancy Rothwell - the undisputed best building on campus.'
    },
    'Ashleigh Glazzard': {
        'name': 'Ashleigh Glazzard',
        'img': '../../../assets/images/team/ashleigh-glazzard.webp',
        'email': 'ashleigh.glazzard@student.manchester.ac.uk',
        'degree': 'BSc Speech and Language Therapy',
        'description': 'Hi! I\'m Ashleigh, I\'m from South Yorkshire but I first came to Manchester in 2016 to study English and French. Fast forward a few years and I now have a little girl to look after, and am in my 2nd year of a 2nd degree, in Speech and Language Therapy. I love my degree and hope to go on to work with adults with acquired neurological conditions. I started working at the library at the end of 2023 and enjoy having the freedom to take on things I\'m interested in -- I am currently working towards a child-friendly study space for other student parents at the university. \nIn my free time (what little of it I get), I like to read, read, and read! I read 75 books last year and I\'m aiming for 100+ this year, I love romance and fantasy (romantasy ofc), as well as lit fics and the occasional cannibalism-style horror. if you ever speak to me, bring up books!!'
    },
    'Chloe Burke': {
        'name': 'Chloe Burke',
        'img': '../../../assets/images/team/chloe-burke.webp',
        'email': 'chloe.burke@postgrad.manchester.ac.uk',
        'degree': 'MA Art Gallery and Museum Studies',
        'description': 'Hello! My name is Chloe and I\'m apart-time Masters student in the Institute for Cultural Practices. I\'m also a course rep for AGMS and an object-handling volunteer at Manchester Museum\'s Collections Reimagined Gallery. Outside of work, I love all things museums (obviously), films, cocktail-making, makeup and video games.'
    },
    'Dhruv Mistry': {
        'name': 'Dhruv Mistry',
        'img': '../../../assets/images/team/dhruv-mistry.webp',
        'email': 'dhruv.mistry@student.manchester.ac.uk',
        'degree': 'MMath & Phys(Hons) Maths & Phys',
        'description': 'Hi, I\'m Dhruv. I am in my final year of my course exploring interesting problems in non-linear dynamics from granular to microfluidics. In my free time I spend time reading books, doing photography (nature and astro) and random DIY projects (etching glass and engraving stones). I have three cats, Tipu (British short hair), Chiku (European tabby) and Sunday (a black cat). If you have any questions about research, please do reach out, I\'m happy to answer!'
    },
    'Divya Malhotra': {
        'name': 'Divya Malhotra',
        'img': '../../../assets/images/team/divya-malhotra.webp',
        'email': 'divya.malhotra@student.manchester.ac.uk',
        'degree': 'MEnvSci Environmental Science',
        'description': 'Hi I\'m Durian, an environmental science student with a specialization in ecology, evolution and conservation biology. Along with library student team, I\'m a student partner assessment framework intern and student ambassador for my course. In my free time (if I\'ve got any), I love writing, cooking and frolicking in nature.'
    },
    'Fariha Agha': {
        'name': 'Fariha Agha',
        'img': '../../../assets/images/team/fariha-agha.webp',
        'email': 'fariha.agha@student.manchester.ac.uk',
        'degree': 'BSc Public Health',
        'description': 'Hi! I\'m Fariha, and I\'m in my third year of Public Health. I\'ve been on the student team for over 20 months now, and I\'ve really enjoyed getting involved with student voice work and widening participation workshops! In my (not so) free time I volunteer for a zoo and I\'m a student ambassador for a mental health charity — I\'m also a student partner intern for assessment and policy (within university). Outside of these roles you\'ll find me learning languages, watching dramas or eating tangerines 🥹'
    },
    'Hafsah Chawdry': {
        'name': 'Hafsah Chawdry',
        'img': '../../../assets/images/team/hafsah-chawdry.webp',
        'email': 'hafsah.chawdry@student.manchester.ac.uk',
        'degree': 'MSci Optometry',
        'description': 'Hii, my name is Hafsah! I am an optometry student and I\'m wanting to one day become an optometrist in my own practice. I love the practice aspect of working hands on and interacting with people from various backgrounds. I know a handful of languages such as Urdu, Punjabi and Hindi. I also LOVE to travel!! I have explored Scotland, Cornwall, Wales, Oman, Dubai, Turkey, Pakistan, Qatar, Saudi Arabia, Morroco, Bahrain and Spain++! One day I will travel on a tour of the whole of Asia, jumping from one country to the next'
    },
    'Hailey Smith': {
        'name': 'Hailey Smith',
        'img': '../../../assets/images/team/hailey-smith.webp',
        'email': 'hailey.smith@postgrad.manchester.ac.uk',
        'degree': 'MA Political Science',
        'description': 'Hey! I\'m Hailey and I study a MA in Political Science. I am from the Philly area in Pennsylvania, US. I have been loving the international community in Manchester, it has been very enriching for me! Outside of the library, I love to cook, try new foods, do crafts, read, and feed the pigeons in the parks. Glad to be here!'
    },
    'Isobel Sibree-Dolan': {
        'name': 'Isobel Sibree-Dolan',
        'img': '../../../assets/images/team/isobel-sibree-dolan.webp',
        'email': 'isobel.dolan@student.manchester.ac.uk',
        'degree': 'BSc Biomedical Sciences with a Modern Language',
        'description': 'Hello! I\'m Isobel, a second year studying Biomedical Sciences with French and I am currently preparing for my placement year abroad in Switzerland. Since coming to Manchester, I have found no shortage of adventures, and joining the library student team is my most recent one! My favourite part of the role is advocating from a student\'s perspective, particularly surrounding exam and assessment support. When I\'m not around campus, you\'ll find me exploring music venues, creating a disaster in the kitchen (my lucky housemates...!), or picking up a new creative project.'
    },
    'Kai Prince': {
        'name': 'Kai Prince',
        'img': '../../../assets/images/team/kai-prince.webp',
        'email': 'kai.prince@manchester.ac.uk',
        'degree': 'PhD Mathematics',
        'description': 'Hello there! I am Kai Prince, an ADHD student doing a part-time PhD in Maths. I did my MMath here at the University of Manchester between 2018-2022 have been involved in student advocacy work since 2021. I have been engaged in a number of roles over the years but I am currently the President of the Disabled Students Society, the Neurodiversity Officer of the Postgraduate Researchers Association, and Co-Chair of the Neurodivergent Staff Network, all whilst moderating multiple Discord servers and working as a Library Student Team Member and DASS Student Support Worker! My main interests are mathematics, neurodiversity and teaching. If I ever have time, I also like to play Dead by Daylight, watch shows or movies, and occasionally play the Piano.'
    },
    'Keira Higgens': {
        'name': 'Keira Higgens',
        'img': '../../../assets/images/team/keira-higgens.webp',
        'email': 'keira.higgens@student.manchester.ac.uk',
        'degree': 'BA English Literature',
        'description': 'Hi, I\'m Keira, a 1st year Undergraduate student studying English Literature! I have been part of the Student Team for two months now and I am really enjoying the work we do to support students and the Widening Participation programs we anre involved in. When I\'m not juggling work and my studies, you\'ll find me going to concerts or meeting up with my friends to try new bars and restaurants in Manchester. I love listening to music and reading fiction as well as watching TV shows and movies!'    
    },
    'Nicholas Shangkala': {
        'name': 'Nicholas Shangkala',
        'img': '../../../assets/images/team/nicholas-shangkala.webp',
        'email': 'nicholas.shangkala@student.manchester.ac.uk',
        'degree': 'BSc Information Technology Management for Business (ITMB)',
        'description': 'Hey everyone!\nI\'m Nicholas, a second-year ITMB student from Indonesia. I\'ve been a part of the Library Student Team for three months now, and it has been an incredible experience from day one. Working with such a diverse team has allowed me to learn so much from my colleagues, things I had never learnt before. Engaging with people from different backgrounds, degrees, and personalities has been truly interesting. I especially enjoy meeting new people during our daily workshops and events. \nOutside of my role in the library, I have a few hobbies that keep me busy. I love listening to music, especially K-Pop, and I enjoy trying out new recipes (since I\'m an international student so I need to survive in the UK by myself 😊). I\'m also passionate about traveling and discovering new cultures and cuisines (although i have not done much traveling since coming to the UK, as I usually go back home only during the summer).\nIf you ever need any help, feel free to reach out, I\'m always happy to chat!'
    },
    'Olivia Shaw': {
        'name': 'Olivia Shaw',
        'img': '../../../assets/images/team/olivia-shaw.webp',
        'email': 'olivia.shaw-3@student.manchester.ac.uk',
        'degree': 'BA Politics and Modern History',
        'description': 'Hi I\'m Liv! I\'m a second year History and Politics student from the North East. I\'m quite new at the library still and there is lots to learn but I am passionate about teaching and learning! I\'m also head of regional inequality research at the universities student run think tank the Peterloo Institute. When not working, you can probably find me at the park, the swimming pool or in a second hand bookshop :)'
    },
    'Preenal Asher': {
        'name': 'Preenal Asher',
        'img': '../../../assets/images/team/preenal-asher.webp',
        'email': 'preenal.asher.manchester.ac.uk',
        'degree': 'BSc Actuarial Science and Maths',
        'description': 'Hi! I\'m Preenal, a third-year Actuarial Science student. Outside of studies, I enjoy cooking and watching TV shows. Feel free to reach out if you\'d like to chat about anything :)'
    },
    'Rachael Howe': {
        'name': 'Rachael Howe',
        'img': '../../../assets/images/team/rachael-howe.webp',
        'email': 'rachael.howe-2@postgrad.manchester.ac.uk',
        'degree': 'MA Linguistics',
        'description': 'Hi, I\'m Rachael, a postgraduate MA student studying linguistics. I am passionate about anything and everything to do with languages and linguistics to the extent that this is now my third Master\'s degree! I am also a Modern Languages Teacher and I particularly embrace opportunities in the student team to contribute to the creation and implementation of pedagogic resources. In my spare time I enjoy swimming, practising my languages, improving at playing the flute, and volunteering for an educational charity!'
    },
    'Rachel Cox': {
        'name': 'Rachel Cox',
        'img': '../../../assets/images/team/rachel-cox.webp',
        'email': 'rachel.cox-2@manchester.ac.uk',
        'degree': 'PhD Fashion Management and Marketing',
        'description': 'Hi everyone! I\'m in my second year of my PhD in Fashion Management and Marketing. My topic focus explores the impact of information technology on garment workers. I previously graduated with a PGCert in Sociology in 2021 and a BSc in Fashion Buying and Merchandising from UoM in 2019. I\'m originally from Cheshire but have visited Manchester since I was 11. I love music, reading, environmental and sustainability work, knitting, films, cooking and Yoga (qualified to teach too). Oh, and I love dachshunds too! I\'m a member of the UoM Pole and Burlesque society which has been one of the most empowering experiences during my time at the University. Really looking forward to getting to know and work with you all and happy to answer your questions! :)'
    },
    'Rachel Cynthia Valavan Vetrigo': {
        'name': 'Rachel Cynthia Valavan Vetrigo',
        'img': '../../../assets/images/team/rachel-cynthia-valavan-vetrigo.webp',
        'email': 'rachelcynthia.valavanvetrigo@postgrad.manchester.ac.uk',
        'degree': 'M.Sc. Advanced Computer Science',
        'description': 'Hello! I\'m Rachel. I\'m currently pursuing my master\'s in Advanced Computer Science. I love anything and everything to do with programming. \nI enjoy working with the Library Student Team - it\'s such a fun and rewarding experience. I get to meet a variety of people, represent the student voice, and help improve the overall student experience. \nAs part of this role, I do a lot of filming and editing, which is also a personal passion of mine. It\'s honestly the best opportunity I could ask for!\nIn my free time, I enjoy reading, crocheting, and gardening. I also occasionally paint even though I\'m terrible at it.'
    },
    'Raheel Ansari': {
        'name': 'Raheel Ansari',
        'img': '../../../assets/images/team/raheel-ansari.webp',
        'email': 'raheel.ansari@student.manchester.ac.uk',
        'degree': 'BEng Mechanical Engineering',
        'description': 'Hey! I\'m Raheel, a 2nd-year Mechanical Engineering student. I spent the first 18 years of my life in Pakistan before taking the leap to pursue higher education in the UK. When I\'m not deep into engineering work, you\'ll find me jamming on my guitar. Earlier last year, I went all-out adventurer and took an 18-day solo trip — definitely one of my most epic experiences. I also go through intense reading phases where I finish a book in a week, only to get stuck on the same page of another for a month :)'
    },
    'Samhita Mukherjee': {
        'name': 'Samhita Mukherjee',
        'img': '../../../assets/images/team/samhita-mukherjee.webp',
        'email': 'samhita.mukherjee@student.manchester.ac.uk',
        'degree': 'BSc Psychology',
        'description': 'Hi, I\'m Samhita, a BSc Psychology with Placement Year student and an international student from India and the USA. The moment I landed in Manchester, I fell in love with the city\'s vibe (it felt like home) \nI love travelling and have been around most of Europe at least thrice (even I don\'t know why), a little bit of Asia, but I need more Asia in my life!! I have the soul of an old timey radio, I\'ll sing my heart out if I hear retro songs. Food is my ultimate joy, whether it\'s eating or cooking (I make legendary pancakes). When I\'m not drowning in coursework (first-year me had it easy, second-year me… not so much), you\'ll find me watching movies, and dramas, or just chilling with friends. \nBesides being a Library Student Team Member, and a Student Partner for FBMH. I am also a telephone befriender because psychology and mental health are my first loves. Through my degree. I have developed an unexpected amount of interest in research.'
    },
    'Sarah-Sonia Balan': {
        'name': 'Sarah-Sonia Balan',
        'img': '../../../assets/images/team/sarah-sonia-balan.webp',
        'email': 'sarah-sonia.balan@student.manchester.ac.uk',
        'degree': 'BSc Mathematics',
        'description': 'Hi! I\'m Sonia, I\'m currently a 2nd year Pure Mathematics student. I am a new member of the Library Student Team but in the past year I\'ve been the Student Development secretary of MathSoc. This year I have also joined the PASS scheme for Maths and I became a Student Rep for the Faculty of Science and Engineering. But Maths is certainly not the only thing that occupies my mind — I love listening to music, I like reading (mostly philosophy and other essays) and I want to improve my writing skills, so this motivated me to start a personal blog where I analyse the concepts that I most resonate with.'
    },
    '(deg)Syeda Kazmi': {
        'name': 'Syeda Kazmi',
        'img': '../../../assets/images/team/syeda-kazmi.webp',
        'email': 'syeda.kazmi-3@student.manchester.ac.uk',
        'degree': '-/-',
        'description': 'desc'
    },
    'Szaffi Jarbath': {
        'name': 'Szaffi Jarbath',
        'img': '../../../assets/images/team/szaffi-jarbath.webp',
        'email': 'szaffi.jarbath@student.manchester.ac.uk',
        'degree': 'LLB Law with International Study',
        'description': 'Hi, my name is Szaffi! I\'m a final year Law with International Study student and just got back from a year of study in Warsaw, Poland. I joined the Student Library Team in my second year and am excited to continue contributing to the team throughout my final year! In my free time, I like volunteering to translate for charities, cooking and learning new languages.'
    },
    'Tabitha Glennon': {
        'name': 'Tabitha Glennon',
        'img': '../../../assets/images/team/tabitha-glennon.webp',
        'email': 'Tabitha Glennon@student.manchester.ac.uk',
        'degree': 'BA English Literature',
        'description': 'Hi everyone! I\'m a current English Literature undergraduate student, and I\'m in final year here at UoM. I absolutely love the city and going to university here, and am so pleased that I get the chance to be involved in the library and all the different types of work that go on in the university. When I\'m not working on my degree, you\'ll be able to find me spending time with my friends and coursemates, trying out all the restaurants, bars, and other activities that Manchester has to offer! I am a huge lover of travel, and I\'m always up for a chat about life in Manchester and beyond. I\'m really looking forward to being a friendly face and a helping hand and I\'m always happy to answer any questions you may have! :)'
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
    <img src=${info['img']} alt="profile-pic" height="350" width="300">
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



