import { useEffect, useState } from "react";
import ButtonComponent from "../Ui/ButtonComponent";
import logo from "/shreeja_logo.png";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isFixed, setIsFixed] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScrolling = () => {
      setIsFixed(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScrolling);
    return () => window.removeEventListener("scroll", handleScrolling);
  }, []);

  const headers = [
    { label: "Home", href: "#homepage" },
    { label: "Services", href: "#services" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Why Trust Us", href: "#whyTrustUs" },
    { label: "FAQs", href: "#faqs" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`${
        isFixed
          ? "shadow-lg fixed top-0 left-0 w-full bg-white transition-all duration-200 py-2 z-50"
          : "fixed top-0 left-0 w-full bg-white py-3 transition-all duration-200 z-50"
      }`}
    >
      <div className="flex justify-between items-center container max-w-[86rem] px-4 justify-self-center transition-all duration-200 ease-in-out">
        <a href="/shreeja-digital/">
          <img
            className="logo h-10 w-auto"
            src={logo}
            alt="Shreeja Digital Agency"
            title="Shreeja Digital Agency"
          />
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center transition-all duration-200 ease-in-out">
          {headers.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="text-sm font-medium hover:text-indigo-500 transition-all"
            >
              {item.label}
            </a>
          ))}
          <span className="hidden lg:block">
            <ButtonComponent href="#contact" className="btn__primary ">
              Get Started
            </ButtonComponent>
          </span>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-700 transition-all duration-200 ease-in-out"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white px-4 pt-4 pb-6 shadow-md transition-all duration-200 ease-in-out">
          {headers.map((item, index) => (
            <a
              key={index}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className="block py-2 text-sm font-medium text-gray-800 hover:text-indigo-500 transition-all"
            >
              {item.label}
            </a>
          ))}
          <div className="mt-4">
            <ButtonComponent className="btn__primary w-full">
              Get Started
            </ButtonComponent>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
