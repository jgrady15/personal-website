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
  briviant,
  ivc,
  carrent,
  jobit,
  tripguide,
  threejs,
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
    title: "Software Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Fullstack Developer",
    icon: mobile,
  },
  {
    title: "Music Producer",
    icon: creator,
  },
];

// const certifications = [
//   {
//     name: "AWS SAA",
//     icon: AWS_SAA,
//   },
// ];

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
    // "#383E56" for inactive
    {
      // "#E6DEDD" for active
      title: "IT Support Specialist Intern",
      company_name: "Briviant",
      icon: briviant,
      iconBg: "#E6DEDD",
      date: "Oct 2021 - Jun 2022",
      points: [
        "Worked alongside Helpdesk team to triage, diagnose, and resolve end-user issues on physical and virtual macOS machines",
        "Conducted server troubleshooting for RDP Protocol connection issues for end-user side, and resolving OS level restriction issues affecting end-user experience",
        "Developed Shell scripts in BASH automating processes like internal hard disk verification for critical system updates and streamlining user verification process for our user migration project raising overall team efficiency by 30%",
        "Spearheaded new system and network documentation outlining best practices for configuration and deployment of new server builds for our in-house data center",
        "Performed Acceptance Testing for system and network configuration of macOS and VMWare ESXi server builds prior to deployment adhering to company standards and optimal functionality",
      ],
    },
  {
    title: "Computer Science Lab Tutor",
    company_name: "Irvine Valley College",
    icon: ivc,
    iconBg: "#E6DEDD",
    date: "Aug 2018 - Mar 2020",
    points: [
      "Taught software engineering practices and the fundamentals of Object Oriented Design in C++.",
      "Tutored data structure algorithms through drawn diagrams and code snippets in Python and C++.",
      "Analyzed run-time and space complexity of DS algorithms using Big O notation.",
    ],
  },
];

const projects = [
  {
    name: "Pair Smart",
    description:
      "A client-side app powered by ChatGPT that pulls stock information from Yahoo! Finance and performs complex quantitative algorithms in an attempt to find suitable pairs to perform pairs trading strategies.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "c++",
        color: "blue-text-gradient",
      },
      {
        name: "chatgpt",
        color: "green-text-gradient",
      },
      {
        name: "chatgpt",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Personal Portfolio",
    description:
      "The code repo behind this website, I coded this website to showcase my personal skills, interests, and projects for potential employment.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "threejs",
        color: "blue-text-gradient",
      },
      {
        name: "aws",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/jgrady15/fruit_shop",
  },
  {
    name: "Fruit Shop",
    description:
      "A full-stack web-based platform that lets users browse through a catalog of the freshest fruits, lets them add to their own customized cart, and allows secure real-time payment verification through Stripe.",
    tags: [
      {
        name: "next.js",
        color: "blue-text-gradient",
      },
      {
        name: "sanity",
        color: "green-text-gradient",
      },
      {
        name: "stripe",
        color: "green-text-gradient",
      },
      {
        name: "chakra",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/jgrady15/fruit_shop",
  },
  {
    name: "Pacman Portals",
    description:
      "A client-side application that replicates the Pacman game and adds portals for you to use. You have an orange portal and a blue portal that you can aim at walls, and it lets you travel between the two points. Highest score is saved.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "pygame",
        color: "green-text-gradient",
      },
      {
        name: "git",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/eddierayo-156/CPSC-386-Pacman",
  },
];

export { services, technologies, experiences, projects };