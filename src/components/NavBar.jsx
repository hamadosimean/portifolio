import React from 'react'
import { Outlet } from 'react-router-dom'
function NavBar() {
    return (
        <div className="flex flex-col min-h-screen">
            <nav className="flex justify-center p-4 bg-gray-800">
                <ul className="flex space-x-4">
                    <li> <a href="/" className="text-white">Home</a></li>
                    <li> <a href="/about" className="text-white">About</a></li>
                    <li> <a href="/skills" className="text-white">Skills</a></li>
                    <li> <a href="/projects" className="text-white">Projects</a></li>
                    <li> <a href="/contact" className="text-white">Contact</a></li>
                </ul>
            </nav>
            <Outlet />
        </div>
    )
}

export default NavBar
