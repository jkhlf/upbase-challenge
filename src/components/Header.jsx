import { Calendar, User, MessageCircle, Building2, LayoutList } from 'lucide-react';
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

function Header() {
    const [activeLink, setActiveLink] = useState('/');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleLinkClick = (link) => {
        setActiveLink(link);
        setIsMenuOpen(false); 
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="bg-[#7B2CBF] p-4 rounded-b-lg">
            <header className='max-w-4xl mx-auto'>
                <div className="flex justify-between items-center md:hidden">
                    <button onClick={toggleMenu} className="text-white">
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
                <nav className={`${isMenuOpen ? 'block' : 'hidden'} md:block`}>
                    <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 justify-around items-center">
                        <li className={`flex items-center ${activeLink === '/' ? 'text-white' : 'text-gray-500'}`}>
                            <Building2 size={24} className='mr-2'/>
                            <a href="/" onClick={() => handleLinkClick('/')}>Imoveis</a>
                        </li>
                        <li className={`flex items-center ${activeLink === '/about' ? 'text-white' : 'text-gray-400'}`}>
                            <Calendar className="mr-2" />
                            <a href="/about" onClick={() => handleLinkClick('/about')}>Calendario</a>
                        </li>
                        <li className={`flex items-center ${activeLink === '/property-details' ? 'text-white' : 'text-gray-400'}`}>
                            <LayoutList className="mr-2" />
                            <a href="/property-details" onClick={() => handleLinkClick('/property-details')}>Listagem</a>
                        </li>
                        <li className={`flex items-center ${activeLink === '/contact' ? 'text-white' : 'text-gray-400'}`}>
                            <MessageCircle size={24} className='mr-2'  />
                            <a href="/contact" onClick={() => handleLinkClick('/contact')}>Contanto</a>
                        </li>
                        <li className={`flex items-center ${activeLink === '/login' ? 'text-white' : 'text-gray-400'}`}>
                            <User size={24} className='mr-2' />
                            <a href="/login" onClick={() => handleLinkClick('/login')}>Login</a>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    );
}

export default Header;