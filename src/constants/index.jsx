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
import service7 from "../assets/images/service/services-icon-7.svg";
import { client01, client02, client03 } from "@/assets/images/clients";
import { FiFileText } from "react-icons/fi";

export const navLinks = [
  {
    id: 0,
    name: "home",
  },

  {
    id: 1,
    name: "services",
  },
  {
    id: 2,
    name: "projects",
  },
  {
    id: 3,
    name: "skills",
  },
  {
    id: 4,
    name: "testmoinals",
  },
  {
    id: 5,
    name: "pages",
    pageLinks: [
      {
        id: 0,
        title: "about",
        href: "about",
      },
      {
        id: 1,
        title: "developer",
        href: "developer",
      },
      {
        id: 2,
        title: "graphic designer",
        href: "graphic-designer",
      },
    ],
  },
  {
    id: 6,
    name: "contact",
  },
];

export const services = [
  {
    id: 0,
    icon: service1,
    color: "#ffb27a",
    title: "UX, UI Design",
    descr: `Strategy formulation is built on "the match between all organisation resources and skills based program.`,
  },
  {
    id: 1,
    icon: service2,
    color: "#8bc7ff",
    title: "Web Design",
    descr: `Strategy formulation is built on "the match between all organisation resources and skills based program.`,
  },
  {
    id: 2,
    icon: service3,
    color: "#d083ff",

    title: "UX Research",
    descr: `Strategy formulation is built on "the match between all organisation resources and skills based program.`,
  },
  {
    id: 3,
    icon: service4,
    color: "#ffb27a",

    title: "Security",
    descr: `Strategy formulation is built on "the match between all organisation resources and skills based program.`,
  },
  {
    id: 4,
    icon: service5,
    color: "#8bc7ff",

    title: "Mobile Modern",
    descr: `Strategy formulation is built on "the match between all organisation resources and skills based program.`,
  },
];
export const projects = [
  {
    id: 0,
    img: hoobank,
    title: "Hoobank",
    domain: "http://",
    href: "http://",
    description:
      "The Next Generation Payment Method. Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. We examine annual percentage rates, annual fees.",
    colors: ["#000510", "#3dc3d5", "#93b4bc", "#aaf0f1"],
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
        tools: ["NextJs", "Talwind Css", "Framer Motion", "Management"],
        hours: 5,
        design: "Js Mastry",
        coding: "Saeed Altout",
      },
    ],

    showAsTheBest: true,
  },
  {
    id: 1,
    img: seo,
    title: "Seo",
    href: "http://",
    description: "Discover More on Latest SEO Trends",
    showAsTheBest: true,
    moreDataProject: [
      {
        id: 0,
        tags: ["Market"],
        tools: ["ReactJs", "NextJs", "Talwind Css", "Framer Motion"],
        hours: 3.5,
        design: "Js Mastry",
        coding: "Saeed Altout",
      },
    ],
    colors: ["#ffb27a", "#8bc7ff", "#d083ff", "#95ff83"],
  },
  {
    id: 2,
    img: portfolio_3D,
    title: "portfolio_3D",
    href: "http://",
    description: "Precise Data Analysis & Prediction",
    showAsTheBest: false,
    moreDataProject: [
      {
        id: 0,
        tags: ["Market", "Design"],
        tools: ["ReactJs", "NextJs", "Talwind Css", "Framer Motion"],
        hours: 3.5,
        design: "Js Mastry",
        coding: "Saeed Altout",
      },
    ],
    colors: ["#ffb27a", "#8bc7ff", "#d083ff", "#95ff83"],
  },
  {
    id: 3,
    img: portfolio,
    title: "portfolio",
    href: "http://",
    description: "Precise Data Analysis & Prediction",
    showAsTheBest: false,
    moreDataProject: [
      {
        id: 0,
        tags: ["Market", "Design"],
        tools: ["ReactJs", "NextJs", "Talwind Css", "Framer Motion"],
        hours: 3.5,
        design: "Js Mastry",
        coding: "Saeed Altout",
      },
    ],
    colors: ["#ffb27a", "#8bc7ff", "#d083ff", "#95ff83"],
  },
  {
    id: 2,
    img: devbook,
    title: "devbook",
    href: "http://",
    description: "Precise Data Analysis & Prediction",
    showAsTheBest: true,
    moreDataProject: [
      {
        id: 0,
        tags: ["Market", "Design"],
        tools: ["ReactJs", "NextJs", "Talwind Css", "Framer Motion"],
        hours: 3.5,
        design: "Js Mastry",
        coding: "Saeed Altout",
      },
    ],
    colors: ["#ffb27a", "#8bc7ff", "#d083ff", "#95ff83"],
  },
];
const countProjects = projects.length;
export const states = [
  {
    id: 0,
    name: "Happy Clients",
    state: "+24",
    color: "#ffb27a",
    icon: <FaUsers />,
  },
  {
    id: 1,
    name: "Projects Complated",
    state: `+${countProjects}`,
    color: "#8bc7ff",
    icon: <FaFolder />,
  },
  {
    id: 2,
    name: "Services",
    state: "+10",
    color: "#d083ff",
    icon: <FaHeadphones />,
  },
  {
    id: 3,
    name: "Years Experience",
    state: "+5",
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
    title: "ReactJs",
    percentg: "95%",
  },
  {
    id: 1,
    title: "NextJs",
    percentg: "80%",
  },
  {
    id: 2,
    title: "Talwind Css",
    percentg: "90%",
  },
  {
    id: 3,
    title: "Framer Motion",
    percentg: "50%",
  },
  {
    id: 4,
    title: "Api",
    percentg: "40%",
  },
  {
    id: 5,
    title: "Reducx",
    percentg: "70%",
  },
  {
    id: 6,
    title: "UX & UI ",
    percentg: "60%",
  },
  {
    id: 7,
    title: "Figma",
    percentg: "90%",
  },
  {
    id: 8,
    title: "React Native",
    percentg: "30%",
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
        name: "Content",
        link: "https://www.hoobank.com/content/",
      },
      {
        name: "How it Works",
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
    id: "social-media-1",
    icon: <FaInstagram />,
    link: "https://www.instagram.com/",
  },
  {
    id: "social-media-2",
    icon: <FaFacebook />,
    link: "https://www.facebook.com/",
  },
  {
    id: "social-media-3",
    icon: <FaGithub />,
    link: "https://www.twitter.com/",
  },
  {
    id: "social-media-4",
    icon: <FaWhatsapp />,
    link: "https://www.linkedin.com/",
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
