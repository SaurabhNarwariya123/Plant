import React, { useState } from "react";
import { GiPlantRoots } from "react-icons/gi";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleScroll = (id) => {
    
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: id } });
    } else {
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false); 
  };

  const isAdminPage = location.pathname === "/admin";

  return (
    <nav className="bg-green-600 text-white px-6 py-4 shadow-md relative">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <GiPlantRoots size={28} />
         <span
             className="text-2xl font-bold cursor-pointer"
              onClick={() => navigate("/", { state: { scrollTo: "top" } })}
              >
             Mini Plant Store
          </span>

        </div>

        <ul className="hidden md:flex space-x-6 font-medium">
          <li
            className="cursor-pointer"
            onClick={() => (isAdminPage ? navigate("/admin") : handleScroll("top"))}
          >
            
          </li>
          {!isAdminPage && (
            <>
               <li className="cursor-pointer" onClick={() => handleScroll("top")}>Home</li>
              <li className="cursor-pointer" onClick={() => handleScroll("plants")}>Plants</li>
              <li className="cursor-pointer" onClick={() => handleScroll("about")}>About</li>
              <li className="cursor-pointer" onClick={() => handleScroll("footer")}>Contact</li>
            </>
          )}
        </ul>

        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden fixed top-16 left-0 w-full bg-green-700 text-white z-50 shadow-lg">
          <ul className="flex flex-col text-center font-medium py-4">
            <li
              className="py-3 hover:bg-green-800"
              onClick={() => (isAdminPage ? navigate("/admin") : handleScroll("top"))}
            >
              {isAdminPage ? "Admin" : "Home"}
            </li>
            {!isAdminPage && (
              <>
                <li className="py-3 hover:bg-green-800" onClick={() => handleScroll("top")}>Plants</li>
                <li className="py-3 hover:bg-green-800" onClick={() => handleScroll("plants")}>Plants</li>
                <li className="py-3 hover:bg-green-800" onClick={() => handleScroll("about")}>About</li>
                <li className="py-3 hover:bg-green-800" onClick={() => handleScroll("footer")}>Contact</li>
              </>
            )}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
