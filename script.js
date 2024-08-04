// Function to show the sidebar
// Commented out as it's not used in the current code
// function showSidebar() {
//   const sidebar = document.querySelector('.sidebar');
//   sidebar.style.display = 'flex';
// }

// Function to hide the sidebar
// Commented out as it's not used in the current code
// function hideSidebar() {
//   const sidebar = document.querySelector('.sidebar');
//   sidebar.style.display = 'none';
// }

document.addEventListener('DOMContentLoaded', () => {
  const heroText = document.querySelector('.hero-text');
  const heroContent = document.querySelector('.hero-content');

  heroText.innerHTML = `
    <div class="circle"></div>
    <h3>Hello, My Name is</h3>
    <h2>Walwala Safi</h2>
    <h1>Web Developer</h1>
    <a href="#contact" class="contact-btn">Contact Me</a>
  `;

  const socialLinks = document.createElement('div');
  socialLinks.className = 'social-links';
  socialLinks.innerHTML = `
    <a href="https://github.com/WALWALASAFI/"><i class="fab fa-github"></i></a>
    <a href="https://www.facebook.com/"><i class="fab fa-facebook"></i></a>
    <a href="https://www.linkedin.com/in/walwala-safi-65b56530a/"><i class="fab fa-linkedin"></i></a>
  `;

  heroContent.appendChild(socialLinks);
});

document.addEventListener('DOMContentLoaded', () => {
  const aboutMe = document.getElementById('about-me');
  if (aboutMe) {
    aboutMe.innerHTML = `
      <div class="about-section">
        <div class="about-image">
          <img src="images/page.jpg" alt="About Image">
        </div>
        <div class="about-text">
          <h2>About me</h2>
          <p>I'm Walwala Safi, a passionate web developer with a knack for crafting digital experiences that blend creativity with functionality. With a keen eye for design and a love for clean code, I specialize in creating responsive and intuitive websites that not only look great but also perform flawlessly across all devices. Beyond coding, I enjoy exploring the intersections of design and technology, constantly seeking inspiration from diverse sources to bring fresh perspectives to my work.</p>
        </div>
      </div>
    `;
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const myEdu = document.getElementById('my-edu');
  if (myEdu) {
    myEdu.innerHTML = `
      <div class="edu-section">
        <div class="edu-text">
          <h2>Education</h2>
          <p>I am a student of Computer Science at Salam University. Besides this, I graduated from Tajvar Sultana High School with high honors, excelling marks. Also, I have earned my English Language Diploma at Salam University. My educational journey in computer science at Salam University has equipped me with a deep understanding of web technologies and development. Through rigorous coursework and hands-on projects, I've gained proficiency in:
          HTML, CSS, and JavaScript: Mastering the building blocks of web pages to create visually appealing and functional interfaces.</p>
        </div>
        <div class="edu-image">
          <img src="images/8bcfe4f3-b5c8-485d-ae20-01bff4da89c1.jpg">
          <a href="CV/w resume.pdf" download="CV/w resume.pdf" class="edu-button">Download CV</a>
        </div>
      </div>
    `;
  }
});

const projects = [
  {
    title: 'Number Validator',
    shortDescription: 'The Telephone Number Validator is a web application that allows users to validate and format phone numbers based on the selected country. The application then displays the validation result and the formatted number.',
    longDescription: 'The Telephone Number Validator is an intuitive web application designed to validate and format phone numbers according to the standards of different countries. It provides a simple interface where users can enter a phone number into the input field and select the appropriate country code from a dropdown menu. By clicking the (Check) button, the application processes the input to validate its correctness and format it according to the selected country\'s phone number conventions.',
    image: 'images/telephone number validitor.jpg',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Git', 'GitHub'],
    liveLink: 'https://walwalasafi.github.io/Telephone-Number-Validator/',
    sourceLink: 'https://github.com/WALWALASAFI/Telephone-Number-Validator',
  },
  {
    title: 'Cash Register',
    shortDescription: 'The Cash Register web application is a robust tool for managing transactions and cash flow in a retail setting. It facilitates the calculation of change and the real-time updating of the cash drawer based on the amount of cash provided by the customer.',
    longDescription: 'The Cash Register is a web application designed to calculate change and update the cash drawer based on the amount received from the customer. It features an input field for the received amount, a dropdown menu for selecting the payment method, and a button to process the transaction and display the change due. This application is designed to streamline the checkout process, ensuring accurate and efficient handling of cash transactions, reducing errors, and improving customer service.',
    image: 'images/cash register.jpg',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Git', 'GitHub'],
    liveLink: 'https://walwalasafi.github.io/Cash-register/',
    sourceLink: 'https://github.com/WALWALASAFI/Cash-register',
  },
  {
    title: 'Product Landing Page',
    shortDescription: 'Convenience at Your Doorstep: With online fresh fruit shopping, the bounty of the orchard is just a click away. Say goodbye to long trips to the grocery store or local market. Now, you can browse through a diverse array of fresh fruits from the comfort of your home, office, or anywhere with an internet connection. Online fresh fruit shopping brings the farm-fresh goodness of nature directly to your fingertips,🥰',
    longDescription: 'Convenience at Your Doorstep: With online fresh fruit shopping, the bounty of the orchard is just a click away. Say goodbye to long trips to the grocery store or local market. Now, you can browse through a diverse array of fresh fruits from the comfort of your home, office, or anywhere with an internet connection. Online fresh fruit shopping brings the farm-fresh goodness of nature directly to your fingertips,🥰',
    image: 'images/landing.jpg',
    technologies: ['HTML', 'CSS', 'Git', 'GitHub'],
    liveLink: 'https://walwalasafi.github.io/product-landing-page/',
    sourceLink: 'https://github.com/WALWALASAFI/product-landing-page',
  },
  {
    title: 'Pokémon Search App',
    shortDescription: 'The Pokémon Search App is a web application designed to allow users to search for Pokémon by their name or ID. It provides detailed information and a sprite image of the searched Pokémon.',
    longDescription: 'The Pokémon Search App is a comprehensive web application that enables users to search for Pokémon by entering either the name or ID of the Pokémon they wish to find. Upon initiating the search, the app displays an array of detailed information about the Pokémon, including its name, ID, weight, height, types, and various stats. Additionally, the app shows a sprite image of the Pokémon, giving users a visual representation. The user-friendly interface, adorned with a colorful Pokémon-themed banner, enhances the overall experience, making it easy and enjoyable to look up any Pokémon.',
    image: 'images/pic of pokemon.jpg',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Git', 'GitHub', 'Spilne'],
    liveLink: 'https://walwalasafi.github.io/Pok-mon-Search-App/',
    sourceLink: 'https://github.com/WALWALASAFI/Pok-mon-Search-App',
  },
  {
    title: 'Portfolio Project',
    shortDescription: 'This project is a portfolio website designed to showcase various web development projects. The website employs a sleek, dark-themed design with a focus on simplicity and modern aesthetics.',
    longDescription: 'This portfolio website is designed to showcase various web development projects. It features a modern, minimalist design with a dark theme, providing a sleek and professional look. The website includes a navigation bar with links to Home, About, Work, and Contact sections, allowing easy access to different parts of the site. The website is fully responsive, ensuring that it provides a seamless user experience across various devices and screen sizes.',
    image: 'images/portfolio.jpg',
    technologies: ['HTML', 'CSS', 'Git', 'GitHub'],
    liveLink: 'https://walwalasafi.github.io/personal-portfolio-webpage/',
    sourceLink: 'https://github.com/WALWALASAFI/personal-portfolio-webpage',
  },
  {
    title: 'Documentation Page',
    shortDescription: 'This is a documentation page about HTML, covering topics about the HTML language and functionality.',
    longDescription: 'This is a documentation page about HTML, covering topics about the HTML language and functionality.',
    image: 'images/technical documention page.jpg',
    technologies: ['HTML', 'CSS', 'Git', 'GitHub'],
    liveLink: 'https://walwalasafi.github.io/technical_documentation_page/',
    sourceLink: 'https://github.com/WALWALASAFI/technical_documentation_page',
  },
  {
    title: 'Survey Form',
    shortDescription: 'This is a student survey form with fields for school name, student name, last name, date, email, and optional choices.',
    longDescription: 'This is a student survey form with fields for school name, student name, last name, date, email, and optional choices.',
    image: 'images/survey.jpg',
    technologies: ['HTML', 'CSS', 'Git', 'GitHub'],
    liveLink: 'https://walwalasafi.github.io/survey-form/',
    sourceLink: 'https://github.com/WALWALASAFI/survey-form',
  },
  {
    title: 'Roman Number Converter',
    shortDescription: 'The Roman Number Converter is a web application that allows users to convert Arabic numbers to Roman numerals. It provides an intuitive interface where users can enter a number and receive its Roman numeral equivalent.',
    longDescription: 'The Roman Number Converter is a web application designed to convert Arabic numbers into Roman numerals. The application provides a user-friendly interface where users can enter any Arabic number within the accepted range and immediately receive its Roman numeral equivalent. This tool is useful for educational purposes, historical research, or any situation requiring the conversion of numerical data into Roman numerals. With its straightforward design and efficient functionality, the Roman Number Converter offers a seamless user experience, ensuring accurate and reliable results with every use.',
    image: 'images/roman numerial convertot.jpg',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Git', 'GitHub'],
    liveLink: 'https://walwalasafi.github.io/Roman-Number-Converter/',
    sourceLink: 'https://github.com/WALWALASAFI/Roman-Number-Converter',
  },
  {
    title: 'ODIN Project',
    shortDescription: 'This is my first project that has a simple design with just one header and paragraph, also has a simple style according to the paragraph and the title.',
    longDescription: 'This is my first project that has a simple design with just one header and paragraph, also has a simple style according to the paragraph and the title.',
    image: 'images/odin screenshot.jpg',
    technologies: ['HTML', 'CSS', 'GitHub'],
    liveLink: 'https://walwalasafi.github.io/odin-project/',
    sourceLink: 'https://github.com/WALWALASAFI/odin-project',
  },
];

function displayProjects() {
  const myProjects = document.getElementById('my-projects');
  const showMoreProjectsBtn = document.getElementById('show-more-projects');
  const popupContent = document.getElementById('popup-content');
  const popUp = document.getElementById('popup');
  const mainContent = document.getElementById('main-content');
  const { body } = document;

  if (!myProjects) return;

  myProjects.innerHTML = projects
    .map((project, index) => `
      <div class="proj" id="proj-${index}">
        <h3>${project.title}</h3>
        <img src="${project.image}" alt="${project.title}" />
        <p>${project.shortDescription}</p>
        <button class="popup-button-more" onclick="showPopup(${index})">Learn More</button>
      </div>
    `)
    .join('');

  const boxes = document.querySelectorAll('.proj');
  let currentItems = 2;

  function showProjects(count) {
    boxes.forEach((box, index) => {
      box.style.display = (index < count) ? 'block' : 'none';
    });
  }

  showProjects(currentItems);

  if (showMoreProjectsBtn) {
    showMoreProjectsBtn.onclick = () => {
      if (showMoreProjectsBtn.innerText === 'Show More') {
        currentItems += 2;
        showProjects(currentItems);
        if (currentItems >= boxes.length) {
          showMoreProjectsBtn.innerText = 'Show Less';
        }
      } else {
        currentItems = 2;
        showProjects(currentItems);
        showMoreProjectsBtn.innerText = 'Show More';
        document.getElementById('project').scrollIntoView({ behavior: 'smooth' });
      }
    };
  }

  window.showPopup = function showPopup(index) {
    // function body
    const project = projects[index];
    popupContent.innerHTML = `
      <button id="close-pop" class="close-btn">&times;</button>
      <h3>${project.title}</h3>
      <img src="${project.image}" alt="${project.title}" />
      <p>${project.longDescription}</p>
      <p>Technologies: ${project.technologies.join(', ')}</p>
      <a class="popup-button" id="live" href="${project.liveLink}" target="_blank">Live Site</a>
      <a class="popup-button" id="git" href="${project.sourceLink}" target="_blank">GitHub Repository</a>
      <button id="mobile-close-pop" class="close-btn-mobile">Close</button>
    `;
    popUp.classList.remove('hidden');
    mainContent.classList.add('blurred');
    body.classList.add('no-scroll');

    const closePopup = () => {
      popUp.classList.add('hidden');
      mainContent.classList.remove('blurred');
      body.classList.remove('no-scroll');
    };

    const closeButton = document.getElementById('close-pop');
    if (closeButton) {
      closeButton.addEventListener('click', closePopup);
    }

    const mobileCloseButton = document.getElementById('mobile-close-pop');
    if (mobileCloseButton) {
      mobileCloseButton.addEventListener('click', closePopup);
    }
  };
}

document.addEventListener('DOMContentLoaded', displayProjects);

const skills = {
  certificates: [
    { name: 'Responsive Web Design', image: 'certificate/responsive certificate.jpg', link: '#' },
    { name: 'JavaScript', image: 'certificate/java script certificate.jpg', link: '#' },
  ],
};

const certifications = document.getElementById('certification'); // Added definition

const skill = {
  TechnicalSkills: ['HTML', 'CSS', 'JS', 'Java', 'Git', 'Web Performance'],
  professionalSkills: ['Problem Solving', 'Project Management', 'Communication', 'Critical Thinking'],
  softSkills: ['Skills Matrix', 'Teamwork', 'Testimonials', 'Clean Code'],
};

const skillsContainer = document.getElementById('skills');

if (skillsContainer) {
  skillsContainer.innerHTML = `
    <h2>Skills</h2>
    <div id="skills-content">
      <div class="list">
        <div class="skills-category">
          <h3 class="skills-header" data-target="#Technical-Skills-list">Technical Skills</h3>
          <ul class="skills-list" id="Technical-Skills-list"></ul>
        </div>
        <div class="skills-category">
          <h3 class="skills-header" data-target="#professional-skills-list">Professional Skills</h3>
          <ul class="skills-list" id="professional-skills-list"></ul>
        </div>
        <div class="skills-category">
          <h3 class="skills-header" data-target="#soft-skills-list">Soft Skills</h3>
          <ul class="skills-list" id="soft-skills-list"></ul>
        </div>
      </div>
      <div class="image">
        <div id="skills-image">
          <img src="images/images.jpg" alt="Skills Image">
        </div>
      </div>
    </div>
  `;
}

// Append list items to respective lists
const technicalSkillsList = document.getElementById('Technical-Skills-list');
const professionalSkillsList = document.getElementById('professional-skills-list');
const softSkillsList = document.getElementById('soft-skills-list');

skill.TechnicalSkills.forEach((techSkill) => {
  const listItem = document.createElement('li');
  listItem.textContent = techSkill;
  technicalSkillsList.appendChild(listItem);
});

skill.professionalSkills.forEach((proSkill) => {
  const listItem = document.createElement('li');
  listItem.textContent = proSkill;
  professionalSkillsList.appendChild(listItem);
});

skill.softSkills.forEach((softSkill) => {
  const listItem = document.createElement('li');
  listItem.textContent = softSkill;
  softSkillsList.appendChild(listItem);
});

// Add click event to toggle visibility of lists
document.querySelectorAll('.skills-header').forEach((header) => {
  header.addEventListener('click', () => {
    const targetList = document.querySelector(header.dataset.target);

    if (targetList.classList.contains('visible')) {
      targetList.classList.remove('visible');
    } else {
      document.querySelectorAll('.skills-list.visible').forEach((list) => {
        list.classList.remove('visible');
      });
      targetList.classList.add('visible');
    }
  });
});

const certification = document.getElementById('certification');

if (certification) {
  certification.innerHTML = `
    <div id="certification-section">
      <h2>Certificates</h2>
      <div class="cert-list">
        ${skills.certificates
          .map((certificate) => `
            <div class="cert">
              <h3>${certificate.name}</h3>
              <img src="${certificate.image}" alt="${certificate.name}" />
            </div>
          `)
          .join('')}
      </div>
    </div>
  `;
}
