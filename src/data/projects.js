
import movie from "../assets/hero.png";
import imageProjectManagerStudent from "../assets/imageProjectManagerStudent.png";
import imageHotelBooking from "../assets/imageHotelBooking.jpg";
import imageMoviePlatform from "../assets/imageMoviePlatform.jpg";
import imagePointHub from "../assets/imagePointHub.jpg";
export const projects = [
  {
    id: 1,
    number: "01",
    title: "Movie Platform",
    category: "Fullstack",
    image: imageMoviePlatform,
    description:
      "A full-stack movie streaming platform with user authentication, movie browsing and playback, favorites, and an admin dashboard for managing movies, users, and viewing statistics.",
    tech: [
      "React.js",
      "TailwindCSS",
      "Nest.js",
      "MySQL",
      "Prisma",
      'Cloudinary',
      "JWT"
    ],
    isLiveDemo: false,
    github: 'https://github.com/LamThanh2k04/Movie_App'
  },

  {
    id: 2,
    number: "02",
    title: "Acadex - Academic Management System",
    category: "Backend",
    image: imageProjectManagerStudent,
    description:
      "A full-stack academic management system with role-based authentication for admins, students, and lecturers, featuring course registration, grade management, certificate requests, statistics, and real-time notifications.",
    tech: [
      "Express.js",
      "MySQL",
      "Prisma",
      'Cloudinary',
      "Socket.io",
      "VNPay",
      "JWT"
    ],
    isLiveDemo: false,
    github: 'https://github.com/LamThanh2k04/Movie_App'
  },

  {
    id: 3,
    number: "03",
    title: "Point Hub - Multi-store Reward Points System (Zalo Mini App)",
    category: "Backend",
    image: imagePointHub,
    description:
      "A multi-store reward system on Zalo Mini App where users earn points, redeem vouchers, and register as partners, with web dashboards for admin and partner management.",
    tech: [
     "Express.js",
      "MySQL",
      "Prisma",
      'Cloudinary',
      "JWT"
    ],
    isLiveDemo: false,
    github: "https://github.com/LamThanh2k04/ZaloMiniApp"
  },

  {
    id: 4,
    number: "04",
    title: "B5ooking - Hotel Booking",
    category: "Backend",
    image: imageHotelBooking,
    description:
      "A full-stack hotel booking platform with authentication, hotel favorites, room booking, Stripe payments, and an admin dashboard for hotel, room, user, and revenue management.",
    tech: [
     "Express.js",
      "MySQL",
      "Prisma",
      'Cloudinary',
      "JWT",
      "Cron",
      "Stripe"
    ],
    isLiveDemo: false,
    github: "https://github.com/LamThanh2k04/B5ooking"
  },
];