import {
  Code2,
  Palette,
  Boxes,
  Route,
  Server,
  Zap,
  ShieldCheck,
  Database,
  Layers,
  GitBranch,
  Box,
  Send,
  Braces,
} from "lucide-react";

export const frontendSkills = [
  {
    name: "React",
    icon: Code2,
    description: "UI Library",
  },
  {
    name: "Tailwind CSS",
    icon: Palette,
    description: "Styling",
  },
  {
    name: "Redux Toolkit",
    icon: Boxes,
    description: "State Management",
  },
  {
    name: "React Router",
    icon: Route,
    description: "Routing",
  },
];

export const backendSkills = [
  {
    name: "NestJS",
    icon: Server,
    description: "Backend Framework",

  },
  {
    name: "Node.js",
    icon: Server,
    description: "Runtime",

  },
  {
    name: "Express.js",
    icon: Braces,
    description: "Backend Framework",
  
  },
  {
    name: "Socket.IO",
    icon: Zap,
    description: "Real-time",
  },
  {
    name: "JWT",
    icon: ShieldCheck,
    description: "Authentication",
  },
];


export const databaseSkills = [
  {
    name: "MySQL",
    icon: Database,
    description: "Relational Database",

  },
  {
    name: "MongoDB",
    icon: Database,
    description: "NoSQL Database",
  },
  {
    name: "Prisma",
    icon: Layers,
    description: "ORM",

  },
];

export const toolSkills = [
  {
    name: "Git",
    icon: GitBranch,
    description: "Version Control",

  },
  {
    name: "Docker",
    icon: Box,
    description: "Containerization",
  },
  {
    name: "Postman",
    icon: Send,
    description: "API Testing",

  },
];