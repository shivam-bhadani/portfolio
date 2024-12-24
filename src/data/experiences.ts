import { IExperience } from "./types";

const experiences : Array<IExperience> = [
  {
    company: "Nuvama Wealth",
    role: "Software Developer",
    work: [
      "Developed robust Spring Boot APIs for PnL, Holding, and Insurance reports in a fintech trading environment",
      "Automated report generation in Excel using Apache POI and in PDF format using OpenPDF and iText",
      "Employed usage of MongoDB PostgreSQL for efficient storage of persistent data and Redis for caching",
      "Built frontend using ReactJS in clean-architecture, ensuring modularity and maintainability in the application"
    ],
    joining_date: "June 2024",
    ending_date: "December 2024"
  },
  {
    company: "Airblack",
    role: "Fullstack Intern",
    work: [
      "Engineered a robust payment system using NodeJS for an e-commerce platform, integrating Stripe and Razorpay",
      "Designed and implemented RESTful APIs in Node.js, enabling seamless communication between front-end and back-end systems",
      "Successfully deployed and managed application code on AWS ECS, ensuring reliable and scalable cloud infrastructure",
      "Created and optimized responsive landing pages using NextJS and Tailwind CSS, enhancing user engagement",
    ],
    joining_date: "March 2024",
    ending_date: "June 2024"
  },
  {
    company: "Trilogy Innovations (CodeNation)",
    role: "Software Development Engineer Intern",
    work: [
      "Built a modular React chatbot kit for Chrome extension, allowing customizable and extendable functionality",
      "Increased user engagement by 30% through the integration of the Polywink-generated 3D avatar feature",
      "Integrated a WebSocket connection for audio and viseme data, enabling realistic lip-syncing with the avatar",
      "Achieved 20% file size reduction through effective utilization of Webpack and code splitting techniques",
      "Demonstrated expertise in React.js, TypeScript, Three.js, WebSockets, ensured successful project outcomes"
    ],
    joining_date: "May 2023",
    ending_date: "July 2023"
  },
]

export default experiences;