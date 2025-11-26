import React from 'react'
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'
function NavBar() {
    return (
        <div className="flex flex-col min-h-screen">
            <nav className="flex justify-center p-4 bg-gray-800">
                <ul className="flex space-x-4">
                    <li> <Link to="/" className="text-white">Home</Link></li>
                    <li> <Link to="/about" className="text-white">About</Link></li>
                    <li> <Link to="/skills" className="text-white">Skills</Link></li>
                    <li> <Link to="/projects" className="text-white">Projects</Link></li>
                    <li> <Link to="/contact" className="text-white">Contact</Link></li>
                </ul>
            </nav>
            <Outlet />
        </div>
    )
}

export default NavBar
