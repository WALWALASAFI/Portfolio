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
     <img src="images/page.jpg" alt="Hero Image"> 
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

document.addEventListener("DOMContentLoaded", () => {
  const aboutMe = document.getElementById('about-me');
  if (aboutMe) {
    aboutMe.innerHTML = `
      <div class="about-section">
        <div class="about-image">
          <img src="images/image of about.jpg" alt="About Image">
        </div>
        <div class="about-text">
          <h2>About me</h2>
          <p>I'm Walwala Safi, a passionate web developer with a knack for crafting digital experiences that blend creativity with functionality. With a keen eye for design and a love for clean code, I specialize in creating responsive and intuitive websites that not only look great but also perform flawlessly across all devices. Beyond coding, I enjoy exploring the intersections of design and technology, constantly seeking inspiration from diverse sources to bring fresh perspectives to my work.</p>
        </div>
      </div>
    `;
  }
});

document.addEventListener("DOMContentLoaded", () => {
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
          <img src="images/page.jpg" alt="Education Image">
          <a href="CV/w resume.pdf" download="CV/w resume.pdf" class="edu-button">Download CV</a>
        </div>
      </div>
    `;
  }
});

const myProjects = document.getElementById("my-projects");
const popUp = document.getElementById("pop-up");
const popupContent = document.getElementById("popup-content");
const closePop = document.getElementById("close-pop");
const mainContent = document.getElementById("main-content");
const body = document.body;

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
    shortDescription: "This is a product landing page that showcases online shopping. This project is an e-commerce website dedicated to showcasing and selling traditional Afghan clothing and accessories. It features a responsive design, easy-to-use navigation, product listings, an email subscription form, and a search bar.",
    longDescription: "This project is an e-commerce website dedicated to showcasing and selling traditional Afghan clothing and accessories. It features a responsive design, easy-to-use navigation, product listings, an email subscription form, and a search bar.",
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
    shortDescription: "This is a documentation page about HTML, covering topics about the HTML language and functionality.",
    longDescription: "This is a documentation page about HTML, covering topics about the HTML language and functionality.",
    image: "images/technical documention page.jpg",
    technologies: ["HTML", "CSS", "Git", "GitHub"],
    liveLink: "https://walwalasafi.github.io/technical_documentation_page/",
    sourceLink: "https://github.com/WALWALASAFI/technical_documentation_page",
  },
  {
    title: "Roman Number Converter",
    shortDescription: "The Roman Number Converter is a web application that allows users to convert Arabic numbers to Roman numerals. It provides an intuitive interface where users can enter a number and receive its Roman numeral equivalent.",
    longDescription: "The Roman Number Converter is a web application designed to convert Arabic numbers into Roman numerals. The application provides a user-friendly interface where users can enter any Arabic number within the accepted range and immediately receive its Roman numeral equivalent. This tool is useful for educational purposes, historical research, or any situation requiring the conversion of numerical data into Roman numerals. With its straightforward design and efficient functionality, the Roman Number Converter offers a seamless user experience, ensuring accurate and reliable results with every use.",
    image: "images/roman number convertor.jpg",
    technologies: ["HTML", "CSS", "JavaScript", "Git", "GitHub"],
    liveLink: "https://walwalasafi.github.io/Roman-Number-Converter/",
    sourceLink: "https://github.com/WALWALASAFI/Roman-Number-Converter",
  },
];

projects.forEach((project, index) => {
  const projectElement = document.createElement("div");
  projectElement.classList.add("project-card");

  projectElement.innerHTML = `
    <div class="project-image">
      <img src="${project.image}" alt="${project.title}">
    </div>
    <div class="project-content">
      <h2>${project.title}</h2>
      <p>${project.shortDescription}</p>
      <button class="project-btn" onclick="showProject(${index})">Read More</button>
    </div>
  `;

  myProjects.appendChild(projectElement);
});

function showProject(index) {
  const project = projects[index];
  popUp.style.display = "flex";
  body.style.overflow = "hidden";

  popupContent.innerHTML = `
    <div class="pop-up-image">
      <img src="${project.image}" alt="${project.title}">
    </div>
    <div class="pop-up-content">
      <h2>${project.title}</h2>
      <p>${project.longDescription}</p>
      <div class="technologies">
        <h3>Technologies used:</h3>
        <ul>
          ${project.technologies.map(tech => `<li>${tech}</li>`).join("")}
        </ul>
      </div>
      <div class="pop-up-links">
        <a href="${project.liveLink}" target="_blank">Live Demo</a>
        <a href="${project.sourceLink}" target="_blank">Source Code</a>
      </div>
      <button id="close-pop" onclick="closePopup()">Close</button>
    </div>
  `;
}

function closePopup() {
  popUp.style.display = "none";
  body.style.overflow = "auto";
}

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Show and hide sidebar
function showSidebar() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.style.display = 'flex';
}

function hideSidebar() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.style.display = 'none';
}

// Form submission
const contactForm = document.getElementById("contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const formData = new FormData(contactForm);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    // Here you can handle form submission, like sending the data to a backend server
    // For demonstration purposes, let's log the form data to console
    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
    alert("Thank you! Your message has been sent.");

    // Optionally, clear the form
    contactForm.reset();
  });
}

