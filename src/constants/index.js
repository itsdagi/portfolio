import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  qgis,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Experience", // Changed title to "Experience"
  },
  {
    id: "education", // Added Education link
    title: "Education",
  },
  {
    id: "projects", // Added new link for Projects
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
    
  },
  {
    id: "Blog",
    title: "Blog",
    external: true,
    link: "https://dagim.notion.site/?pvs=4"
  },
];

const services = [
  {
    title: "Machine Learning", // Updated title
    icon: web, // Icon is a placeholder (originally 'web')
  },
  {
    title: "Data Analysis & Visualization", // Updated title
    icon: mobile, // Icon is a placeholder (originally 'mobile')
  },
  {
    title: "AI Development", // Updated title
    icon: backend, // Icon is a placeholder (originally 'backend')
  },
  {
    title: "Big Data Technologies", // Updated title
    icon: creator, // Icon is a placeholder (originally 'creator')
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "qgis",
    icon: qgis,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Data Science ",
    company_name: "Addis Ababa university",
    icon: starbucks,
    iconBg: "#2D3748", // Reverted to hex: ds-secondary-bg
    date: "September 2024 - June 2026",
    points: [
      "Currently pursuing a Master's degree in Data Science, focusing on advanced data analysis, machine learning, and AI applications.",
      "Engaged in research projects involving predictive modeling and data visualization using Python and R.",
      "Collaborating with faculty and peers on data-driven projects to solve real-world problems.",
      "Participating in seminars and workshops to enhance skills in data science methodologies and tools.",
    ],
  },
  {
    title: "Computer Science",
    company_name: "Hawassa University",
    icon: tesla,
    iconBg: "#3182CE", // Reverted to hex: ds-accent
    date: "Sep 2018 - Aug 2022",
    points: [
      "Studied core computer science concepts, including algorithms, data structures, and software engineering principles.",
      "Developed proficiency in programming languages such as Java, and C++ through coursework and projects.",
      
    ],
  },
  
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Semantic Book Recommender",
    description: "An AI-powered system leveraging OpenAI's language models to provide intelligent book recommendations based on semantic understanding and user intent.",
    tags: [
      { name: "Python", color: "text-ds-accent" },
      { name: "Jupyter Notebook", color: "text-ds-highlight" },
      { name: "OpenAI API", color: "text-ds-highlight" },
      { name: "NLP", color: "text-ds-accent" },
    ],
    image: "https://images.unsplash.com/photo-1610282475397-fa89b00c4d5f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    source_code_link: "https://github.com/itsdagi/semantic-book-recommender",
  },
  {
    name: "NeuroDrive AI Simulator",
    description: "Explore AI for autonomous driving with this open-source simulator. Interactively learn Neural Networks, KNN, and Decision Trees in a Pygame environment.",
    tags: [
      { name: "Python", color: "text-ds-accent" },
      { name: "Pygame", color: "text-ds-highlight" },
      { name: "Neural Networks", color: "text-ds-accent" },
      { name: "Machine Learning", color: "text-ds-highlight" },
    ],
    image: "https://images.unsplash.com/photo-1545987796-200677ee1011?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    source_code_link: "https://github.com/itsdagi/neurodrive_ai",
  },
  {
    name: "HIV Awareness Modeling",
    description: "Statistical analysis of HIV awareness using R, employing cross-validation and bootstrap methods to ensure model robustness and reliability.",
    tags: [
      { name: "R", color: "text-ds-accent" },
      { name: "Statistics", color: "text-ds-highlight" },
      { name: "Data Modeling", color: "text-ds-accent" },
    ],
    image: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    source_code_link: "https://github.com/itsdagi/HIV_Awareness_Modeling_CV_Bootstrap",
  },
  {
    name: "Worldometer Data Scraper",
    description: "Automated web scraping project using Python and Beautiful Soup to extract and compile historical world population data from Worldometer.",
    tags: [
      { name: "Python", color: "text-ds-accent" },
      { name: "Beautiful Soup", color: "text-ds-highlight" },
      { name: "Web Scraping", color: "text-ds-accent" },
    ],
    image: "https://raw.githubusercontent.com/itsdagi/worldometer-scraped-data/main/Yearly-Population-change-and-.png",
    source_code_link: "https://github.com/itsdagi/worldometer-scraped-data",
  },
  {
    name: "Population Trends Visualization",
    description: "Visualizing global population trends with Python, creating insightful line graphs to illustrate demographic changes over time.",
    tags: [
      { name: "Python", color: "text-ds-accent" },
      { name: "Pandas", color: "text-ds-highlight" },
      { name: "Matplotlib", color: "text-ds-highlight" },
      { name: "Data Visualization", color: "text-ds-accent" },
    ],
    image: "https://images.unsplash.com/photo-1705646742193-d0ffd590193b?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    source_code_link: "https://github.com/itsdagi/World-population-line_graph-visualizations-python",
  },
  {
    name: "Ethiopian PM2.5 Air Quality Analysis",
    description: "Trend analysis of PM2.5 air quality data in Ethiopia for the year 2018, utilizing R for statistical insights and visualization.",
    tags: [
      { name: "R", color: "text-ds-accent" },
      { name: "Data Analysis", color: "text-ds-highlight" },
      { name: "Environmental Science", color: "text-ds-accent" },
    ],
    image: "https://images.unsplash.com/photo-1578309756213-4ae60733ad6f?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    source_code_link: "https://github.com/itsdagi/Ethiopian-PM2.5-Trend-2018",
  },
];

export { services, technologies, experiences, testimonials, projects };
