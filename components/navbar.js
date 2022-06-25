import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import navIcon from '../public/icons/list.svg';

export default function Navbar() {
    const [navbarOpen, setNavbarOpen] = useState(false);

    // Close navbar menu
    const closeMenu = () => {
        setNavbarOpen(false);
    }

    return (
        <div className='bg-gray-800 sticky top-0 z-10'>
            <button className='md:hidden' onClick={(e) => {
                e.preventDefault(); 
                setNavbarOpen(!navbarOpen)}
                }>
                <Image src={navIcon} alt="Nav Icon" width={50} height={50} />
            </button>

            <div className={
                    // If navbar is closed on small screens then hide the navbar list,
                    // If screen size is medium then display navbar normaly,
                    // else, (Navbar expand btn clicked) display the navbar for mobile screens.
                    `${!navbarOpen ? "hidden md:block md:justify-center md:text-center md:font-BebasNeue md:text-4xl" 
                    : "justify-center font-BebasNeue text-4xl"}`
                }>

                <ul className='md:flex justify-center inline-block list-none'>
                    <li className='p-4 text-white'>
                        <Link href='/#about'><a onClick={closeMenu}>About</a></Link>
                    </li>
                    <li className='p-4 text-white'>
                    <Link href='/#skills'><a onClick={closeMenu}>Skills</a></Link>
                    </li>
                    <li className='p-4 text-white'>
                        <Link href='/#projects'><a onClick={closeMenu}>Projects</a></Link>
                    </li>
                </ul>
            </div>
            
        </div>
    )
}