interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  link: string;
  technologies: string[];
  location?: string;
  duration?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Communication App",
    subtitle: "Real-time chat application",
    description:
      "Built a responsive real-time communication platform using React.js and modern frontend practices. The app allows users to send and receive messages in a chat interface, view active conversations, manage contacts, and features an intuitive UI with smooth, user-friendly interaction flows. Backend functionality is simulated using local state and storage to prototype real-world UX.",
    link: "https://home-task-cyan.vercel.app/",
    technologies: ["React", "TypeScript", "CSS"],
  },
  {
    id: 2,
    title: "Video Streaming Platform (Youtube Clone)",
    subtitle: "A clone of the popular streaming service",
    description:
      "Built a fully responsive React.js-based Youtube clone integrated with Firebase. Optimized UI and page load times for a seamless streaming experience.",
    link: "https://react-youtube-clone-omega.vercel.app/",
    technologies: ["React", "Firebase", "JavaScript", "CSS"],
  },
  {
    id: 3,
    title: "Accessible Calculator",
    subtitle: "A calculator with accessibility features",
    description:
      "Created a feature-rich calculator with usability enhancements, historical logging, and feedback-driven improvements for accessibility.",
    link: "https://accessible-caluclator.vercel.app/",
    technologies: ["React", "TypeScript", "CSS"],
  },
  {
    id: 4,
    title: "Fitness App",
    subtitle: "A fitness app for personalized workouts",
    description:
      "Developed a React app for personalized exercise routines and visual tracking of muscle-specific workouts.",
    link: "https://react-fitness-exercise.vercel.app/",
    technologies: ["React", "TypeScript", "CSS"],
  },
];
