import React from 'react'

function Skills() {
    const skillCategories = [
        {
            title: "Frontend Development",
            skills: ["React", "TypeScript", "HTML5", "CSS3", "Tailwind CSS", "JavaScript (ES6+)"]
        },
        {
            title: "Backend Development",
            skills: ["Django", "Django Rest Framework", "redis", "Python", "RESTful APIs"]
        },
        {
            title: "Machine Learning & AI",
            skills: ["TensorFlow", "PyTorch", "Scikit-learn", "Pandas", "NumPy", "Computer Vision", "NLP"]
        },
        {
            title: "Database & Cloud",
            skills: ["PostgreSQL", "MySQL", "AWS", "Google Cloud Platform", "Docker"]
        },
        {
            title: "Cyber Security",
            skills: ["Penetration Testing", "Ethical Hacking", "Network Security", "Data Security"]
        },
        {
            title: "Tools & Others",
            skills: ["Git", "GitHub", "Linux", "whireguard", "tcpdump", "nmap", "wireshark", "VS Code", "Jupyter Notebooks", "Agile Methodologies"]
        },
        {
            title: "Languages",
            skills: ["English", "French", "Moore"]
        }
    ];

    return (
        <div className='min-h-screen pt-20 px-4 max-w-6xl mx-auto pb-20'>
            <h1 className='text-4xl font-bold mb-12 text-center'>Technical Skills</h1>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {skillCategories.map((category, index) => (
                    <div key={index} className='bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-blue-500 transition-colors duration-300'>
                        <h2 className='text-xl font-semibold mb-6 text-blue-400 border-b border-slate-700 pb-2'>{category.title}</h2>
                        <div className='flex flex-wrap gap-3'>
                            {category.skills.map((skill) => (
                                <span key={skill} className='px-3 py-1 bg-slate-700 rounded-md text-sm text-gray-200 hover:bg-blue-600 transition-colors cursor-default'>
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Skills
