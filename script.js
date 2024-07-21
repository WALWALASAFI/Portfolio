// Function to show the sidebar
function showSidebar() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.style.display = 'flex';
}

// Function to hide the sidebar
function hideSidebar() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.style.display = 'none';
}

// Home page content initialization
document.addEventListener("DOMContentLoaded", () => {
  const heroText = document.querySelector('.hero-text');
  const heroImage = document.querySelector('.hero-image');
  const heroContent = document.querySelector('.hero-content');

  heroText.innerHTML = `
      <div class="circle"></div>
      <h3>Hello, My Name is</h3>
      <h2>Walwala Safi</h2>
      <h1>Web Developer</h1>
      <a href="#contact" class="contact-btn">Contact Me</a>
      
  `;

  heroImage.innerHTML = `
      
  `;

  const socialLinks = document.createElement('div');
  socialLinks.className = 'social-links';
  socialLinks.innerHTML = `
      <a href="https://github.com/WALWALASAFI/"><i class="fab fa-github"></i></a>
      <a href="https://www.facebook.com/"><i class="fa-brands fa-facebook"></i></a>
      <a href="https://www.linkedin.com/in/walwala-safi-65b56530a/"><i class="fa-brands fa-linkedin"></i></a>
  `;

  heroContent.appendChild(socialLinks);
});

// About page content initialization
document.addEventListener("DOMContentLoaded", () => {
  const aboutMe = document.getElementById('about-me');
  if (aboutMe) {
    aboutMe.innerHTML = `
      <div class="about-section">
        <div class="about-image">
          <img src="images/image of about.jpg">
        </div>
        <div class="about-text">
          <h2>About me</h2>
          <p>I'm Walwala Safi, a passionate web developer with a knack for crafting digital experiences that blend creativity with functionality. With a keen eye for design and a love for clean code, I specialize in creating responsive and intuitive websites that not only look great but also perform flawlessly across all devices.Beyond coding, I enjoy exploring the intersections of design and technology, constantly seeking inspiration from diverse sources to bring fresh perspectives to my work.</p>
        </div>
      </div>
    `;
  }
});

//Education
document.addEventListener("DOMContentLoaded", () => {
  const myEdu = document.getElementById('my-edu');
  if (myEdu) {
    myEdu.innerHTML = `
      <div class="edu-section">
        <div class="edu-text">
          <h2>Education</h2>
          <p>i am a student of Computer sciance, in Salam University. Beside of this, i am graduated from Tajvar Sultana High school with high honors, excelling mark. Also, i have taken my English language Diploma at Salam university. My educational journey in computer science at Salam University has equipped me with a  completely understanding of  web technologies and development. Through rigorous coursework and hands-on projects, I've gained proficiency in:
          HTML, CSS, and JavaScript: Mastering the building blocks of web pages to create visually appealing and functional interfaces.</p>
        </div>
        <div class="edu-image">
          <img src="images/download.jpg" alt="Education Image">
          <a href="CV/w resume.pdf"</a>
        </div>
      </div>
    `;
  }
});

// Projects section content initialization
const myProjects = document.getElementById("my-projects");
const popUp = document.getElementById("pop-up");
const popupContent = document.getElementById("popup-content");
const closePop = document.getElementById("close-pop");

if (myProjects && popUp && popupContent && closePop) {
  const projects = [
    {
      title: "Number Validator",
      shortDescription: "The Telephone Number Validator is a web application that allows users to validate and format phone numbers based on the selected country. The application then displays the validation result and the formatted number.",
      longDescription: "The Telephone Number Validator is an intuitive web application designed to validate and format phone numbers according to the standards of different countries. It provides a simple interface where users can enter a phone number into the input field and select the appropriate country code from a dropdown menu. By clicking the (Check) button, the application processes the input to validate its correctness and format it according to the selected country's phone number conventions.",
      image: "images/telephone number validitor.jpg",
      technologies: ["HTML", "CSS", "JavaScript", "Git", "GitHub"],
      liveLink: "https://walwalasafi.github.io/Telephone-Number-Validator/",
      sourceLink: "https://github.com/WALWALASAFI/Telephone-Number-Validator",
    },
    {
      title: "Cash Register",
      shortDescription: "The Cash Register web application is a robust tool for managing transactions and cash flow in a retail setting. It facilitates the calculation of change and the real-time updating of the cash drawer based on the amount of cash provided by the customer.",
      longDescription: "The Cash Register is a web application designed to calculate change and update the cash drawer based on the amount received from the customer. It features an input field for the received amount, a dropdown menu for selecting the payment method, and a button to process the transaction and display the change due. This application is designed to streamline the checkout process, ensuring accurate and efficient handling of cash transactions, reducing errors, and improving customer service.",
      image: "images/cash register.jpg",
      technologies: ["HTML", "CSS", "JavaScript", "Git", "GitHub"],
      liveLink: "https://walwalasafi.github.io/Cash-register/",
      sourceLink: "https://github.com/WALWALASAFI/Cash-register",
    },
    {
      title: "Product Landing Page",
      shortDescription: "this is product landing page that show the online shopping also,This project is an e-commerce website dedicated to showcasing and selling traditional Afghan clothing and accessories. It features a responsive design, easy-to-use navigation, product listings, an email subscription form, and a search bar.",
      longDescription: "this is product landing page that show the online shopping also,This project is an e-commerce website dedicated to showcasing and selling traditional Afghan clothing and accessories. It features a responsive design, easy-to-use navigation, product listings, an email subscription form, and a search bar.",
      image: "images/landing.jpg",
      technologies: ["HTML", "CSS", "Git", "GitHub"],
      liveLink: "https://walwalasafi.github.io/product-landing-page/",
      sourceLink: "https://github.com/WALWALASAFI/product-landing-page",
    },
    {
      title: "Pokémon Search App",
      shortDescription: "The Pokémon Search App is a web application designed to allow users to search for Pokémon by their name or ID. It provides detailed information and a sprite image of the searched Pokémon.",
      longDescription: "The Pokémon Search App is a comprehensive web application that enables users to search for Pokémon by entering either the name or ID of the Pokémon they wish to find. Upon initiating the search, the app displays an array of detailed information about the Pokémon, including its name, ID, weight, height, types, and various stats. Additionally, the app shows a sprite image of the Pokémon, giving users a visual representation. The user-friendly interface, adorned with a colorful Pokémon-themed banner, enhances the overall experience, making it easy and enjoyable to look up any Pokémon.",
      image: "images/pic of pokemon.jpg",
      technologies: ["HTML", "CSS", "JavaScript", "Git", "GitHub", "Spilne"],
      liveLink: "https://walwalasafi.github.io/Pok-mon-Search-App/",
      sourceLink: "https://github.com/WALWALASAFI/Pok-mon-Search-App",
    },
    {
      title: "Portfolio Project",
      shortDescription: "This project is a portfolio website designed to showcase various web development projects. The website employs a sleek, dark-themed design with a focus on simplicity and modern aesthetics.",
      longDescription: "This portfolio website is designed to showcase various web development projects. It features a modern, minimalist design with a dark theme, providing a sleek and professional look. The website includes a navigation bar with links to Home, About, Work, and Contact sections, allowing easy access to different parts of the site. The website is fully responsive, ensuring that it provides a seamless user experience across various devices and screen sizes.",
      image: "images/portfolio.jpg",
      technologies: ["HTML", "CSS", "Git", "GitHub"],
      liveLink: "https://walwalasafi.github.io/personal-portfolio-webpage/",
      sourceLink: "https://github.com/WALWALASAFI/personal-portfolio-webpage",
    },
    {
      title: "Documentation Page",
      shortDescription: "This is a documentation page about HTML , covering topic about HTml language and functionalaty.",
      shortDescription: "This is a documentation page about HTML, topic about HTml language and functionalaty.",
      image: "images/technical documention page.jpg",
      technologies: ["HTML", "CSS", "Git", "GitHub"],
      liveLink: "https://walwalasafi.github.io/technical_documentation_page/",
      sourceLink: "https://github.com/WALWALASAFI/technical_documentation_page",
    },
    {
      title: "Roman Number Converter",
      shortDescription: "The Roman Number Converter is a web application that allows users to convert Arabic numbers to Roman numerals. Simply enter a number in the input field and click the (Convert) button to see the Roman numeral equivalent. ",
      longDescription: "The Roman Number Converter is a user-friendly web application that simplifies the process of converting Arabic numbers to Roman numerals. The interface features a single input field where users can enter any Arabic number they wish to convert. By clicking the (Convert) button, the application quickly processes the input and displays the equivalent Roman numeral. The application thus not only provides a practical tool but also helps users learn about the historical numeral system.",
      image: "images/roman numerial convertot.jpg",
      technologies: ["HTML", "CSS", "JavaScript", "Git", "GitHub"],
      liveLink: "https://walwalasafi.github.io/Roman-Numeral-convertor/",
      sourceLink: "https://github.com/WALWALASAFI/Roman-Numeral-convertor",
    },
    {
      title: "Palindrome",
      shortDescription: "This web application determines if a given text is a palindrome. It features an input field to enter text, a button to initiate the check, and a display area for the result. The design is responsive, ensuring usability across various devices.",
      longDescription: "This web application simplifies the process of identifying palindromes by automating the comparison. When a user enters text into the input field and clicks the (Check) button, the application removes any non-alphanumeric characters and converts the text to a uniform case (usually lowercase) to ensure accurate comparison. It then reverses the cleaned text and compares it to the original cleaned version. If the two match, the text is declared a palindrome. The application’s design prioritizes user experience. Its responsive nature ensures that it functions well across various devices, while the clear and concise interface makes it accessible to users of all ages and technical backgrounds.",
      image: "images/palindrome checker.jpg",
      technologies: ["HTML", "CSS", "JavaScript", "Git", "GitHub"],
      liveLink: "https://walwalasafi.github.io/Palindrome-checker-project/",
      sourceLink: "https://github.com/WALWALASAFI/Palindrome-checker-project",
    },
    {
      title: "Survey Form",
      shortDescription: "This web form collects user feedback to improve the freeCodeCamp platform. It asks for the user's name, email, age (optional), current role,and etc.",
      longDescription: "This survey form is designed to collect detailed user feedback to improve the freeCodeCamp platform. With a modern and responsive design, the form ensures an optimal user experience across various devices. It includes several fields to capture comprehensive user input. The form concludes with a submit button for users to send their responses. This comprehensive survey aims to collect valuable insights from the user community to drive continuous improvement of the freeCodeCamp platform, enhancing its user-friendliness and effectiveness.",
      image: "images/survey.jpg",
      technologies: ["HTML", "CSS", "Git", "GitHub"],
      liveLink: "https://walwalasafi.github.io/survey-form/",
      sourceLink: "https://github.com/WALWALASAFI/survey-form",
    },
    {
      title: "Odin Project",
      shortDescription: "this is a odin project that contains a header and a paragraph",
      longDescription: "this ia a Odin project that contains a header and a paraghraph related to Odin project",
      image: "images/odin screenshot.jpg",
      technologies: ["HTML", "CSS", "Git", "GitHub"],
      liveLink: "https://walwalasafi.github.io/odin-project/",
      sourceLink: "https://github.com/WALWALASAFI/odin-project",
    },
  ];

  myProjects.innerHTML = projects
    .map(
      (project, index) => `
    <div class="proj">
      <h3>${project.title}</h3>
      <img src="${project.image}" alt="${project.title}" />
      <p>${project.shortDescription}</p>
      <button onclick="showPopup(${index})">Learn More</button>
    </div>`
    )
    .join("");

  // Function to show project popup
  function showPopup(index) {
    const project = projects[index];
    popupContent.innerHTML = `
      <h3>${project.title}</h3>
      <p>${project.longDescription}</p>
      <p>Technologies: ${project.technologies.join(", ")}</p>
      <a href="${project.liveLink}" target="_blank">Live Demo</a>
      <a href="${project.sourceLink}" target="_blank">Source Link</a>
    `;
    popUp.classList.remove("hidden");
  }

  // Event listener to close popup
  closePop.addEventListener("click", () => {
    popUp.classList.add("hidden");
  });

  // Attach showPopup function to global scope
  window.showPopup = showPopup;
}


// Skills section content initialization
document.addEventListener("DOMContentLoaded", () => {
  const skillsSection = document.getElementById('skills');
  if (skillsSection) {
    const skills = {
      languages: ["HTML", "CSS", "java", "js",],
      tools: ["Git", "GitHub", "Vscode",]
    };

    const skillsList = document.createElement('ul');
    skillsList.className = 'skills-list';

    skills.languages.forEach(language => {
      const listItem = document.createElement('li');
      listItem.textContent = language;
      skillsList.appendChild(listItem);
    });

    skills.tools.forEach(tool => {
      const listItem = document.createElement('li');
      listItem.textContent = tool;
      skillsList.appendChild(listItem);
    });

    skillsSection.appendChild(skillsList);
  }
});

// Contact form handling
document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("contact-form");
  const errorMessage = document.getElementById("error-message");

  if (contactForm && errorMessage) {
    contactForm.addEventListener("submit", (event) => {
      const email = document.getElementById("email").value;
      if (email !== email.toLowerCase()) {
        event.preventDefault();
        errorMessage.classList.remove("hidden");
      } else {
        errorMessage.classList.add("hidden");
      }
    });

    const formFields = ["name", "email", "message"];
    formFields.forEach((field) => {
      const input = document.getElementById(field);
      if (input) {
        input.value = localStorage.getItem(field) || "";
        input.addEventListener("input", () => {
          localStorage.setItem(field, input.value);
        });
      }
    });
  }
});