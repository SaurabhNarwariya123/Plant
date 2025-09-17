import { FaInstagram, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export default function Footer() {
  return (
    <footer   id="footer" className="bg-green-700 text-white py-6 mt-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
  
        <div className="flex flex-col text-center md:text-left gap-1">
          <h2 className="font-bold text-lg">Plant Store</h2>
          <p>Email: saurabhnarwariya2019@gmail.com</p>
          <p>Phone: +91 6397496753</p>
          <p>Address: gole ka mandir, Gwalior, India</p>
        </div>

        <div className="flex justify-center space-x-6">
          
          <a href="https://www.instagram.com/saurabh_lodhi_706" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={24} className="hover:text-pink-400" />
          </a>
          <a href="https://mail.Saurabhnarwariya2019@gmail.com" target="_blank" rel="noopener noreferrer">
            <SiGmail size={24} className="hover:text-red-400" />
          </a>
          <a href="https://github.com/SaurabhNarwariya123" target="_blank" rel="noopener noreferrer">
            <FaGithub size={24} className="hover:text-gray-300" />
          </a>
          <a href="https://www.linkedin.com/in/saurabh-narwariya-7b64891a7/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={24} className="hover:text-blue-400" />
          </a>
          <a href="https://wa.me/6397496753" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp size={24} className="hover:text-green-400" />
          </a>
         
        </div>
         
      </div>

      <p className="text-center text-sm mt-6">© 2025 Plant Store. All Rights Reserved.</p>
    </footer>
  );
}
