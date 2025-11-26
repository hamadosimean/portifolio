import React from 'react'

function Contact() {
    return (
        <div className='min-h-screen pt-20 px-4 max-w-4xl mx-auto pb-20'>
            <h1 className='text-4xl font-bold mb-8 text-center'>Get In Touch</h1>
            <p className='text-center text-gray-300 mb-12 max-w-2xl mx-auto'>
                I'm currently open to new opportunities and collaborations.
                Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
                {/* Contact Info */}
                <div className='space-y-8'>
                    <div className='bg-slate-800 p-6 rounded-xl border border-slate-700'>
                        <h3 className='text-xl font-semibold mb-2 text-blue-400'>Email</h3>
                        <a href="mailto:hamadosimean20@gmail.com" className='text-gray-300 hover:text-white transition-colors'>
                            hamadosimean20@gmail.com
                        </a>
                    </div>

                    <div className='bg-slate-800 p-6 rounded-xl border border-slate-700'>
                        <h3 className='text-xl font-semibold mb-2 text-blue-400'>Social Profiles</h3>
                        <div className='flex flex-col gap-3'>
                            <a href="https://www.linkedin.com/in/hamadosimean/" className='text-gray-300 hover:text-white transition-colors flex items-center gap-2'>
                                <span>LinkedIn</span>
                            </a>
                            <a href="https://github.com/hamadosimean" className='text-gray-300 hover:text-white transition-colors flex items-center gap-2'>
                                <span>GitHub</span>
                            </a>
                            <a href="https://x.com/simeanhamado" className='text-gray-300 hover:text-white transition-colors flex items-center gap-2'>
                                <span>X</span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <form className='space-y-6 bg-slate-800 p-8 rounded-xl border border-slate-700'>
                    <div>
                        <label htmlFor="name" className='block text-sm font-medium text-gray-300 mb-2'>Name</label>
                        <input
                            type="text"
                            id="name"
                            className='w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg focus:outline-none focus:border-blue-500 text-white'
                            placeholder="Your Name"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className='block text-sm font-medium text-gray-300 mb-2'>Email</label>
                        <input
                            type="email"
                            id="email"
                            className='w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg focus:outline-none focus:border-blue-500 text-white'
                            placeholder="your.email@example.com"
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className='block text-sm font-medium text-gray-300 mb-2'>Message</label>
                        <textarea
                            id="message"
                            rows="4"
                            className='w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg focus:outline-none focus:border-blue-500 text-white'
                            placeholder="Your message..."
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className='w-full py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-bold text-white transition-colors'
                        onClick={(e) => e.preventDefault()}
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Contact
