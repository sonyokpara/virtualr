import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-lg py-3 border-b border-neutral-700/80">
      <nav className="px-4 mx-auto relative text-ms container">
        <div className="flex justify-center items-center">
          <div className="flex items-center flex-shrink-0">
            <img src={logo} alt="logo" className="w-10 h-10 mr-2" />
            <span className="tracking-tight text-xl">VirtualR</span>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
