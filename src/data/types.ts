import { StaticImageData } from "next/image";

export interface IStudentGuideBlogMetaData {
  title: string;
  slug: string;
}

export interface INavItem {
  name: string;
  link: string;
}

export interface IProject {
  title: string;
  description: string;
  thumbnail: string | StaticImageData;
  githubLink: string;
  demoLink?: string;
}

export interface IExperience {
  company: string;
  role: string;
  work: string[];
  joining_date: string;
  ending_date: string;
}

export interface IRecentBlog {
  title: string;
  thumbnail: string | StaticImageData;
  link: string
}
