import React from "react";
import {
  SiReact,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiJavascript,
  SiDjango,
  SiRedis,
  SiCelery,
  SiPython,
  SiPostgresql,
  SiMysql,
  SiOracle,
  SiAmazonwebservices,
  SiGooglecloud,
  SiDocker,
  SiGit,
  SiGithub,
  SiLinux,
  SiWireguard,
  SiWireshark,
  SiVsco, 
  SiJupyter,
  SiTensorflow,
  SiPytorch,
  SiScikitlearn,
  SiOpencv,
  SiPandas,
  SiNumpy,
  SiGrafana,
  SiPrometheus,
} from "react-icons/si";
import {
  FaNetworkWired,
  FaShieldAlt,
  FaGlobe,
  FaLanguage,
  FaUsers,
  FaLightbulb,
  FaClock,
  FaRandom,
  FaComments,
  FaChessKing,
  FaDatabase,
  FaCode,
  FaBrain,
  FaEye,
  FaRobot,
} from "react-icons/fa";
import { MdSecurity } from "react-icons/md";
import { GiTargetShot } from "react-icons/gi";

function Skills() {
  // Icon mapping for each skill
  const skillIcons = {
    // Frontend
    React: SiReact,
    TypeScript: SiTypescript,
    HTML5: SiHtml5,
    CSS3: SiCss3,
    "Tailwind CSS": SiTailwindcss,
    "JavaScript (ES6+)": SiJavascript,
    
    // Backend
    Django: SiDjango,
    "Django Rest Framework": SiDjango,
    redis: SiRedis,
    celery: SiCelery,
    Python: SiPython,
    "RESTful APIs": FaCode,
    SQL: FaDatabase,
    grafana: SiGrafana,
    prometheus: SiPrometheus,
    
    // ML & AI
    TensorFlow: SiTensorflow,
    PyTorch: SiPytorch,
    "Scikit-learn": SiScikitlearn,
    "OPEN CV": SiOpencv,
    MLOps: FaRobot,
    Pandas: SiPandas,
    NumPy: SiNumpy,
    "Computer Vision": FaEye,
    NLP: FaBrain,
    
    // Database & Cloud
    PostgreSQL: SiPostgresql,
    MySQL: SiMysql,
    Oracle: SiOracle,
    AWS: SiAmazonwebservices,
    "Google Cloud Platform": SiGooglecloud,
    Docker: SiDocker,
    
    // Cyber Security
    "Penetration Testing": GiTargetShot,
    "Ethical Hacking": MdSecurity,
    "Network Security": FaNetworkWired,
    "Data Security": FaShieldAlt,
    
    // Tools & Others
    Git: SiGit,
    GitHub: SiGithub,
    Linux: SiLinux,
    whireguard: SiWireguard,
    tcpdump: FaNetworkWired,
    nmap: FaNetworkWired,
    wireshark: SiWireshark,
    "VS Code": SiVsco,
    "Jupyter Notebooks": SiJupyter,
    "Agile Methodologies": FaUsers,
    
    // Languages
    English: FaLanguage,
    French: FaLanguage,
    Moore: FaLanguage,
    
    // Soft Skills
    Teamwork: FaUsers,
    "Problem Solving": FaLightbulb,
    "Time Management": FaClock,
    Adaptability: FaRandom,
    Communication: FaComments,
    Leadership: FaChessKing,
  };

  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        "React",
        "TypeScript",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "JavaScript (ES6+)",
      ],
    },
    {
      title: "Backend Development",
      skills: [
        "Django",
        "Django Rest Framework",
        "redis",
        "celery",
        "Python",
        "RESTful APIs",
        "SQL",
        "grafana",
        "prometheus",
      ],
    },
    {
      title: "Machine Learning & AI",
      skills: [
        "TensorFlow",
        "PyTorch",
        "Scikit-learn",
        "OPEN CV",
        "MLOps",
        "Pandas",
        "NumPy",
        "Computer Vision",
        "NLP",
      ],
    },
    {
      title: "Database & Cloud",
      skills: [
        "PostgreSQL",
        "MySQL",
        "Oracle",
        "AWS",
        "Google Cloud Platform",
        "Docker",
      ],
    },
    {
      title: "Cyber Security",
      skills: [
        "Penetration Testing",
        "Ethical Hacking",
        "Network Security",
        "Data Security",
      ],
    },
    {
      title: "Tools & Others",
      skills: [
        "Git",
        "GitHub",
        "Linux",
        "whireguard",
        "tcpdump",
        "nmap",
        "wireshark",
        "VS Code",
        "Jupyter Notebooks",
        "Agile Methodologies",
      ],
    },
    {
      title: "Languages",
      skills: ["English", "French", "Moore"],
    },
    {
      title: "Soft skills",
      skills: [
        "Teamwork",
        "Problem Solving",
        "Time Management",
        "Adaptability",
        "Communication",
        "Leadership",
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-20 px-4 max-w-6xl mx-auto pb-20">
      <h1 className="text-4xl font-bold mb-12 text-center">Technical Skills</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category, index) => (
          <div
            key={index}
            className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-blue-500 transition-colors duration-300"
          >
            <h2 className="text-xl font-semibold mb-6 text-blue-400 border-b border-slate-700 pb-2">
              {category.title}
            </h2>
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill) => {
                const IconComponent = skillIcons[skill];
                return (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-slate-700 rounded-md text-sm text-gray-200 hover:bg-blue-600 transition-colors cursor-default flex items-center gap-2"
                  >
                    {IconComponent && <IconComponent className="text-base" />}
                    {skill}
                  </span>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
