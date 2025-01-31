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
  carrent,
  jobit,
  tripguide,
  threejs,
  krish,
  sarvesh,
  gagan,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Development",
    icon: web,
  },
  {
    title: "Mobile App Development",
    icon: mobile,
  },
  {
    title: "Backend Development",
    icon: backend,
  },
  {
    title: "Content Creation",
    icon: creator,
  },
  {
    title: "SEO Optimization",
    icon: backend,
  },
  {
    title: "Digital Marketing",
    icon: creator,
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
    title: "Frontend Developer",
    points: [
      "Developed responsive websites using HTML, CSS, and JavaScript to deliver high-quality user experiences.",
      "Collaborated with design teams to create clean and modern web interfaces.",
      "Optimized websites for performance, ensuring fast loading times and smooth user interaction.",
    ],
  },
  {
    title: "Mobile App Developer",
    points: [
      "Built and maintained high-performance mobile applications using React Native.",
      "Worked closely with cross-functional teams to deliver seamless user experiences.",
      "Focused on enhancing app performance and user engagement.",
    ],
  },
  {
    title: "Web Development Specialist",
    points: [
      "Developed user-friendly e-commerce websites for small and medium businesses.",
      "Ensured websites were mobile-optimized and integrated with payment systems.",
      "Collaborated with marketing teams to integrate SEO-friendly content strategies.",
    ],
  },
  {
    title: "Full Stack Developer",
    points: [
      "Led full-stack development efforts for web and mobile applications using modern technologies like React and Node.js.",
      "Collaborated with clients to understand business needs and provided technical solutions.",
      "Implemented secure and scalable backend services using MongoDB and Node.js.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "At Unipitch, we truly push the boundaries of creativity and technology. We collaborate seamlessly as a team to create exceptional projects for our clients.",
    name: "Gagandeep Ramola",
    designation: "Lead Developer",
    company: "Unipitch",
    image: gagan,
  },
  {
    testimonial:
      "The culture at Unipitch is one of constant learning and innovation. We all strive to help each other grow and achieve our best work. It's an amazing place to work.",
    name: "Sarvesh Yadav",
    designation: "Content Strategist",
    company: "Unipitch",
    image: sarvesh,
  },
  {
    testimonial:
      "Working at Unipitch means collaborating with an incredible team that values creativity, integrity, and excellence. I am proud of what we accomplish together.",
    name: "Krish Dulwani",
    designation: "Full Stack Developer",
    company: "Unipitch",
    image: krish,
  },
];

const projects = [
  {
    name: "Unipitch Website",
    description:
      "A beautifully designed website for Unipitch showcasing our IT services, portfolio, and capabilities in website development, content creation, and more.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/yourrepo",
  },
  {
    name: "Client Dashboard",
    description:
      "A secure platform for clients to manage projects, track progress, and communicate with our team, designed to improve collaboration and project management.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/yourrepo",
  },
  {
    name: "Content Management System",
    description:
      "A custom CMS to help businesses manage and edit content across multiple platforms, streamlining workflow and enhancing productivity.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/yourrepo",
  },
];

export { services, technologies, experiences, testimonials, projects };
