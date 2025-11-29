
import os_sim from "../assets/os_sim.png";
import contact_book from "../assets/contact_book.png";
import healthcare from "../assets/healthcare.png";
import dalgona from "../assets/dalgona.png";
import ecommerce from "../assets/ecommerce.png";

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
    {
        id: "blog",
        title: "Blog",
        path: "/blog",
    },
];

const services = [
    {
        title: "Systems Programmer",
        icon: "backend", // Placeholder
    },
    {
        title: "Security Researcher",
        icon: "creator", // Placeholder
    },
    {
        title: "C++ Developer",
        icon: "mobile", // Placeholder
    },
    {
        title: "Full Stack Developer",
        icon: "web", // Placeholder
    },
];

const technologies = [
    {
        name: "C",
        icon: "c", // Placeholder
        progress: 70,
    },
    {
        name: "C++",
        icon: "cpp", // Placeholder
        progress: 85,
    },
    {
        name: "Python",
        icon: "python", // Placeholder
        progress: 80,
    },
    {
        name: "Java",
        icon: "java", // Placeholder
        progress: 60,
    },
    {
        name: "SQL",
        icon: "sql", // Placeholder
        progress: 75,
    },
    {
        name: "Bash",
        icon: "bash", // Placeholder
        progress: 65,
    },
    {
        name: "React JS",
        icon: "reactjs", // Placeholder
        progress: 50,
    },
];

const hobbies = [
    {
        name: "Coding",
        icon: "code",
    },
    {
        name: "Music",
        icon: "music",
    },
    {
        name: "Sleeping",
        icon: "sleep",
    },
    {
        name: "Cyber Security",
        icon: "security",
    },
];

const education = [
    {
        degree: "Bachelor of Science in Software Engineering",
        school: "FAST NUCES",
        date: "Present",
        grade: "5th Semester",
        desc: "Focusing on Systems Programming, Data Structures, and Algorithms.",
        points: [
            "Studying core computer science concepts including OS, DSA, and Database Systems.",
            "Developing projects in C, C++, and Python.",
            "Participating in Cyber Security workshops (TryHackMe, HackTheBox).",
        ],
    },
];

const projects = [
    {
        name: "OS Simulation",
        description:
            "A comprehensive simulation of an operating system kernel, implemented in C with a Qt GUI. Models process scheduling (MLFQ), memory management, and synchronization using semaphores.",
        tags: [
            {
                name: "c++",
                color: "blue-text-gradient",
            },
            {
                name: "qt",
                color: "green-text-gradient",
            },
            {
                name: "os-kernel",
                color: "pink-text-gradient",
            },
        ],
        image: os_sim,
        source_code_link: "https://github.com/zaidhassan2/Operating-System",
    },
    {
        name: "Mini Instagram",
        description:
            "A console-based social networking application demonstrating custom data structures (Graph, BST, Hash Table) from scratch without STL containers.",
        tags: [
            {
                name: "c++",
                color: "blue-text-gradient",
            },
            {
                name: "dsa",
                color: "green-text-gradient",
            },
            {
                name: "graphs",
                color: "pink-text-gradient",
            },
        ],
        image: contact_book,
        source_code_link: "https://github.com/zaidhassan2/Mini-Instagram",
    },
    {
        name: "Healthcare System",
        description:
            "Complete software architecture design for a multi-user Health Care System, featuring comprehensive UML diagrams (Class, Package, Deployment, Sequence).",
        tags: [
            {
                name: "uml",
                color: "blue-text-gradient",
            },
            {
                name: "architecture",
                color: "green-text-gradient",
            },
            {
                name: "visio",
                color: "pink-text-gradient",
            },
        ],
        image: healthcare,
        source_code_link: "https://github.com/zaidhassan2/Healthcare-System-SDA",
    },
    {
        name: "Dalgona Challenge",
        description:
            "Interactive command-line game built in Bash, featuring real-time input handling, process timing control, and leaderboard persistence.",
        tags: [
            {
                name: "bash",
                color: "blue-text-gradient",
            },
            {
                name: "shell-scripting",
                color: "green-text-gradient",
            },
            {
                name: "linux",
                color: "pink-text-gradient",
            },
        ],
        image: dalgona,
        source_code_link: "https://github.com/zaidhassan2/Dalgona-Challenge-game",
    },
    {
        name: "E-Commerce Prototype",
        description:
            "Foundational web application prototype with product display and user sign-up, demonstrating HTML5/CSS3 and responsive design principles.",
        tags: [
            {
                name: "html",
                color: "blue-text-gradient",
            },
            {
                name: "css",
                color: "green-text-gradient",
            },
            {
                name: "web",
                color: "pink-text-gradient",
            },
        ],
        image: ecommerce,
        source_code_link: "https://github.com/zaidhassan2/Amazon-Website", // Added link
    },
];

export { services, technologies, projects, hobbies, education };
