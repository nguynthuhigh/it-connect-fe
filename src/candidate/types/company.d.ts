export interface Company {
  companyID: number;
  slug: string;
  name: string;
  description: string;
  skill_description: string;
  industry: string;
  logo: string;
  website: string;
  location_lat: string;
  location_lng: string;
  address: string;
  working_day: string;
  size: string;
  ot_policy: string;
  type: string;
  balance: number;
  createdAt: date;
  updatedAt: date;
  deletedAt: date;
  Jobs: Job[];
}

export interface Job {
  jobID: number;
  slug: string;
  title: string;
  description: string;
  experience: string;
  environment: string;
  level: string;
  salary: number;
  is_public_salary: boolean;
  work_type: string;
  special: string;
  is_public: boolean;
  author: number;
  status: number;
  companyID: number;
  createdAt: string;
  updatedAt: string;
  Skills: Skill[];
}

export interface Skill {
  skillID: number;
  name: string;
  createdAt: string;
  updatedAt: string;
  JobSkill: JobSkill;
}

export interface JobSkill {
  createdAt: string;
  updatedAt: string;
  jobID: number;
  skillID: number;
}
