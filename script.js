const homeData = {
  title: 'Welcome to My IS245 Portfolio',
  intro: 'This website is built with HTML, CSS, and JavaScript for IS245.',
  summary: 'All content is stored in JavaScript arrays and objects, then rendered using loops and DOM manipulation. Replace the placeholders with your own personal information and project details.'
};

const courses = [
  { name: 'CS101 Intro to Computer Programming', learned: 'Basic programming concepts, problem solving, variables, loops, functions, and writing simple programs.' },
  { name: 'CS155 Computer Science I', learned: 'Core programming skills, control structures, methods, arrays, debugging, and building more organized programs.' },
  { name: 'CS265 Computer Science II', learned: 'Object-oriented programming, data structures, recursion, file handling, and writing more advanced programs.' },
  { name: 'CY201 Intro to Cyber Security', learned: 'Basic cybersecurity concepts, common threats, risk management, network security, and ways to protect systems and data.' },
  { name: 'IU315 Ethics in the Cyber Worlds', learned: 'Ethical issues in technology, privacy, digital responsibility, cybersecurity laws, and how decisions online can affect people and organizations.' },
  { name: 'MA223 Probability & Statistics', learned: 'Probability concepts, descriptive statistics, data analysis, distributions, sampling, and interpreting statistical results.' },
  { name: 'CS245 Discrete Structures I', learned: 'Logic, sets, functions, relations, proof techniques, counting methods, and the mathematical foundations used in computer science.' },
  { name: 'US105 American History I', learned: 'Major events, people, and ideas in early American history, including colonization, independence, government formation, and social change.' },
  { name: 'CH185 General Chemistry I', learned: 'Basic chemistry concepts, atomic structure, chemical bonding, reactions, stoichiometry, gases, and problem solving with chemical equations.' },
  { name: 'BI163 Evolution and Ecology', learned: 'Evolutionary theory, natural selection, ecosystems, population interactions, biodiversity, and how organisms adapt to their environments.' }
];

const projects = [
  {
    title: 'Apple Stock Data Scraper',
    logo: 'AS',
    description: 'A Python web scraping project that collects Apple stock price history, cleans the closing price data, prints the results, and exports the data to CSV and JSON files',
    technologies: ['Python', 'BeautifulSoup', 'Requests', 'CSV', 'JSON'],
    github: 'https://github.com/camerondenton06-gif/apple-stock-data-scraper'
  },
  {
    title: 'NumPy Array Analysis',
    logo: 'NA',
    description: 'A python project that creates a large NumPy array, finds maximum values by column, identifies the top 10 column maximums, updates negative values in the center region, and combines sections of the array into a new array.',
    technologies: ['Python', 'NumPy', 'Arrays', 'Data Analysis'],
    github: 'https://github.com/camerondenton06-gif/NumPy-Array-Analysis'
  },
  {
    title: 'Credit Metrics Data Analysis',
    logo: 'CM',
    description: 'A python data analysis project that creates a sample credit dataset, groups the data by age range, calculates average credit metrics and displays the results in a bar chart',
    technologies: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Data Analysis'],
    github: 'https://github.com/camerondenton06-gif/Credit-Metrics-Data-Analysis'
  }
];

const contactData = {
  email: 'cdenton1s@semo.edu',
  github: 'https://github.com/camerondenton06-gif',
  website: 'https://camerondenton06-gif.github.io/IS245-Portfolio/',
  linkedin: 'https://www.linkedin.com/in/cameron-denton-7174a0345/'
};

function createTextElement(tag, text, className) {
  const element = document.createElement(tag);
  if (className) element.className = className;
  element.textContent = text;
  return element;
}

function renderHome() {
  const container = document.getElementById('homeContent');
  const card = document.createElement('div');
  card.className = 'hero-card';

  card.appendChild(createTextElement('h1', homeData.title));
  card.appendChild(createTextElement('p', homeData.intro));
  card.appendChild(createTextElement('p', homeData.summary));
  container.appendChild(card);
}

function renderCourses() {
  const container = document.getElementById('coursesContent');
  courses.forEach((course) => {
    const courseCard = document.createElement('div');
    courseCard.className = 'card';

    courseCard.appendChild(createTextElement('h3', course.name));
    courseCard.appendChild(createTextElement('p', course.learned));

    const list = document.createElement('ul');
    list.className = 'card-list';
    list.appendChild(createTextElement('li', `What I learned: ${course.learned}`));
    courseCard.appendChild(list);

    container.appendChild(courseCard);
  });
}

function renderProjects() {
  const container = document.getElementById('projectsContent');
  projects.forEach((project) => {
    const projectCard = document.createElement('div');
    projectCard.className = 'card';

    const logo = createTextElement('div', project.logo, 'card-logo');
    projectCard.appendChild(logo);
    projectCard.appendChild(createTextElement('h3', project.title));
    projectCard.appendChild(createTextElement('p', project.description));

    const techList = document.createElement('ul');
    techList.className = 'card-list';
    project.technologies.forEach((tech) => {
      techList.appendChild(createTextElement('li', tech));
    });
    projectCard.appendChild(techList);

    const links = document.createElement('div');
    links.className = 'card-links';
    const githubLink = document.createElement('a');
    githubLink.href = project.github || '#';
    githubLink.target = '_blank';
    githubLink.rel = 'noopener noreferrer';
    githubLink.textContent = project.github ? 'View on GitHub' : 'Add GitHub link';
    links.appendChild(githubLink);
    projectCard.appendChild(links);

    container.appendChild(projectCard);
  });
}

function renderContact() {
  const container = document.getElementById('contactContent');
  const contactCard = document.createElement('div');
  contactCard.className = 'hero-card';

  contactCard.appendChild(createTextElement('h2', 'Contact Information'));

  const contactList = document.createElement('ul');
  contactList.className = 'card-list';
  contactList.appendChild(createTextElement('li', `Email: ${contactData.email || '_____@example.com'}`));
  contactList.appendChild(createTextElement('li', `GitHub: ${contactData.github || 'github.com/your-username'}`));
  contactList.appendChild(createTextElement('li', `Website: ${contactData.website || 'your-website.com'}`));
  contactList.appendChild(createTextElement('li', `LinkedIn: ${contactData.linkedin || 'linkedin.com/in/your-profile'}`));

  contactCard.appendChild(contactList);
  container.appendChild(contactCard);
}

function validateForm(event) {
  event.preventDefault();
  const nameInput = document.getElementById('nameInput').value.trim();
  const addressInput = document.getElementById('addressInput').value.trim();
  const ageInput = document.getElementById('ageInput').value.trim();
  const message = document.getElementById('formMessage');

  if (!nameInput) {
    message.textContent = 'Please enter your name.';
    message.className = 'form-message error';
    return;
  }

  if (!addressInput) {
    message.textContent = 'Please enter your address.';
    message.className = 'form-message error';
    return;
  }

  if (!ageInput) {
    message.textContent = 'Please enter your age.';
    message.className = 'form-message error';
    return;
  }

  const age = Number(ageInput);
  if (Number.isNaN(age) || age <= 0 || age > 120) {
    message.textContent = 'Please enter a valid age between 1 and 120.';
    message.className = 'form-message error';
    return;
  }

  message.textContent = `Thank you, ${nameInput}! Your info has been submitted.`;
  message.className = 'form-message success';
}

function initPage() {
  renderHome();
  renderCourses();
  renderProjects();
  renderContact();
  document.getElementById('infoForm').addEventListener('submit', validateForm);
}

document.addEventListener('DOMContentLoaded', initPage);
