import React from "react";
import image from "../assets/myimage.jpg";
function About() {
  return (
    <div className="min-h-screen pt-20 px-4 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center">About Me</h1>

      <div className="space-y-12">
        <img
          src={image}
          alt="myimage"
          className="mx-auto my-4 rounded-md h-auto w-full object-contain border border-slate-700 hover:border-blue-500 transition-colors duration-300 hover:shadow-blue-500 hover:cursor-pointer"
        />
        {/* Bio Section */}
        <section className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700">
          <h2 className="text-2xl font-semibold mb-4 text-blue-400">
            Professional Summary
          </h2>
          <p className="text-gray-300 leading-relaxed">
            I am SIMEAN Hamado, a dedicated Software Engineer, Machine Learning
            Engineer, and Data Analyst. My passion lies in leveraging technology
            to solve real-world problems. With a diverse skill set spanning
            full-stack development, AI model training, and data-driven decision
            making, I strive to build efficient and scalable solutions. I enjoy
            tackling complex challenges and am constantly learning new
            technologies to stay ahead in the rapidly evolving tech landscape.
          </p>
        </section>

        {/* Education Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-6 text-blue-400">
            Education
          </h2>
          <div className="space-y-6">
            <div className="bg-slate-800 p-6 rounded-xl border-l-4 border-blue-500">
              <h3 className="text-xl font-bold">
                Bachelor of Science in Computer Science
              </h3>
              <p className="text-gray-400">
                Kaya University Center| Science and Technology | 2020 - 2024
              </p>
              <p className="mt-2 text-gray-300">
                Focused on Algorithms, Statistics, Data Structures, and Software
                Engineering principles.
              </p>
            </div>
            {/* Add more education items if needed */}
          </div>
        </section>

        {/* Experience Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-6 text-blue-400">
            Experience
          </h2>
          <div className="space-y-6">
            <div className="relative pl-8 border-l-2 border-slate-700 pb-8 last:pb-0">
              <div className="absolute -left-[9px] top-0 w-4 h-4 bg-blue-500 rounded-full"></div>
              <h3 className="text-xl font-bold">Software Engineer</h3>
              <p className="text-gray-400 text-sm mb-2">
                GUESS SOLOMNDE SARL | Jannuary 2025 - Present
              </p>
              <p className="text-gray-300">
                Developed and maintained web applications using React and
                Django, Python. Collaborated with cross-functional teams to
                deliver features on time.
              </p>
            </div>
            <div className="relative pl-8 border-l-2 border-slate-700 pb-8 last:pb-0">
              <div className="absolute -left-[9px] top-0 w-4 h-4 bg-purple-500 rounded-full"></div>
              <h3 className="text-xl font-bold">Data Analyst Intern</h3>
              <p className="text-gray-400 text-sm mb-2">
                ONG TREE AID| Jully 01 2024 - December 31 2024
              </p>
              <p className="text-gray-300">
                Analyzed large datasets to identify trends and patterns.
                Visualized data using Python libraries like Matplotlib and
                Seaborn.
              </p>
              <p className="text-gray-300">
                Use statmodels to build and evaluate machine learning models.
                Interpreted results and provided actionable insights.
              </p>

              <p className="text-gray-300">
                Participated to many missions to help people in need.
              </p>
              <p className="text-gray-300">
                Trained beneficiaries on nutriants gardens management,
                marketing, and sales.
              </p>
              <p className="text-gray-300">
                Organized and executed community events to raise awareness and
                funds for the cause.
              </p>
              <p className="text-gray-300">
                Collaborated with local organizations to provide resources and
                support to the community.
              </p>
            </div>
          </div>
        </section>

        {/* Personal Interests */}
        <section className="pb-20">
          <h2 className="text-2xl font-semibold mb-4 text-blue-400">
            Interests
          </h2>
          <div className="flex flex-wrap gap-3">
            {[
              "Open Source",
              "AI Research",
              "Cloud Computing",
              "Reading",
              "Tech Blogging",
              "Photography",
            ].map((interest) => (
              <span
                key={interest}
                className="px-4 py-2 bg-slate-700 rounded-full text-sm text-gray-300"
              >
                {interest}
              </span>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;
