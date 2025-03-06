const Navbar = () => {
    const navLinks = [
      {
        display: "Achievements",
      },
      {
        display: "Projects",
      },
      {
        display: "Skills",
      },
      {
        display: "Contact",
      },
    ];
  
    return (
      <nav className="sticky top-0 w-screen flex justify-center items-center h-24 z-10">
        <ul className="flex items-center gap-6 text-sm py-5 px-6 dark:text-white bg-neutral-500/30 backdrop-blur-lg rounded-md">
          {navLinks.map((link) => (
            <li key={link.display} className="cursor-pointer font-medium">
              {link.display}
            </li>
          ))}
        </ul>
      </nav>
    );
  };
  
  export default Navbar;