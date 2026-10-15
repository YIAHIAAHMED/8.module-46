
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavLink = ({ href, children }) => {
    const pathname = usePathname();
    const isActive = href === pathname;

    return (
        <Link
            href={href}
            className={`pb-2 ${
                isActive
                    ? 'border-b-2 border-purple-500 font-semibold'
                    : 'hover:text-purple-400'
            }`}
        >
            {children}
        </Link>
    );
};

export default NavLink;
