import react from "../assets/images/skills/react.png";
import api from "../assets/images/skills/api.png";
import vercel from "../assets/images/skills/vercel.svg";
import css from "../assets/images/skills/css.png";
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
    name: "testmoinals",
    href: "/#testmoinals",
    icon: <FaUsers />,
  },

  {
    name: "contact",
    href: "/#contact",
    icon: <FaEnvelope />,
  },
  {
    name: "github",
    href: "https://github.com/Saeed-Altout",
    icon: <FaGithub />,
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
    description:
      "Hoobank is a modern website for a new generation of payment and transfer methods",
    category: "web",
    price: "free",
    moreDataProject: [
      {
        id: 0,
        tags: [
          "Market",
          "Business",
          "Balance Transfer",
          "Paypal",
          "billing & invoicing",
        ],
        tools: ["NextJs", "Talwind Css", "Framer Motion"],
        hours: 5,
        design: "Js Mastry",
        coding: "Saeed Altout",
        links: [
          "https://github.com/Saeed-Altout/hoobank",
          "https://hoobank-sd.vercel.app",
        ],
      },
    ],

    colors: ["#000510", "#3dc3d5", "#93b4bc", "#aaf0f1"],
    favorite: true,
  },
  {
    img: seo,
    title: "seo",
    domain: "https://github.com/Saeed-Altout/hoobank",
    href: "https://hoobank-sd.vercel.app",
    description:
      "Hoobank is a modern website for a new generation of payment and transfer methods",
    category: "web",
    price: "free",
    moreDataProject: [
      {
        id: 0,
        tags: [
          "Market",
          "Business",
          "Balance Transfer",
          "Paypal",
          "billing & invoicing",
        ],
        tools: ["NextJs", "Talwind Css", "Framer Motion"],
        hours: 5,
        design: "Js Mastry",
        coding: "Saeed Altout",
        links: [
          "https://github.com/Saeed-Altout/hoobank",
          "https://hoobank-sd.vercel.app",
        ],
      },
    ],

    colors: ["#000510", "#3dc3d5", "#93b4bc", "#aaf0f1"],
    favorite: true,
  },
  {
    img: devbook,
    title: "devbook",
    domain: "https://github.com/Saeed-Altout/hoobank",
    href: "https://hoobank-sd.vercel.app",
    description:
      "Hoobank is a modern website for a new generation of payment and transfer methods",
    category: "web",
    price: "free",
    moreDataProject: [
      {
        id: 0,
        tags: [
          "Market",
          "Business",
          "Balance Transfer",
          "Paypal",
          "billing & invoicing",
        ],
        tools: ["NextJs", "Talwind Css", "Framer Motion"],
        hours: 5,
        design: "Js Mastry",
        coding: "Saeed Altout",
        links: [
          "https://github.com/Saeed-Altout/hoobank",
          "https://hoobank-sd.vercel.app",
        ],
      },
    ],

    colors: ["#000510", "#3dc3d5", "#93b4bc", "#aaf0f1"],
    favorite: true,
  },
];
const countProjects = dataProjects.length;
const countServices = services.length;
const experiences = new Date().getFullYear() - 2019;
const clientsHappy = 0;
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

export const offers = [
  {
    id: 0,
    icon: react,
    title: "ReactJs",
    percentg: "95%",
  },
  {
    id: 1,
    icon: react,
    title: "NextJs",
    percentg: "80%",
  },
  {
    id: 2,
    icon: tailwind,
    title: "Talwind Css",
    percentg: "90%",
  },
  {
    id: 3,
    icon: tailwind,
    title: "Framer Motion",
    percentg: "50%",
  },
  {
    id: 4,
    icon: api,
    title: "Api",
    percentg: "40%",
  },
  {
    id: 5,
    icon: redux,
    title: "Reducx",
    percentg: "70%",
  },
  {
    id: 6,
    icon: figma,
    title: "Xd",
    percentg: "60%",
  },
  {
    id: 7,
    icon: figma,
    title: "Figma",
    percentg: "90%",
  },
  {
    id: 8,
    icon: react,
    title: "React Native",
    percentg: "30%",
  },
  {
    id: 9,
    icon: html,
    title: "Html",
    percentg: "100%",
  },
  {
    id: 10,
    icon: css,
    title: "Css",
    percentg: "90%",
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
    id: 0,
    icon: <FaUser />,
    title: "Position",
    text: "Front-End Developer & Mobile Developer",
  },
  {
    id: 1,
    icon: <FaCalendar />,
    title: "Age",
    text: "23",
  },
  {
    id: 2,
    icon: <FaLocationArrow />,
    title: "Location",
    text: "Damascus, Syria",
  },
  {
    id: 3,
    icon: <FaUniversity />,
    title: "University",
    text: "Damascus University",
  },
  {
    id: 4,
    icon: <FaHeart />,
    title: "Status",
    text: "Single",
  },
  {
    id: 5,
    icon: <FaFacebook />,
    title: "Facebook",
    text: "Saeed Al-tout",
  },
  {
    id: 6,
    icon: <FaInstagram />,
    title: "Instagram",
    text: "saeedaltoutsy",
  },
  {
    id: 7,
    icon: <FaWhatsapp />,
    title: "Whatsapp",
    text: "+96340043810",
  },
  {
    id: 8,
    icon: <FaEnvelope />,
    title: "E-mail",
    text: "saeedaltoutpro@gmail.com",
  },
  {
    id: 9,
    icon: <FaGithub />,
    title: "Github",
    text: "---",
  },
  {
    id: 10,
    icon: <FaDribbble />,
    title: "Dribbble",
    text: "---",
  },
  {
    id: 11,
    icon: <FaBehance />,
    title: "Behance",
    text: "---",
  },
];

export const colorsTheme = [
  "#ccc",
  "#ffb27a",
  "#8bc7ff",
  "#d083ff",
  "#95ff83",
  "#4a69d8",
];
