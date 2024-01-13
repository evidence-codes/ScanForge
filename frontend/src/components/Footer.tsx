import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="p-8 flex flex-col md:flex-row justify-between items-center">
      <div className="flex items-center mb-4 md:mb-0">
        <div>
          <p>Follow the Dev on:</p>
        </div>
        <div className="ml-2">
          <FaXTwitter />
        </div>
        <div className="ml-2">
          <FaGithub />
        </div>
      </div>
      <div className="flex items-center">
        {/* Your logo component with copyright text */}
        <div className="ml-2">
          <div className="font-bold text-2xl cursor-pointer flex items-center">
            ScanForge
          </div>
          <p className="mt-1 text-sm">Copyright © 2024</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
