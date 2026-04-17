import { magizhtech,meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
    python
} from "../assets/icons";

export const skills = [
    {
        imageUrl: python,
        name: "Python",
        type: "Backend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
   
 
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
   
];

export const experiences = [
    {
        title: "Python Developer Intern",
        company_name: "Magizh Technologies",
        icon: magizhtech,
        iconBg: "#accbe1",
        date: "October 2025 - March 2026",
        points: [
            "Project: Real-Time Dashboard with FastAPI and React",
            "Built scalable backend services using FastAPI, ensuring rapid API responses",
            "Designed dynamic frontends with React, integrating real-time updates via WebSockets",
            "Deployed using Docker and Redis, boosting performance and scalability",
        ],
    }
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/santhoshkumar7507',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://linkedin.com/in/santhosh-kumar-s-1934022b7',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Task Manager Application',
        description: 'Developed a full-stack task management application with a responsive UI using ReactJS and backend APIs using FastAPI. Implemented CRUD operations with MySQL for efficient task storage and management. Integrated user authentication and real-time task status updates for improved user experience.',
        link: 'https://github.com/santhoshkumar7507',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Job Portal Web Application',
        description: 'Developed a full-stack job portal with a responsive frontend using ReactJS and backend APIs using FastAPI. Created a portal where users can register, login, and apply for jobs. Admin panel implemented for posting and managing job listings.',
        link: 'https://github.com/santhoshkumar7507',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'E-Commerce Website',
        description: 'Developed a full-stack e-commerce platform with a responsive UI using ReactJS and backend using Node.js and Express.js. Implemented product management, cart functionality, and order processing with MongoDB for data storage. Integrated user authentication and secure checkout features to enhance user experience.',
        link: 'https://github.com/santhoshkumar7507',
    }
];