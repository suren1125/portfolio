import type { StaticImageData } from "next/image";

import code_icon from "./code-icon.png";
import code_icon_dark from "./code-icon-dark.png";
import edu_icon from "./edu-icon.png";
import edu_icon_dark from "./edu-icon-dark.png";
import project_icon from "./project-icon.png";
import project_icon_dark from "./project-icon-dark.png";
import vscode from "./vscode.png";
import figma from "./figma.png";
import git from "./git.png";
import mongodb from "./mongodb.png";
import right_arrow_white from "./right-arrow-white.png";
import surenlogo from "./surenlogo.png";
import profile1 from "./profile1.jpg";
import mail_icon from "./mail_icon.png";
import mail_icon_dark from "./mail_icon_dark.png";
import download_icon from "./download-icon.png";
import hand_icon from "./hand-icon.png";
import header_bg_color from "./header-bg-color.png";
import moon_icon from "./moon_icon.png";
import sun_icon from "./sun_icon.png";
import arrow_icon from "./arrow-icon.png";
import arrow_icon_dark from "./arrow-icon-dark.png";
import menu_black from "./menu-black.png";
import menu_white from "./menu-white.png";
import close_black from "./close-black.png";
import close_white from "./close-white.png";
import right_arrow from "./right-arrow.png";
import send_icon from "./send-icon.png";
import right_arrow_bold from "./right-arrow-bold.png";
import right_arrow_bold_dark from "./right-arrow-bold-dark.png";

export interface ProjectItem {
  title: string;
  description: string;
  bgImage: string;
  link: string;
}

export interface InfoItem {
  icon: StaticImageData;
  iconDark: StaticImageData;
  title: string;
  description: string;
}

export type ToolItem = StaticImageData;

export const assets = {
  code_icon,
  code_icon_dark,
  edu_icon,
  edu_icon_dark,
  project_icon,
  project_icon_dark,
  vscode,
  figma,
  git,
  mongodb,
  right_arrow_white,
  surenlogo,
  profile1,
  mail_icon,
  mail_icon_dark,
  download_icon,
  hand_icon,
  header_bg_color,
  moon_icon,
  sun_icon,
  arrow_icon,
  arrow_icon_dark,
  menu_black,
  menu_white,
  close_black,
  close_white,
  right_arrow,
  send_icon,
  right_arrow_bold,
  right_arrow_bold_dark,
};

export const workData: ProjectItem[] = [
  {
    title: "Inventory Dashboard",
    description: "Fullstack Management with Next.js & PostgreSQL",
    bgImage: "/inventory-management.png",
    link: "https://inventory-management-seven-psi.vercel.app/",
  },
  {
    title: "Next.js Admin Analytics",
    description: "Performance-optimized dashboard with SSR",
    bgImage: "/dashboard.png",
    link: "https://nextjs-dashboard-ruby-nine-99.vercel.app/",
  },
  {
    title: "TripMandu Planner",
    description: "Itinerary planning via OpenStreetMap (OSM)",
    bgImage: "/tripmandu.png",
    link: "https://github.com/suren1125/TripMandu",
  },

  {
    title: "e-Ballot System",
    description: "Secure e-Voting platform for Digital Governance",
    bgImage: "/eballot.png",
    link: "https://github.com/suren1125/eGovernanceProject",
  },

  {
    title: "Digital Library API",
    description: "Express.js & MongoDB backend architecture",
    bgImage: "/work-4.png",
    link: "https://github.com/suren1125/express-locallibrary-tutorial",
  },
];

export const infoList: InfoItem[] = [
  {
    icon: assets.code_icon,
    iconDark: assets.code_icon_dark,
    title: "Technical Stack",
    description: "React, Next.js 16, TypeScript, Tailwind CSS, Framer Motion",
  },
  {
    icon: assets.edu_icon,
    iconDark: assets.edu_icon_dark,
    title: "Education",
    description: "B.Sc. CSIT | Bhaktapur Multiple Campus (4th Year)",
  },
  {
    icon: assets.project_icon,
    iconDark: assets.project_icon_dark,
    title: "Projects",
    description: "Built 5+ Full-stack & Frontend apps with modern UI/UX",
  },
];

export const toolsData: ToolItem[] = [
  assets.vscode,
  assets.mongodb,
  assets.figma,
  assets.git,
];
