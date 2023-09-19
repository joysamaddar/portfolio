import { ExperienceType } from "@/@types/experience.type";

export const experiences: ExperienceType[] = [
  {
    from: {
      month: "JUN",
      year: 2023,
    },
    to: {
      month: "NOW",
    },
    company: "Fasthr.AI",
    companyLink: "https://www.linkedin.com/company/fasthrdotai/",
    roles: [{ role: "Frontend Engineer", type: "Full time" }],
  },
  {
    from: {
      month: "MAR",
      year: 2022,
    },
    to: {
      month: "MAY",
      year: 2023,
    },
    company: "Cognizant",
    companyLink: "https://www.linkedin.com/company/cognizant/",
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
    from: {
      month: "FEB",
      year: 2022,
    },
    to: {
      month: "MAR",
      year: 2022,
    },
    company: "Agoraverse",
    companyLink: "https://www.linkedin.com/company/agoraverse/",
    roles: [{ role: "Junior Full Stack Developer", type: "Part time" }],
  },
];
