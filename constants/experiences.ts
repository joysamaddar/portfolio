import { ExperienceType } from "@/@types/experience.type";
import agoraverse from "@/public/agora.webp";
import cognizant from "@/public/cognizant.webp";
import fasthr from "@/public/fasthr.svg";

export const yearsOfExperience =
  (new Date().getTime() - new Date("2022-02-01").getTime()) /
  (1000 * 60 * 60 * 24 * 365);

export const experiences: ExperienceType[] = [
  {
    company: "Fasthr.AI",
    companyLink: "https://www.linkedin.com/company/fasthrdotai/",
    companyLogo: fasthr,
    roles: [
      {
        role: "Frontend Engineer",
        from: {
          month: "JUN",
          year: 2023,
        },
        to: {
          month: "NOW",
        },
        type: "Full time",
      },
    ],
  },
  {
    company: "Cognizant",
    companyLink: "https://www.linkedin.com/company/cognizant/",
    companyLogo: cognizant,
    roles: [
      {
        role: "Programmer Analyst",
        from: {
          month: "AUG",
          year: 2022,
        },
        to: {
          month: "MAY",
          year: 2023,
        },
        type: "Full time",
      },
      {
        role: "Intern",
        from: {
          month: "MAR",
          year: 2022,
        },
        to: {
          month: "AUG",
          year: 2022,
        },
        type: "Internship",
      },
    ],
  },
  {
    company: "Agoraverse",
    companyLink: "https://www.linkedin.com/company/agoraverse/",
    companyLogo: agoraverse,
    roles: [
      {
        role: "Junior Full Stack Developer",
        from: {
          month: "FEB",
          year: 2022,
        },
        to: {
          month: "MAR",
          year: 2022,
        },
        type: "Part time",
      },
    ],
  },
];
