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
    name: "Data Analysis with Python",
    description:
      "A project showcasing data analysis techniques using Python, including data cleaning, visualization, and statistical analysis.",
    tags: [
      {
        name: "python",
        color: "text-ds-accent", // Updated from blue-text-gradient
      },
      {
        name: "pandas",
        color: "text-ds-highlight", // Updated from green-text-gradient
      },
      {
        name: "matplotlib",
        color: "text-ds-highlight", // Updated from pink-text-gradient
      },
    ],
    image: "https://via.placeholder.com/300", // Replace with an actual image URL
    source_code_link: "https://github.com/itsdagi/data-analysis-python",
  },
  {
    name: "Machine Learning Models",
    description:
      "A collection of machine learning models implemented in Python, including regression, classification, and clustering algorithms.",
    tags: [
      {
        name: "machine learning",
        color: "text-ds-accent", // Updated from blue-text-gradient
      },
      {
        name: "scikit-learn",
        color: "text-ds-highlight", // Updated from green-text-gradient
      },
      {
        name: "numpy",
        color: "text-ds-highlight", // Updated from pink-text-gradient
      },
    ],
    image: "https://via.placeholder.com/300", // Replace with an actual image URL
    source_code_link: "https://github.com/itsdagi/machine-learning-models",
  },
  {
    name: "Deep Learning with TensorFlow",
    description:
      "A project demonstrating deep learning techniques using TensorFlow, including neural networks and computer vision applications.",
    tags: [
      {
        name: "deep learning",
        color: "text-ds-accent", // Updated from blue-text-gradient
      },
      {
        name: "tensorflow",
        color: "text-ds-highlight", // Updated from green-text-gradient
      },
      {
        name: "keras",
        color: "text-ds-highlight", // Updated from pink-text-gradient
      },
    ],
    image: "https://via.placeholder.com/300", // Replace with an actual image URL
    source_code_link: "https://github.com/itsdagi/deep-learning-tensorflow",
  },
];

export { services, technologies, experiences, testimonials, projects };
