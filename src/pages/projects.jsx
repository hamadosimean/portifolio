import React from 'react'
import { Link } from 'react-router-dom'
import toogreSaaya from "../assets/toogreSaaya.png"
import littleLemon from "../assets/littleLemon.jpg"
import sapSapPay from "../assets/sapSapPay.png"
function Projects() {
    const projects = [
        {
            title: "SapSapPay",
            description: "A Full Stack Payment App, that allow users to make payments to merchants.",
            techStack: ["Django", "Django Rest Framework", "PostgreSQL", "React Native", "React", "NativeWind"],
            github: "https://github.com/hamadosimean/sapsappay",
            link: "#",
            image: sapSapPay
        },
        {
            title: "ToggreSaaya",
            description: "A Full Stack queue management application. that allow users to track their queue position and get notified when it's their turn from home",
            techStack: ["Django", "Django Rest Framework", "PostgreSQL", "React", "React Native", "NativeWind"],
            link: "http://144.91.109.155:3000/",
            github: "#",
            image: toogreSaaya
        },
        {
            title: "Little Lemon",
            description: "A Full Stack restaurant reservation application. that allow users to make reservations and track their reservations.",
            techStack: ["Django", "Django Rest Framework", "PostgreSQL", "HTML", "CSS", "JavaScript", "Bootstrap", "React"],
            link: "#",
            github: "https://github.com/hamadosimean/little_lemon_fullstack",
            image: littleLemon
        },
        {
            title: "Machine Learning Model",
            description: "A predictive model for housing prices using advanced regression techniques and data visualization.",
            techStack: ["Python", "Scikit-learn", "Pandas", "Matplotlib"],
            link: "#",
            github: "#",
            image: ""
        },

    ];

    return (
        <div className='min-h-screen pt-20 px-4 max-w-6xl mx-auto pb-20'>
            <h1 className='text-4xl font-bold mb-12 text-center'>Featured Projects</h1>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                {projects.map((project, index) => (
                    <div key={index} className='bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:-translate-y-1'>
                        <div className='h-48 bg-slate-700 flex items-center justify-center'>
                            {project.image ? (
                                <img src={project.image} alt={project.title} className='w-full h-full object-cover' />
                            ) : (
                                <span className='text-slate-500 text-lg'>Project Thumbnail</span>
                            )}
                        </div>
                        <div className='p-6'>
                            <h2 className='text-2xl font-bold mb-3 text-white'>{project.title}</h2>
                            <p className='text-gray-400 mb-4 line-clamp-3'>
                                {project.description}
                            </p>
                            <div className='flex flex-wrap gap-2 mb-6'>
                                {project.techStack.map((tech) => (
                                    <span key={tech} className='px-2 py-1 bg-slate-900 rounded text-xs text-blue-400 font-mono'>
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className='flex gap-4'>
                                <a href={project.link} className='flex-1 text-center py-2 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors'>
                                    Live Demo
                                </a>
                                <a href={project.github} className='flex-1 text-center py-2 border border-slate-600 hover:bg-slate-700 rounded-lg font-semibold transition-colors'>
                                    GitHub
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects