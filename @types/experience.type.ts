import { StaticImageData } from "next/image";

export type ExperienceType = {
  company: string;
  companyLink: string;
  companyLogo: StaticImageData;
  roles: {
    role: string;
    from: {
      month: string;
      year: number;
    };
    to: {
      month: string;
      year?: number;
    };
    type: string;
  }[];
};
