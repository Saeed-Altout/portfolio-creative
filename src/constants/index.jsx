import react from "../assets/images/skills/react.png";
import api from "../assets/images/skills/api.png";
import vercel from "../assets/images/skills/vercel.svg";
import css from "../assets/images/skills/css.png";
import xd from "../assets/images/skills/xd.png";
import framer from "../assets/images/skills/framer.png";
import nextjs from "../assets/images/skills/nextjs.jpg";
import expo from "../assets/images/skills/expo.jpg";
import figma from "../assets/images/skills/figma.png";
import tailwind from "../assets/images/skills/tailwind.png";
import git from "../assets/images/skills/git.png";
import html from "../assets/images/skills/html.png";
import javascript from "../assets/images/skills/javascript.png";
import node from "../assets/images/skills/node.png";
import python from "../assets/images/skills/python.png";
import redux from "../assets/images/skills/redux.png";
import sass from "../assets/images/skills/sass.png";
import typescript from "../assets/images/skills/typescript.png";
import {
  FaCity,
  FaPhone,
  FaEnvelope,
  FaInstagram,
  FaFacebook,
  FaGithub,
  FaWhatsapp,
  FaBehance,
  FaDribbble,
  FaHeart,
  FaLocationArrow,
  FaUniversity,
  FaCalendar,
  FaTextWidth,
  FaLine,
  FaGenderless,
  FaUser,
  FaHome,
  FaTools,
  FaLinkedinIn,
  FaLinkedin,
  FaTelegram,
} from "react-icons/fa";
import { FaFolder, FaHeadphones, FaPlus, FaUsers } from "react-icons/fa";
import {
  hoobank,
  portfolio_3D,
  seo,
  devbook,
  portfolio,
} from "../assets/images/projects/index";

import service1 from "../assets/images/service/services-icon-1.svg";
import service2 from "../assets/images/service/services-icon-2.svg";
import service3 from "../assets/images/service/services-icon-3.svg";
import service4 from "../assets/images/service/services-icon-4.svg";
import service5 from "../assets/images/service/services-icon-5.svg";
import service6 from "../assets/images/service/services-icon-6.svg";
import service7 from "../assets/images/service/services-icon-7.svg";
import service8 from "../assets/images/service/services-icon-8.svg";
import { client01, client02, client03 } from "@/assets/images/clients";
import { FiFileText, FiSettings } from "react-icons/fi";

export const navLinks = [
  {
    name: "home",
    href: "/",
    icon: <FaHome />,
  },
  {
    name: "about",
    href: "/about",
    icon: <FaUser />,
  },
  {
    name: "services",
    href: "/#services",
    icon: <FaHeadphones />,
  },
  {
    name: "projects",
    href: "/#projects",
    icon: <FaFolder />,
  },
  {
    name: "skills",
    href: "/#skills",
    icon: <FaTools />,
  },
  {
    name: "clients",
    href: "/#clients",
    icon: <FaUsers />,
  },

  {
    name: "contact",
    href: "/#contact",
    icon: <FaEnvelope />,
  },
];

export const services = [
  {
    icon: service1,
    color: "#ffb27a",
    title: "UX, UI Design",
    descr: `Strategy formulation is built. consectetur adipiscing elit`,
  },
  {
    icon: service2,
    color: "#8bc7ff",
    title: "Web Design",
    descr: `Strategy formulation is built. consectetur adipiscing elit`,
  },
  {
    icon: service3,
    color: "#d083ff",
    title: "UX Research",
    descr: `Strategy formulation is built. consectetur adipiscing elit`,
  },

  {
    icon: service4,
    color: "#ffb27a",
    title: "Security",
    descr: `Strategy formulation is built. consectetur adipiscing elit`,
  },
  {
    icon: service5,
    color: "#8bc7ff",
    title: "Mobile Modern",
    descr: `Strategy formulation is built. consectetur adipiscing elit`,
  },
  {
    icon: service6,
    color: "#ffb27a",
    title: "Team Friendly",
    descr: `Strategy formulation is built. consectetur adipiscing elit`,
  },
  {
    icon: service7,
    color: "#d083ff",
    title: "Code Clean",
    descr: `Strategy formulation is built. consectetur adipiscing elit`,
  },
  {
    icon: service8,
    color: "#4a69d8",
    title: "Fast Responsev",
    descr: `Strategy formulation is built. consectetur adipiscing elit`,
  },
];

export const dataProjects = [
  {
    img: hoobank,
    title: "hoobank",
    domain: "https://github.com/Saeed-Altout/hoobank",
    href: "https://hoobank-sd.vercel.app",
    shortDesc:
      "Cryptocurrencies are an innovative system that changes the way we handle",
    description: [
      `
      Cryptocurrencies are an innovative system that changes the way we handle financial transactions, providing new levels of transparency and security.
      On the web, websites can provide instant updates and live information about these cryptocurrencies, making them vital platforms for price tracking and market trades.`,
      `Cryptocurrencies and the web have become inextricably linked to each other, with each fueling the development and progress of the other.`,
      `
      #HooBank is a modern website for a new generation of payment and transfer methods that relies on the best technologies and tools up to the present time in building and designing websites.`,
    ],
    price: "free",
    category: "web",
    colors: ["#000510", "#3dc3d5", "#93b4bc", "#aaf0f1"],
    favorite: true,

    moreDataProject: [
      {
        coding: "Saeed Altout",
        design: "Js Mastry",
        hours: "5h",
        tools: ["NextJs", "Talwind Css", "Framer Motion"],
        links: [
          "https://github.com/Saeed-Altout/hoobank",
          "https://hoobank-sd.vercel.app",
        ],
      },
    ],
  },
  {
    img: devbook,
    title: "devbook",
    domain: "https://github.com/Saeed-Altout/devbook",
    href: "https://devbook-sd.vercel.app",
    shortDesc:
      "Online book publishing platforms are ideal for helping authors publish",
    description: [
      `Online book publishing platforms are ideal for helping authors publish their work easily and effectively.  With the spread of the Internet and the decline in publishing and paper distribution costs, it has become possible for new and independent authors to reach a wide audience of potential readers around the world.`,
      `Are you one of the dreamy authors? 
      Do you have a book that you are unable to print and need to publish it? 😔`,
      `We provide you with a #Devbook website through which you can publish your book, information about the book, and the most important points you aim to convey through your own book. Just contact us and enjoy your own website. 🤩`,
    ],
    price: "free",
    category: "web",
    colors: ["#ec6523", "#f6f8fc", "#030303"],
    favorite: true,

    moreDataProject: [
      {
        coding: "Saeed Altout",
        design: "Js Mastry",
        hours: "2.5h",
        tools: ["NextJs", "Talwind Css", "Framer Motion"],
        links: [
          "https://github.com/Saeed-Altout/devBook",
          "https://devbook-sd.vercel.app",
        ],
      },
    ],
  },
];

export const knowleadg = [
  {
    title: "backend",
    skills: [
      {
        icon: python,
        title: "Python",
        percentg: "40%",
      },

      {
        icon: node,
        title: "NodeJs",
        percentg: "10%",
      },
    ],
  },
  {
    title: "frontend",
    skills: [
      {
        icon: html,
        title: "Html",
        percentg: "100%",
      },
      {
        icon: css,
        title: "Css",
        percentg: "90%",
      },
      {
        icon: javascript,
        title: "Javascript",
        percentg: "90%",
      },
      {
        icon: typescript,
        title: "Typescript",
        percentg: "70%",
      },
      {
        icon: sass,
        title: "Sass",
        percentg: "85%",
      },
      {
        icon: react,
        title: "ReactJs",
        percentg: "95%",
      },
      {
        icon: nextjs,
        title: "NextJs",
        percentg: "80%",
      },
      {
        icon: tailwind,
        title: "Talwind Css",
        percentg: "90%",
      },
    ],
  },
  {
    title: "mobile",
    skills: [
      {
        icon: react,
        title: "React Native",
        percentg: "30%",
      },
      {
        icon: expo,
        title: "Expo",
        percentg: "60%",
      },
    ],
  },
  {
    title: "tools",
    skills: [
      {
        icon: api,
        title: "Api",
        percentg: "40%",
      },
      {
        icon: redux,
        title: "Reducx",
        percentg: "70%",
      },
      {
        icon: framer,
        title: "Framer Motion",
        percentg: "50%",
      },
      {
        icon: git,
        title: "Git",
        percentg: "80%",
      },
    ],
  },
  {
    title: "Ux & UI",
    skills: [
      {
        icon: xd,
        title: "Xd",
        percentg: "60%",
      },
      {
        icon: figma,
        title: "Figma",
        percentg: "90%",
      },
    ],
  },
];

export const offers = [];
const countProjects = dataProjects.length;
const countServices = services.length;
const experiences = new Date().getFullYear() - 2019;
const clientsHappy = 0;
const skills = offers.length;
export const states = [
  {
    id: 0,
    name: "Happy Clients",
    state: `${clientsHappy > 1 ? `+${clientsHappy - 1}` : `${clientsHappy}_0`}`,
    color: "#ffb27a",
    icon: <FaUsers />,
  },
  {
    id: 1,
    name: "Projects Complated",
    state: `${countProjects > 1 ? `+${countProjects - 1}` : countProjects}`,
    color: "#8bc7ff",
    icon: <FaFolder />,
  },
  {
    id: 2,
    name: "Services",
    state: `${countServices > 1 ? `+${countServices - 1}` : countServices}`,
    color: "#d083ff",
    icon: <FaHeadphones />,
  },
  {
    id: 3,
    name: "Years Experience",
    state: `${experiences > 1 ? `+${experiences - 1}` : experiences}`,
    color: "#95ff83",
    icon: <FaPlus />,
  },
  {
    id: 4,
    name: "Skills",
    state: `${skills > 1 ? `+${skills - 1}` : skills}`,
    color: "#4a69d8",
    icon: <FaPlus />,
  },
];

export const clientsComment = [
  {
    id: 0,
    comment: `Lorem Ipsum is simply dummy text of the printing and typesetting
  industry. Lorem Ipsum has been the industry's standard dummy
  text ever since the 1500s, when an unknown printer took a galley
  of type and scrambled it to make a type specimen book. It has
  survived not only five`,
    img: client01,
  },
  {
    id: 1,
    comment: `There are many variations of passages of Lorem Ipsum available,
    but the majority have suffered alteration in some form, by
    injected humour, or randomised words which don't look even
    slightly believable. If you are going to use a passage of Lorem
    Ipsum, you need to be sure there
  `,
    img: client02,
  },
  {
    id: 2,
    comment: `Jack is really good designer. I’m happy to work with him. dolor
    sit amet, consectetur adipiscing elit, sed do eiusmod tempor
    incididunt ut labore et dolore magna aliqua.Contrary to popular
    belief, Lorem Ipsum is not simply random text. It has roots in a
    piece of classical Latin literature.
  
  `,
    img: client03,
  },
];

export const dataInputs = [
  {
    id: 0,
    type: "text",
    name: "Name",
    placeholder: "Your Name",
  },
  {
    id: 1,
    type: "text",
    name: "Surname",
    placeholder: "Your Surname",
  },
  {
    id: 2,
    type: "email",
    name: "E-mail",
    placeholder: "Your E-mail",
  },
  {
    id: 3,
    type: "text",
    name: "Subject",
    placeholder: "Your Subject",
  },
];

export const footerLinks = [
  {
    title: "Useful Links",
    links: [
      {
        name: "Freepick",
        link: "https://www.hoobank.com/content/",
      },
      {
        name: "Flat icons",
        link: "https://www.hoobank.com/how-it-works/",
      },
      {
        name: "Create",
        link: "https://www.hoobank.com/create/",
      },
      {
        name: "Explore",
        link: "https://www.hoobank.com/explore/",
      },
      {
        name: "Terms & Services",
        link: "https://www.hoobank.com/terms-and-services/",
      },
    ],
  },
  {
    title: "Community",
    links: [
      {
        name: "Help Center",
        link: "https://www.hoobank.com/help-center/",
      },
      {
        name: "Partners",
        link: "https://www.hoobank.com/partners/",
      },
      {
        name: "Suggestions",
        link: "https://www.hoobank.com/suggestions/",
      },
      {
        name: "Blog",
        link: "https://www.hoobank.com/blog/",
      },
      {
        name: "Newsletters",
        link: "https://www.hoobank.com/newsletters/",
      },
    ],
  },
  {
    title: "Partner",
    links: [
      {
        name: "Our Partner",
        link: "https://www.hoobank.com/our-partner/",
      },
      {
        name: "Become a Partner",
        link: "https://www.hoobank.com/become-a-partner/",
      },
    ],
  },
];

export const socialMedia = [
  {
    icon: <FaInstagram />,
    link: "https://www.instagram.com/saeedaltoutpro",
  },
  {
    icon: <FaFacebook />,
    link: "https://www.facebook.com/saeed.altout.587?mibextid=ZbWKwL",
  },
  {
    icon: <FaGithub />,
    link: "https://github.com/Saeed-Altout",
  },
  {
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com/in/saeed-altout-11596528a?trk=contact-info",
  },
  {
    icon: <FaTelegram />,
    link: "https://t.me/saeedaltoutpro",
  },
];

export const dataMe = [
  {
    icon: <FaUser />,
    title: "Position",
    text: "Frontend & Mobile Developer",
  },
  {
    icon: <FaCalendar />,
    title: "Age",
    text: "23",
  },
  {
    icon: <FaLocationArrow />,
    title: "Location",
    text: "Damascus, Syria",
  },
  {
    icon: <FaUniversity />,
    title: "University",
    text: "Damascus University",
  },
  {
    icon: <FaHeart />,
    title: "Status",
    text: "Single",
  },
  {
    icon: <FaFacebook />,
    title: "Facebook",
    text: "Saeed Al-tout",
  },
  {
    icon: <FaInstagram />,
    title: "Instagram",
    text: "saeedaltoutsy",
  },
  {
    icon: <FaWhatsapp />,
    title: "Whatsapp",
    text: "+96340043810",
  },
  {
    icon: <FaEnvelope />,
    title: "E-mail",
    text: "saeedaltoutpro@gmail.com",
  },
  {
    icon: <FaGithub />,
    title: "Github",
    text: "https://github.com/Saeed-Altout",
  },
  {
    icon: <FaDribbble />,
    title: "Dribbble",
    text: "---",
  },
  {
    icon: <FaBehance />,
    title: "Behance",
    text: "---",
  },
];

export const colorsTheme = ["#ec6523", "#8bc7ff", "#d083ff", "#4a69d8"];
