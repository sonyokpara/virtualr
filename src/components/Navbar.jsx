import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/logo.png";
import { navItems } from "../constants";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenuOpen = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur-lg py-3 border-b border-neutral-700/80">
      <nav className="px-4 mx-auto relative text-ms container">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img src={logo} alt="logo" className="w-10 h-10 mr-2" />
            <span className="tracking-tight text-xl">VirtualR</span>
          </div>

          <ul className="hidden lg:flex space-x-12 ml-12">
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>

          <div className="hidden lg:flex justify-center items-center space-x-8">
            <a
              href="#"
              className="px-2 py-1 border border-slate-500/55 rounded-md"
            >
              Sign In
            </a>
            <a
              href="#"
              className="bg-gradient-to-r from-orange-500 to-orange-800 py-1 px-2 rounded-md"
            >
              Create an account
            </a>
          </div>
          <div className="lg:hidden md:flex justify-end py-1 px-2">
            <button onClick={toggleMobileMenuOpen}>
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileMenuOpen && (
          <div className="fixed right-0 z-20 bg-neutral-900 lg:hidden flex flex-col justify-center items-center p-12 w-full">
            <ul className="space-y-8">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a href={item.href} className="hover:text-gray-400">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex space-x-8 mt-10">
              <a
                href="#"
                className="px-2 py-1 border border-slate-500/55 rounded-md"
              >
                Sign In
              </a>
              <a
                href="#"
                className="bg-gradient-to-r from-orange-500 to-orange-800 py-1 px-2 rounded-md"
              >
                Create an account
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
