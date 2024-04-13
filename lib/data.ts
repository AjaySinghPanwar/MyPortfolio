import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import unwritten_hair from "@/public/unwritten_hair.png";
import pie_rewards from "@/public/pie_rewards.png";
import idlvr from "@/public/idlvr.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Bachelor's of Technology",
    location: "Janakpuri, New Delhi",
    description: "Graduated from Maharaja Surajmal Institute of Technology.",
    icon: React.createElement(LuGraduationCap),
    date: "2021",
  },
  {
    title: "React / React Native Developer",
    location: "Udyog Vihar, Gurugram",
    description:
      "Engaged as a junior developer, I made significant contributions to React and React Native projects, focusing on the construction of dynamic web and mobile applications.",
    icon: React.createElement(CgWorkAlt),
    date: "Jan 2022 - Aug 2022",
  },
  {
    title: "React / React Native Developer",
    location: "Sikanderpur, Gurugram",
    description:
      "Executed React Native projects independently, taking full ownership of frontend development and implementing diverse functionalities. Proficiently handled all aspects of the app development lifecycle, including UI/UX design, state management, and seamless API integration.",
    icon: React.createElement(FaReact),
    date: "Sept 2022 - Aug 2023",
  },
  {
    title: "Software Engineer",
    location: "Sector 63, Noida",
    description:
      "I am responsible for contributing to the architecture and implementation of features and functionalities within the mobile applications. Also, I collaborate with web team to work on api integrations, with cross functional teams to achieve deadlines, etc.",
    icon: React.createElement(FaReact),
    date: "Sept 2023 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "Unwritten Hair",
    description:
      "This app is made for independent hairdressers to handle their appointments, POS, eCommerce and professional products fulfillment.",
    tags: [
      "React Native",
      "TypeScript",
      "Firebase Push Notifications",
      "Firebase Crash analytics",
      "Stripe Terminal SDK",
      "Redux",
    ],
    imageUrl: unwritten_hair,
  },
  {
    title: "Pie Rewards",
    description:
      "This app enables users to earn cashback by shopping and investing some part of the cashback into stocks.",
    tags: [
      "React Native",
      "TypeScript",
      "Firebase Push Notifications",
      "React Native Maps",
      "Stripe",
      "Redux",
    ],
    imageUrl: pie_rewards,
  },
  {
    title: "iDlvr",
    description:
      "This app lets users book on-demand vehicles for transporting their goods from one place to another.",
    tags: [
      "React Native",
      "TypeScript",
      "Firebase Push Notifications",
      "Stripe",
      "Redux",
    ],
    imageUrl: idlvr,
  },
] as const;

export const skillsData = [
  "React Native",
  "ReactJS",
  "JavaScript",
  "TypeScript",
  "Redux",
  "Firebase Push Notifications",
  "Stripe SDK",
  "Stripe Terminal SDK",
  "HTML",
  "CSS",
  "NextJS",
  "Tailwind",
  "Framer Motion",
  "Git",
  "Github",
] as const;
