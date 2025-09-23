'use client'
import Link from 'next/link'
import { useState } from 'react'
import { FaPlay } from 'react-icons/fa'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <nav className="fixed top-0 left-0 w-full py-7 flex justify-between items-center   z-50 bg-[#efefef] dark:text-[#efeded] dark:bg-[transparent]  px-5 md:px-10">
                {/* Logo */}
                <Link href="/">
                    <h1 className="tracking-widest md:text-2xl">Sagar Raghav</h1>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-7 md:text-xl items-center">
                    <p className=" py-2 px-4 cursor-pointer">
                        <FaPlay />
                    </p>
                    <Link href="/about"><p className="cursor-pointer">About</p></Link>
                    <Link href="/projects"><p className="cursor-pointer">Projects</p></Link>
                    <Link href="/capabilities"><p className="cursor-pointer">Capabilities</p></Link>
                    <Link href="/contact"><p className="cursor-pointer">Contact</p></Link>
                </div>

                {/* Mobile Menu Button */}
                <div className="flex md:hidden items-center">
                    <p className="bg-[#efefef] dark:bg-[#797878aa]   py-3 px-4 cursor-pointer">
                        <FaPlay />
                    </p>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="bg-[#fcfcfc] dark:bg-[#797878aa]  py-2 px-4"
                    >
                        {isOpen ? 'Close' : 'Menu'}
                    </button>
                </div>
            </nav>


            {/* Fullscreen Mobile Menu with transition */}
            <div
                className={`fixed inset-0 bg-[#efefef] dark:text-[#efeded] dark:bg-[#797878]  px-5 flex flex-col items-start justify-center gap-8 z-40 transform transition-transform duration-500 ease-in-out ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
                    }`}
            >
                {[
                    { name: 'About', href: '/about' },
                    { name: 'Projects', href: '/projects' },
                    { name: 'Capabilities', href: '/capabilities' },
                    { name: 'Contact', href: '/contact' },
                ].map((item) => (
                    <Link key={item.href} href={item.href} onClick={() => setIsOpen(false)}>
                        <div >
                            <p className="text-3xl relative z-10">
                                {item.name}
                            </p>
                            {/* background hover animation */}
                            <hr className="border-t border-[#d4d4d4]" />
                        </div>
                    </Link>
                ))}
            </div>
        </>
    )
}

export default Navbar
