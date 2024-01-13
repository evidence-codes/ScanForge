import { FaLinux } from "react-icons/fa6";
import { FaWindows } from "react-icons/fa6";
import { BiLogoPlayStore } from "react-icons/bi";
import { GoDownload } from "react-icons/go";
import Button from "./Button";

function Download() {
  return (
    <section className="bg-red-500 p-8">
      <div className="flex items-center justify-center text-white text-4xl font-extrabold p-8">
        <GoDownload className="mr-2" />
        <h1>Downloads</h1>
      </div>
      <div className="flex sm:flex-row flex-col space-x-7 items-center justify-center p-10">
        <div className="sm:px-36 pb-4">
          <div>
            <BiLogoPlayStore size={150} color="#fff" />
          </div>
          <div className="pt-2">
            <Button
              style="w-48 text-red-400 bg-white hover:opacity-75 p-4 font-semibold flex items-center justify-center"
              type="button"
              onClick={() => console.log()}
            >
              <GoDownload className="mr-3" /> Android
            </Button>
          </div>
        </div>
        <div className="sm:px-36 pb-4">
          <div>
            <FaWindows size={150} color="#fff" />
          </div>
          <div className="pt-2">
            <Button
              style="w-48 text-red-400 bg-white hover:opacity-75 p-4 font-semibold flex items-center justify-center"
              type="button"
              onClick={() => console.log()}
            >
              <GoDownload className="mr-3" /> Windows
            </Button>
          </div>
        </div>
        <div className="sm:px-36 pb-4">
          <div>
            <FaLinux size={150} color="#fff" />
          </div>
          <div className="pt-2">
            <Button
              style="w-48 text-red-400 bg-white hover:opacity-75 p-4 font-semibold flex items-center justify-center"
              type="button"
              onClick={() => console.log()}
            >
              <GoDownload className="mr-3" /> Linux
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Download;
