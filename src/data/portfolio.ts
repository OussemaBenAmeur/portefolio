// ============================================
// PORTFOLIO DATA - Edit this file to update your portfolio!
// ============================================

export const personalInfo = {
  name: "Oussema Ben Ameur",
  title: "Software Engineer & ML Enthusiast",
  tagline: "Crafting intelligent solutions with code and machine learning",
  about: `Second-year Applied Computer Science Engineering Student at École Nationale d'Ingénieurs de Sousse 
  with a strong passion for Software Development, Machine Learning, and MLOps. I love building 
  solutions that bridge the gap between cutting-edge AI research and production-ready systems.`,
  email: "oussema.benameur@eniso.u-sousse.tn",
  phone: "+216 52 675 455",
  location: "Sousse, Tunisia",
  linkedin: "https://linkedin.com/in/oussema-ben-ameur",
  github: "https://github.com/OussemaBenAmeur",
};

export const skills = {
  programming: {
    title: "Programming Languages",
    items: [
      { name: "Python", level: 95 },
      { name: "JavaScript/TypeScript", level: 85 },
      { name: "Java", level: 80 },
      { name: "C/C++", level: 75 },
    ],
  },
  ml: {
    title: "Machine Learning",
    items: [
      { name: "PyTorch", level: 90 },
      { name: "Scikit-Learn", level: 90 },
      { name: "Deep Learning", level: 85 },
      { name: "Computer Vision", level: 85 },
      { name: "NLP", level: 80 },
    ],
  },
  data: {
    title: "Data & Visualization",
    items: [
      { name: "pandas", level: 95 },
      { name: "NumPy", level: 95 },
      { name: "Matplotlib/Seaborn", level: 90 },
    ],
  },
  webMobile: {
    title: "Web & Mobile",
    items: [
      { name: "React", level: 85 },
      { name: "Next.js", level: 80 },
      { name: "Spring Boot", level: 80 },
      { name: "Flutter", level: 75 },
    ],
  },
  mlops: {
    title: "MLOps & Tools",
    items: [
      { name: "Docker", level: 85 },
      { name: "Kubernetes", level: 75 },
      { name: "MLflow", level: 85 },
      { name: "Git/GitHub", level: 95 },
      { name: "LangChain", level: 80 },
    ],
  },
};

export const experience = [
  {
    title: "Part-Time Software Engineer",
    company: "Core Techs Solutions",
    location: "Sousse, Tunisia",
    period: "September 2025 - Present",
    highlights: [
      "Maintained and extended computer vision projects, building and refining deep learning models using PyTorch",
      "Implemented MLOps workflows for model deployment using Docker and Kubernetes",
      "Managed model versioning and experimentation tracking with MLflow",
      "Developed features for mobile applications using Flutter and backend systems with Spring Boot",
      "Collaborated with senior engineers to ensure scalable, production-ready ML pipelines",
    ],
  },
  {
    title: "Software Engineering Intern",
    company: "Core Techs Solutions",
    location: "Sousse, Tunisia",
    period: "June 2025 - July 2025",
    highlights: [
      "Designed and trained a computer vision model for document state assessment",
      "Detected folds, tears, and visual degradation in documents",
      "Developed preprocessing and feature extraction pipelines using PyTorch",
      "Achieved notable improvement in model accuracy",
    ],
  },
];

export const projects = [
  {
    title: "AI-Powered Writing Assistant Platform",
    date: "January 2025",
    description:
      "Full-stack application enabling users to draft emails and meeting summaries with bullet points, which AI elaborates into professional content.",
    highlights: [
      "Built backend with Spring Boot and frontend with React",
      "Created cross-platform mobile app using Flutter",
      "Fine-tuned LLM specifically for business communication",
      "Designed user-friendly interfaces and robust API endpoints",
    ],
    technologies: ["Spring Boot", "React", "Flutter", "LLM", "Fine-tuning"],
    icon: "✍️",
  },
  {
    title: "Predictive Nutrient Availability Analysis",
    date: "June 2024",
    description:
      "Machine learning models to predict essential soil nutrients for optimizing maize crop yields in African farms.",
    highlights: [
      "Applied time-series analysis on environmental factors",
      "Utilized satellite data (Sentinel and MODIS)",
      "Assessed impact on soil nutrient variability",
    ],
    technologies: ["Python", "Machine Learning", "Time Series", "Satellite Data"],
    icon: "🌱",
  },
  {
    title: "Play Store Market Predictive Analysis",
    date: "December 2024",
    description:
      "Deep learning models to improve app install prediction accuracy, analyzing a 3-million-row dataset.",
    highlights: [
      "Developed models using Keras for prediction",
      "Analyzed massive dataset with pandas, NumPy, Matplotlib",
      "Prototyped AI-driven market research tool",
      "Delivered actionable insights for app developers",
    ],
    technologies: ["Keras", "Deep Learning", "pandas", "NumPy", "Matplotlib"],
    icon: "📊",
  },
];

export const education = [
  {
    degree: "Master's-level degree in Software Engineering",
    school: "École Nationale d'Ingénieurs de Sousse - ENISo",
    location: "Sousse, Tunisia",
    period: "September 2024 - Present",
    description: "Applied Computer Science Engineering with focus on software development and ML",
  },
  {
    degree: "Pre-Engineering Studies: Maths and Physics",
    school: "Monastir Preparatory Engineering Institute",
    location: "Monastir, Tunisia",
    period: "September 2022 - June 2024",
    description: "Intensive two-year scientific program preparing for national engineering school exams",
    highlights: [
      "Rank: 420/1800 in national entrance exam",
      "Courses: Analysis, Algebra, Physics, Chemistry, Computer Science",
    ],
  },
];

export const certifications = [
  {
    name: "Building RAG Agents with LLMs",
    issuer: "NVIDIA",
    icon: "🤖",
  },
  {
    name: "Machine Learning Specialization",
    issuer: "DeepLearning.AI, Stanford University",
    icon: "📚",
  },
  {
    name: "Deep Learning Specialization",
    issuer: "DeepLearning.AI",
    icon: "🧠",
  },
  {
    name: "Machine Learning In Production",
    issuer: "DeepLearning.AI",
    icon: "🚀",
  },
  {
    name: "Natural Language Processing",
    issuer: "DeepLearning.AI",
    icon: "💬",
  },
];

export const volunteerExperience = [
  {
    role: "AI Lead",
    organization: "Electronica Club - ENISo",
    period: "September 2025 – Present",
    highlights: [
      "Led theoretical and practical AI/ML workshops",
      "Supported ML projects with embedded software integration",
    ],
  },
  {
    role: "Member",
    organization: "ENISo Junior Entreprise - JEENISo",
    period: "September 2024 – Present",
    highlights: [
      "Led marketing initiatives and visual identity design",
      "Contributed to client prospection and business development",
    ],
  },
  {
    role: "Event Moderator",
    organization: "School Partnership Program",
    period: "May 2025",
    highlights: [
      "Moderated launch of Automotive Software Engineering program",
      "Led discussions with GIZ, DIT, Dräxlmaier, and German Embassy",
    ],
  },
];

export const languages = [
  { name: "Arabic", level: "Native" },
  { name: "English", level: "C1" },
  { name: "French", level: "B2" },
  { name: "German", level: "B1" },
];

export const hobbies = [
  {
    name: "Gaming",
    description: "Participated in and won multiple competitions online and on-site",
    icon: "🎮",
  },
];

// Navigation items for the website
export const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];
