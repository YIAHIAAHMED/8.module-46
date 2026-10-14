'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLink = ({ href, children, className = '' }) => {
    const pathname = usePathname();
    
    // Optional: Normalize paths to handle trailing slashes consistently
    const isActive = pathname === href || (href !== '/' && pathname.startsWith(`${href}/`));

    return (
        <Link 
            href={href}
            className={`${className} transition-colors ${
                isActive ? 'border-b-2 border-purple-500 font-semibold' : 'hover:text-purple-400'
            }`}
        >
            {children}
        </Link>
    );
};

export default NavLink;