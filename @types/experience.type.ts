export type ExperienceType = {
  from: {
    month: string;
    year: number;
  };
  to: {
    month: string;
    year?: number;
  };
  company: string;
  companyLink: string;
  roles: {
    role: string;
    from?: {
      month: string;
      year: number;
    };
    to?: {
      month: string;
      year?: number;
    };
    type: string;
  }[];
};
