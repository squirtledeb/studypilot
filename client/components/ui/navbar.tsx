import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { Menu, X } from "lucide-react";

const NavLink = ({
  href,
  children,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}) => (
  <a
    href={href}
    onClick={onClick}
    className="text-gray-600 hover:text-emerald-600 transition-colors duration-300 font-medium"
  >
    {children}
  </a>
);

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    });
  }, [controls]);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={controls}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || mobileMenuOpen
          ? "bg-white/95 shadow-md backdrop-blur-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          <a
            href="#"
            onClick={() => scrollToSection("hero")}
            className="text-2xl font-bold text-primary"
          >
            StudyPilot
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="#hero" onClick={() => scrollToSection("hero")}>Home</NavLink>
            <NavLink href="#about" onClick={() => scrollToSection("about")}>About</NavLink>
            <NavLink href="#services" onClick={() => scrollToSection("services")}>Services</NavLink>
            <NavLink href="#results" onClick={() => scrollToSection("results")}>Results</NavLink>
            <NavLink href="#contact" onClick={() => scrollToSection("contact")}>Contact</NavLink>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-600 hover:text-emerald-600 focus:outline-none"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white py-4">
          <div className="flex flex-col items-center space-y-4">
            <NavLink href="#hero" onClick={() => scrollToSection("hero")}>Home</NavLink>
            <NavLink href="#about" onClick={() => scrollToSection("about")}>About</NavLink>
            <NavLink href="#services" onClick={() => scrollToSection("services")}>Services</NavLink>
            <NavLink href="#results" onClick={() => scrollToSection("results")}>Results</NavLink>
            <NavLink href="#contact" onClick={() => scrollToSection("contact")}>Contact</NavLink>
          </div>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;
