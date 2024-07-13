import InstagramIcon from "./../public/assets/icons/instagram.svg";
import TiktokIcon from "./../public/assets/icons/tiktok.svg";
import TelegramIcon from "./../public/assets/icons/telegram.svg";
import FrontendIcon from "./../public/assets/company/document.svg";
import LeaderShipIcon from "./../public/assets/company/date.svg";
import ProblemSolvingIcon from "./../public/assets/company/user.svg";


const navLinks = [
  {
    id: "about",
    title: "Kompanyamiz",
  },
  {
    id: "work",
    title: "Mijozlarimiz bilan",
  },
  {
    id: "contact",
    title: "Forma",
  },
];

const services = [
  // {
  // 	title: "Full Stack Developer",
  // 	icon: web
  // },
  {
    title: "Dokumentlar qilish",
    icon: <FrontendIcon />,
  },
  {
    title: "Mijoz uchun real vaqtda",
    icon: <LeaderShipIcon />,
  },
  {
    title: "Birga bir Kansultatsya",
    icon: <ProblemSolvingIcon />,
  },
  // {
  //   title: "Freelancer",
  //   icon: <FreelancerIcon />,
  // },
  // {
  // 	title: "Backend Developer",
  // 	icon: backend
  // }
  // {
];


const experiences = [
  {
    title: "Azimmurodov Xurshed",
    company_name: "Green Card Lottery",
    images:[
      "/ozod.jpg"],
    icon: "/assets/green-card.png",
    iconBg: "#E6DEDD",
    date: "May 2023",
    points: [
      "Bizning Mijozimizga Green card chiqganlariga so'ng bir yil ham o'tmasdan Amerika Qo'shma Shtatlarga yo'l oldi .",
    ],
  },
  {
    title: "Narzullaev Ozod",
    company_name: "Green Card Lottery",
    images:[
     "/xurshed.jpg"],
    icon: "/assets/green-card.png",
    iconBg: "#E6DEDD",
    date: "May 2023",
    points: [
      "Bu yosh mijozimiz bir urunishtayoq green card chiqdi va u ham xozirda Amerika Qo'shma Shtatlarda yashayapti.",
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
    name: "FigPro",
    description:
      "FigPro is a web-based collaborative design tool similar to Figma, built using Next.js, TypeScript, Tailwind CSS, and LiveBlocks API, Fabric.js. With FigPro, teams can seamlessly collaborate on designing interfaces in real-time with a plethora of features.",
    tags: [
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "next.js",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
      {
        name: "fabricjs",
        color: "orange-text-gradient",
      },
      {
        name: "liveblocks",
        color: "yellow-text-gradient",
      },
    ],
  },
  {
    name: "GDSC Website",
    description:
      "Welcome to the official repository for the GDSC MVJCE Website, built with Next.js, Styled Components, and Prisma! This website serves as the central hub for all things tech-related at GDSC MVJCE. From insightful blog posts to incredible community projects, and from exciting tech events to getting to know our team, you'll find it all here.",
    tags: [
      {
        name: "next.js",
        color: "blue-text-gradient",
      },
      {
        name: "styled-components",
        color: "green-text-gradient",
      },
      {
        name: "three.js",
        color: "pink-text-gradient",
      },
      {
        name: "prisma",
        color: "orange-text-gradient",
      },
      {
        name: "framer-motion",
        color: "yellow-text-gradient",
      },
    ],
    image: "/assets/projects/gdsc-website.png",
    source_code_link: "https://github.com/GDSC-MVJCE/gdscmvjce-website.git",
    deployed_link: "https://gdscmvjce.tech/",
  },
  {
    name: "Facility Management System",
    description:
      "The Facility Management System is a comprehensive management solution developed using the MERN (MongoDB, Express.js, React, Node.js) stack. It allows users to book time slots in facilities and provides role-based access control for various functionalities.",
    tags: [
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
      {
        name: "node.js",
        color: "orange-text-gradient",
      },
      {
        name: "tanstack/react-query",
        color: "yellow-text-gradient",
      },
    ],
  },
];

const socials = [
  {
    id: "instagram",
    icon: <InstagramIcon />,
    link: "https://www.instagram.com/greencard_office1",
  },
  {
    id: "Telegram",
    icon: <TelegramIcon />,
    link: "https://t.me/GreenCard_office",
  },
  {
    id: "Tik tok",
    icon: <TiktokIcon />,
    link: "https://www.tiktok.com/@greencard_office",
  },
];

const heroTexts = [
  "Orzuyingiz ",
  500,
  "Sari",
  500,
  "Birinchi qadamni",
  500,
  "Biz bilan boshlang",
  500,
];

export {
  navLinks,
  services,
  experiences,
  testimonials,
  projects,
  socials,
  heroTexts,
};
