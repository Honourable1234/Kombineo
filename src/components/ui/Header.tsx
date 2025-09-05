import { useState } from "react";
import Logo from "../../assets/Logo.png";
import { motion } from "framer-motion";

function Header() {
  const links = ["Acceuil", "Features", "Pricing", "About"];
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <header className="w-full sticky top-3.5 z-50">
      <nav className="flex items-center justify-between w-[90%] max-w-6xl mx-auto p-4 rounded-[1.25rem] bg-white/80 h-[72px] drop-shadow-[0_2.88px_7.7px_#0000000A]">
        {/* Logo */}
        <a href="/" className="flex items-center leading-none">
          <img src={Logo} alt="Logo" className="h-12 w-8" />
          <p className="custom-textGradient text-2xl font-extrabold px-2 py-4">
            Kombineo
          </p>
        </a>

        {/* Desktop Links */}
        <ul className="hidden lg:flex gap-6 font-medium">
          {links.map((link) => (
            <li
              key={link}
              className="custom-textGradient cursor-pointer hover:opacity-80 transition"
            >
              {link}
            </li>
          ))}
        </ul>

        {/* Desktop Button */}
        <button className="hidden lg:block transition ease-out duration-300 custom-bgGradient h-12 px-6 rounded-lg outline-none cursor-pointer hover:opacity-90 text-white font-medium">
          Demander une démo
        </button>

        {/* Mobile Hamburger */}
        <div
          role="button"
          onClick={toggleMenu}
          aria-label="menu button"
          className="lg:hidden flex flex-col gap-1.5 cursor-pointer origin-center"
        >
          <motion.div
            animate={{ rotate: isMenuOpen ? 45 : 0, y: isMenuOpen ? 6 : 0 }}
            className="block h-[1px] origin-center bg-black w-6"
          />
          <motion.div
            animate={{ opacity: isMenuOpen ? 0 : 1 }}
            className="block h-[1px] bg-black w-6"
          />
          <motion.div
            animate={{ rotate: isMenuOpen ? -45 : 0, y: isMenuOpen ? -6 : 0 }}
            className="block h-[1px] origin-center bg-black w-6"
          />
        </div>
      </nav>

      {/* Mobile Menu (shown when open) */}
      {isMenuOpen && (
        <motion.ul
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: -10 }}
          exit={{ opacity: 0, y: -10 }}
          className="lg:hidden flex flex-col w-[90%] relative z-20  items-center gap-6 bg-white/95 py-6 shadow-md rounded-b-xl mx-auto font-medium"
        >
          {links.map((link) => (
            <li
              key={link}
              className="custom-textGradient  cursor-pointer hover:opacity-80 transition"
            >
              {link}
            </li>
          ))}
          <button className="transition ease-out duration-300 custom-bgGradient h-12 px-6 rounded-lg outline-none cursor-pointer hover:opacity-90 text-white font-medium">
            Demander une démo
          </button>
        </motion.ul>
      )}
    </header>
  );
}

export default Header;
