export interface ContactInfo {
  phone: string;
  email: string;
  emailAlternative: string;
  birthday: string;
  location: string;
  portfolio: string;
  github?: string;
}

export interface EducationMilestone {
  institution: string;
  location: string;
  degree: string;
  period: string;
  licenses: string[];
}

export interface ProfessionalExperience {
  company: string;
  location: string;
  role: string;
  period: string;
  responsibilities: string[];
}

export interface ProjectExperience {
  phase: string;
  indication: string;
  therapeuticArea: string;
  type: string;
  role: string;
  period: string;
  responsibilities: string;
}

export interface Vendor {
  category: string;
  names: string[];
}

export interface TrainingCourse {
  id: number;
  organization: string;
  courseName: string;
  date: string;
}
