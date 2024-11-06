import { IRecentBlog } from "./types";
import introduction_to_cloud from "@/assets/blogImages/introduction_to_cloud.png"
import horizontal_scaling_load_balancer from "@/assets/blogImages/horizontal_scaling_load_balancer.png"
import tcp from "@/assets/blogImages/tcp.png"
import asg from "@/assets/blogImages/asg.png"
import vpc from "@/assets/blogImages/vpc.png"
import rpc from "@/assets/blogImages/rpc.png"

const recentBlogs : Array<IRecentBlog> = [
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
  {
    title: "Introduction to Cloud and EC2",
    thumbnail: introduction_to_cloud,
    link: "https://medium.com/@shivambhadani_/aws-part-1-introduction-to-cloud-and-ec2-f06cdc80a1fc"
  },
  {
    title: "Horizontal Scaling and Load Balancer",
    thumbnail: horizontal_scaling_load_balancer,
    link: "https://medium.com/@shivambhadani_/aws-part-3-horizontal-scaling-and-load-balancer-223d005ef11e"
  }
]

export default recentBlogs;