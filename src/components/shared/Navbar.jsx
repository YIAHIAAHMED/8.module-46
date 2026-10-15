import Link from 'next/link';
import React from 'react';
import NavLink from './NavLink';

const Navbar = () => {
    return (
        <div className='flex justify-between'>
            <div className=""></div>
            <ul className='flex justify-between gap-3'>
                <li><NavLink href={'/'}>Home</NavLink></li>
                <li><NavLink href={'/about-us'}>About</NavLink></li>
                <li><NavLink href={'/career'}>Career</NavLink></li>
            </ul>
            <div className="">
                <button><Link href={'/login'}>login</Link></button>
            </div>
        </div>
    );
};

export default Navbar;