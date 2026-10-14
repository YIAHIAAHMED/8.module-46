import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <div className='flex justify-between'>
            <div className=""></div>
            <ul className='flex justify-between gap-3'>
                <li><Link href={'/'}>Home</Link></li>
                <li><Link href={'/about-us'}>About</Link></li>
                <li><Link href={'/career'}>Career</Link></li>
            </ul>
            <div className="">
                <button><Link href={'/login'}>login</Link></button>
            </div>
        </div>
    );
};

export default Navbar;