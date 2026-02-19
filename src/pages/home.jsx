import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import metaDatabase from "../assets/meta_database.png";
import metaBackend from "../assets/meta_backend.png";
import googleIT from "../assets/it_support.png";

function Home() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section
        id="hero"
        className="flex flex-col items-center justify-center min-h-screen text-center px-4 pt-16 relative"
      >
        {/* Background Glow Effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="z-10"
        >
          <motion.h1
            variants={fadeInUp}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Hi, I'm <span className="gradient-text">Hamado Simean</span>
          </motion.h1>
          <motion.div
            variants={fadeInUp}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto"
          >
            <p>Software Engineer | Machine Learning Engineer | Data Engineer</p>
          </motion.div>
          <motion.div variants={fadeInUp} className="flex gap-4 justify-center">
            <Link
              to="/projects"
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg shadow-blue-500/30"
            >
              View Projects
            </Link>
            <Link
              to="/contact"
              className="px-8 py-3 border border-blue-500 hover:bg-blue-500/10 rounded-full font-semibold transition-all hover:shadow-lg hover:shadow-blue-500/20"
            >
              Contact Me
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Brief About Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-20 px-4 bg-slate-900/50 backdrop-blur-sm"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">About Me</h2>
          <p className="text-lg text-gray-300 mb-8 leading-relaxed">
            I am a passionate technologist with expertise in building robust
            software solutions and deriving insights from data. With a strong
            foundation in Software Engineering, Machine Learning, and Data
            Analysis, I bridge the gap between complex algorithms and
            user-friendly applications. My day to day work involve developing
            robust app, AI agents to assist human Agents
          </p>
          <Link
            to="/about"
            className="text-blue-400 hover:text-blue-300 font-semibold hover:underline inline-flex items-center gap-2 group"
          >
            Read More About Me
            <span className="group-hover:translate-x-1 transition-transform">
              &rarr;
            </span>
          </Link>
        </div>
      </motion.section>

      {/* Skills Preview */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-12 text-center"
          >
            Top Skills
          </motion.h2>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {[
              "Python",
              "React",
              "Machine Learning",
              "Data Analysis",
              "Pytorch",
              "SQL",
              "TensorFlow",
              "Git",
            ].map((skill) => (
              <motion.div
                key={skill}
                variants={fadeInUp}
                whileHover={{ scale: 1.05, borderColor: "#3b82f6" }}
                className="bg-slate-800 p-6 rounded-xl transition-colors text-center border border-slate-700 shadow-sm hover:shadow-md"
              >
                <span className="font-semibold text-lg">{skill}</span>
              </motion.div>
            ))}
          </motion.div>
          <div className="text-center mt-10">
            <Link
              to="/skills"
              className="text-blue-400 hover:text-blue-300 font-semibold hover:underline inline-flex items-center gap-2 group"
            >
              View All Skills
              <span className="group-hover:translate-x-1 transition-transform">
                &rarr;
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Certificates Teaser */}
      <section className="py-20 px-4 bg-slate-900/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-8"
          >
            Certifications
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg text-gray-300 mb-12"
          >
            I have earned various specializations to validate my expertise in
            the field.
          </motion.p>

          {/* Certificates Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                name: "Google IT Support Specialization",
                image: googleIT,
                skills: [
                  "Network Protocols",
                  "System Administration",
                  "Troubleshooting",
                  "Customer Service",
                  "Linux",
                ],
                certificateUrl:
                  "https://www.coursera.org/account/accomplishments/professional-cert/94EGAME5FOIX",
              },
              {
                name: "Meta Database Engineer Specialization",
                image: metaDatabase,
                skills: [
                  "MySQL",
                  "Database Design",
                  "SQL Queries",
                  "Database Optimization",
                  "Python",
                ],
                certificateUrl:
                  "https://www.coursera.org/account/accomplishments/professional-cert/AN3PX7JOZ3QX",
              },
              {
                name: "Meta Backend Engineer Specialization",
                image: metaBackend,
                skills: [
                  "Django",
                  "REST APIs",
                  "Authentication",
                  "Database Management",
                  "Version Control",
                ],
                certificateUrl:
                  "https://www.coursera.org/account/accomplishments/professional-cert/883ZH75G5ORK",
              },
            ].map((cert, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-blue-500 transition-all hover:shadow-lg hover:shadow-blue-500/20 group"
              >
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={cert.image}
                    alt={cert.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="font-semibold text-lg text-white group-hover:text-blue-400 transition-colors">
                    {cert.name}
                  </h3>

                  {/* Skills Gained */}
                  <div className="text-left">
                    <p className="text-sm text-gray-400 mb-2 font-medium">
                      Skills Gained:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="text-xs px-3 py-1 bg-slate-700/50 rounded-full text-blue-300 border border-slate-600 hover:border-blue-500 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Certificate Link */}
                  <a
                    href={cert.certificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium text-sm transition-colors group/link"
                  >
                    <span>View Certificate</span>
                    <svg
                      className="w-4 h-4 transition-transform group-hover/link:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Home;
