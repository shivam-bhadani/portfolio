import { IRecentBlog } from "./types";
import ci_cd from "@/assets/blogImages/ci_cd_logo.png"
import tcp from "@/assets/blogImages/tcp.png"
import asg from "@/assets/blogImages/asg.png"
import vpc from "@/assets/blogImages/vpc.png"
import rpc from "@/assets/blogImages/rpc.png"
import system_design from "@/assets/blogImages/system_design.png"

const recentBlogs : Array<IRecentBlog> = [
  {
    title: "System Design For Beginners: Everything You Need in One Article",
    thumbnail: system_design,
    link: "https://medium.com/@shivambhadani_/system-design-for-beginners-everything-you-need-in-one-article-c74eb702540b"
  },
  {
    title: "Getting Started with CI/CD: An Introductory Guide to GitHub Actions for New Developers",
    thumbnail: ci_cd,
    link: "https://medium.com/@shivambhadani_/getting-started-with-ci-cd-an-introductory-guide-to-github-actions-for-new-developers-f216d87f4dab"
  },
  {
    title: "Learn Complete AWS VPC in Just One Article",
    thumbnail: vpc,
    link: "https://medium.com/@shivambhadani_/aws-part-5-learn-complete-aws-vpc-in-just-one-article-5ffe34888a5c"
  },
  {
    title: "Introduction to RPC in Go: Building RPC client and server with Golang",
    thumbnail: rpc,
    link: "https://medium.com/@shivambhadani_/introduction-to-rpc-in-go-building-rpc-client-and-server-with-golang-5794675e9a12"
  },
  {
    title: "Step-by-Step Guide to Create Your First AWS Auto Scaling Group",
    thumbnail: asg,
    link: "https://medium.com/@shivambhadani_/aws-part-4-step-by-step-guide-to-create-your-first-aws-auto-scaling-group-826c1effc0ec"
  },
  {
    title: "Understanding TCP and building our own TCP Server in C language",
    thumbnail: tcp,
    link: "https://medium.com/@shivambhadani_/understanding-tcp-and-building-our-own-tcp-server-in-c-language-8de9d9de78ef"
  },
]

export default recentBlogs;