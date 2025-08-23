interface ExperienceDetail {
  jobTitle: string;
  company: string;
  location: string;
  duration: string;
  description: string;
  skills: string[];
}

export const experienceDetails: ExperienceDetail[] = [
  {
    jobTitle: "Software Engineer",
    company: "Logpilot",
    location: "Germany",
    duration: "Dec 2024 - Present",
    description:
      "Worked with Logpilot (UK-based startup) to build B2B SaaS platform interfaces using React,Tailwind CSS, and Redux. Collaborated on multiple proof-of-concept features with founders and stakeholders to deliver result under tight timelines.Developed cross-platform mobile components using React Native for Fitnex, a fitness-focuse startup.",
    skills: ["React", "Redux", "Tailwind CSS"],
  },
  {
    jobTitle: "Frontend Developer",
    company: "EntroLabs Pvt. Ltd.",
    location: "Hyderabad, India",
    duration: "April 2024 - October 2024",
    description:
      "Developed and integrated role-based authentication and access control for a full-stack application in an Indian government school management project, enhancing data security and operational efficiency using PHP and MySQL. Engineered and launched a scalable multi-role B2B SaaS platform for property management, streamlining property listing and client interactions, reducing administrative overhead by 20%. Designed and optimized a B2B application for employee record management, automating the generation of downloadable PDF ID cards, reducing manual data entry by 30% using PHP and MySQL automation",
    skills: ["React", "Redux", "Tailwind CSS", "JavaScript", "PHP", "MySQL"],
  },
  {
    jobTitle: "Frontend Developer",
    company: "Deepija Telecom Pvt. Ltd.",
    location: "Hyderabad, India",
    duration: "Feb 2023 - March 2024",
    description:
      "Built a dashboard to visualize server usage metrics for telecom network administrators using PHP and MySQL, enabling proactive server management and reducing downtime. Developed and deployed a ticket management system within the Employee Platform, improving issue tracking and reducingticket resolution time by 15%.",
    skills: ["React", "Redux", "Tailwind CSS", "JavaScript", "PHP", "MySQL"],
  },
];
