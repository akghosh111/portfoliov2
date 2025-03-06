import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { display: "Achievements", href: "#achievements" },
    { display: "Projects", href: "#projects" },
    { display: "Skills", href: "#skills" },
    { display: "Contact", href: "#contact" },
  ];

  return (
    <nav className="sticky top-0 w-full bg-neutral-800/30 backdrop-blur-lg z-10">
      <div className="flex justify-between items-center px-6 py-4">
        
        <div className="text-xl font-bold text-white h1">Anukiran Ghosh</div>

       
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✖" : "☰"}
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 text-sm text-white">
          {navLinks.map((link) => (
            <li key={link.display} className="cursor-pointer font-medium">
              <a href={link.href} className="hover:text-purple-300 transition">
                {link.display}
              </a>
            </li>
          ))}
        </ul>
      </div>

      
      {isOpen && (
        <ul className="md:hidden flex flex-col items-center gap-4 py-4 bg-neutral-700/80 backdrop-blur-lg text-white">
          {navLinks.map((link) => (
            <li key={link.display} className="cursor-pointer font-medium">
              <a href={link.href} onClick={() => setIsOpen(false)}>
                {link.display}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
