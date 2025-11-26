import React from 'react'
import { Link } from 'react-router-dom'
import metaDatabase from "../assets/meta_database.png"
import metaBackend from "../assets/meta_backend.png"
import googleIT from "../assets/it_support.png"
function Home() {
    return (
        <div className='flex flex-col min-h-screen'>
            {/* Hero Section */}
            <section id='hero' className='flex flex-col items-center justify-center min-h-screen text-center px-4 pt-16'>
                <h1 className='text-5xl md:text-7xl font-bold mb-6'>
                    Hi, I'm <span className='gradient-text'>SIMEAN Hamado</span>
                </h1>
                <div className='text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl'>
                    <p>Software Engineer | Machine Learning Engineer | Data Analyst</p>
                </div>
                <div className='flex gap-4'>
                    <Link to="/projects" className='px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-full font-semibold transition-all transform hover:scale-105'>
                        View Projects
                    </Link>
                    <Link to="/contact" className='px-8 py-3 border border-blue-500 hover:bg-blue-500/10 rounded-full font-semibold transition-all'>
                        Contact Me
                    </Link>
                </div>
            </section>

            {/* Brief About Section */}
            <section className='py-20 px-4 bg-slate-900/50'>
                <div className='max-w-4xl mx-auto text-center'>
                    <h2 className='text-3xl font-bold mb-8'>About Me</h2>
                    <p className='text-lg text-gray-300 mb-8 leading-relaxed'>
                        I am a passionate technologist with expertise in building robust software solutions and deriving insights from data.
                        With a strong foundation in Software Engineering, Machine Learning, and Data Analysis, I bridge the gap between complex algorithms and user-friendly applications.
                    </p>
                    <Link to="/about" className='text-blue-400 hover:text-blue-300 font-semibold hover:underline'>
                        Read More About Me &rarr;
                    </Link>
                </div>
            </section>

            {/* Skills Preview */}
            <section className='py-20 px-4'>
                <div className='max-w-6xl mx-auto'>
                    <h2 className='text-3xl font-bold mb-12 text-center'>Top Skills</h2>
                    <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
                        {['Python', 'React', 'Machine Learning', 'Data Analysis', 'Pytorch', 'SQL', 'TensorFlow', 'Git'].map((skill) => (
                            <div key={skill} className='bg-slate-800 p-6 rounded-xl hover:bg-slate-700 transition-colors text-center border border-slate-700'>
                                <span className='font-semibold text-lg'>{skill}</span>
                            </div>
                        ))}
                    </div>
                    <div className='text-center mt-10'>
                        <Link to="/skills" className='text-blue-400 hover:text-blue-300 font-semibold hover:underline'>
                            View All Skills &rarr;
                        </Link>
                    </div>
                </div>
            </section>

            {/* Certificates Teaser */}
            <section className='py-20 px-4 bg-slate-900/50'>
                <div className='max-w-4xl mx-auto text-center'>
                    <h2 className='text-3xl font-bold mb-8'>Certifications</h2>
                    <p className='text-lg text-gray-300 mb-8'>
                        I have earned various specializations to validate my expertise in the field.
                    </p>
                    {/* Placeholder for certificates, maybe just a button or a small list if we had data */}
                    {/* Certificates Grid */}
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                        {[
                            { name: 'Google IT Support Specialization', image: googleIT },
                            { name: 'Meta Database Engineer Specialization', image: metaDatabase },
                            { name: 'Meta Backend Engineer Specialization', image: metaBackend }
                        ].map((cert, index) => (
                            <div key={index} className='bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-blue-500 transition-all hover:transform hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/20'>
                                <div className='h-48 overflow-hidden'>
                                    <img src={cert.image} alt={cert.name} className='w-full h-full object-cover' />
                                </div>
                                <div className='p-4'>
                                    <h3 className='font-semibold text-lg text-white'>{cert.name}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home
