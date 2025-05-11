import React from 'react';
import logo from "../assets/logo.png";
        
const Navbar = () => {
    const links = [
      { name: "Accueil", href: "#accueil" },
      { name: "Description", href: "#description" },
      { name: "Membres", href: "#membres" },
      { name: "Événements", href: "#evenements" },
      { name: "Contact", href: "#contact" },
      ];
  return (
     <nav className="bg-yellow-400/70 backdrop-blur-md px-4 py-2 fixed top-0 w-full z-50 shadow-md">
       <div className="max-w-7xl mx-auto flex items-center justify-between flex-wrap">
          <div className="flex items-center">
            <img src={logo} alt="Logo Enactus" className="h-16 w-auto mr-4" />
          </div>
          <div className="flex flex-wrap justify-center gap-4 mt-2 md:mt-0">
            {links.map((link) => (
              <a
                key={link.name} href={link.href} className="text-white text-lg font-bold hover:text-yellow-600 transition duration-200">
                  {link.name}
              </a>
               ))}
            </div>
      </div>
    </nav>
);
};
        
export default Navbar;

