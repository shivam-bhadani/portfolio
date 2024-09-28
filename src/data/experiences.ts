import { IExperience } from "./types";

const experiences : Array<IExperience> = [
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