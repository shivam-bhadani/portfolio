import { IProject } from "./types"
import cfstress from "@/assets/projectImages/cfstress.png"
import codegeass from "@/assets/projectImages/codegeass.png"
import smartskill_studio from "@/assets/projectImages/smartskill_studio.png"
import bookstation from "@/assets/projectImages/bookstation.png"
import blog from "@/assets/projectImages/blog.png"
import chatbot from "@/assets/projectImages/chatbot.png"
import key_value_cache from "@/assets/projectImages/key_value_cache.png";

const projects: Array<IProject> = [
  {
    title: "CF Stress",
    description: "Community driven, highly customizable, no-code tool to stress test Codeforces problems. Frontend - React, Backend - Golang, Database - MongoDB",
    thumbnail: cfstress,
    githubLink: "https://github.com/shivam-bhadani/CF-Stress-Backend"
  },
  {
    title: "Code Geass",
    description: "Developed a high-performing coding website, enabling users to improve algorithmic problem-solving skills. Frontend - React, Backend - Nodejs, Database - MongoDB",
    thumbnail: codegeass,
    githubLink: "https://github.com/shivam-bhadani/Code-Geass-Backend"
  },
  {
    title: "SmartSkill Studio",
    description: "Developed backend of an e-learning platform using DRF for course creation and enrollment. Techstack involved are NextJS, Django, Websocket, Redis, Docker, FFmpeg",
    thumbnail: smartskill_studio,
    githubLink: "https://github.com/shivam-bhadani/SmartSkill-Studio"
  },
  {
    title: "Distributed Key Value Cache",
    description: "Implemented a distributed key value cache from scratch on top of TCP protocol. Coded this project in Go language",
    thumbnail: key_value_cache,
    githubLink: "https://github.com/shivam-bhadani/Distributed-Key-Value-Cache"
  },
  {
    title: "The Book Station",
    description: "Developed a secured well-versed platform to buy and sell used book. Frontend - HTML, CSS, JS, Backend - Nodejs, Database - MongoDB",
    thumbnail: bookstation,
    githubLink: "https://github.com/shivam-bhadani/The-Book-Station"
  },
  {
    title: "Blog Website",
    description: "Built Blog website with secure authenticated admin pannel where admin can perform CRUD operation. Frontend - HTML, CSS, JS. Backend - Nodejs. Database - MongoDB",
    thumbnail: blog,
    githubLink: "https://github.com/shivam-bhadani/Blog-Website"
  },
  {
    title: "Realtime Chatbot",
    description: "Developed Realtime Chatbot that performs client queries and integrated Socket-io in chat server. Frontend - HTML, CSS, JS. Backend - Nodejs. Database - MongoDB",
    thumbnail: chatbot,
    githubLink: "https://github.com/shivam-bhadani/Chatbot"
  },
]

export default projects