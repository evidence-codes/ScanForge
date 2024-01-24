import { useNavigate } from "react-router-dom";
import Button from "./Button";

function Header() {
  const navigate = useNavigate();

  const handleGetStartedClick = () => {
    // Navigate to the "auth" page
    navigate("/auth");
  };

  return (
    <header>
      <div className="h-3 bg-custom-gradient"></div>
      <div className="p-10 flex items-center justify-between py-4 md:px-10 px-7">
        <div className=" font-bold text-2xl cursor-pointer flex items-center ">
          ScanForge
        </div>
        <ul className="sm:flex sm:items-center">
          <Button
            style="w-32 text-white bg-red-500 hover:bg-orange-600 p-4 font-semibold rounded-lg"
            type="button"
            onClick={handleGetStartedClick}
            text="Get Started"
          />
        </ul>
      </div>
    </header>
  );
}

export default Header;
