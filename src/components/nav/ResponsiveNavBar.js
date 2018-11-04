import React from 'react';
import DesktopNavBar from './DesktopNavBar';
import MobileNavBar from './MobileNavBar';

const links = [
    { to: '/', name: 'בית' },
    { to: '/new', name: 'חדש' },
];

const ResponsiveNavBar = () => (
    <div className='nav-container'>
        <DesktopNavBar links={links} />
        <MobileNavBar links={links} />
    </div>
)

export default ResponsiveNavBar;