import { useState } from "react";
import QR from "../assets/qr.svg";
import Button from "./Button";

function Qrcode() {
  const [selectedFormat, setSelectedFormat] = useState("");

  const handleClick = (format: string) => {
    setSelectedFormat(format);
  };
  return (
    <>
      <main>
        <div className="main-gradient flex flex-col items-center pt-16 pb-20">
          <div>
            <h1 className="text-white font-bold text-7xl">
              ScanForge QR Generation
            </h1>
            <h2 className="text-center text-white text-4xl font-semibold">
              Instantly encode your data into codes
            </h2>
          </div>
          <div className="p-4">
            <p className="text-white text-sm font-bold">Enter Link or Text</p>
            <input
              type="text"
              placeholder="https://"
              className="p-4 input-width rounded-xl  ... outline-transparent"
            />
            <ul className="flex space-x-2 text-white font-semibold text-sm">
              <li
                className={`cursor-pointer ${
                  selectedFormat === "PNG" ? "underline decoration-2" : ""
                }`}
                onClick={() => handleClick("PNG")}
              >
                PNG
              </li>
              <li
                className={`cursor-pointer ${
                  selectedFormat === "JPG" ? "underline decoration-2" : ""
                }`}
                onClick={() => handleClick("JPG")}
              >
                JPG
              </li>
              <li
                className={`cursor-pointer ${
                  selectedFormat === "SVG" ? "underline decoration-2" : ""
                }`}
                onClick={() => handleClick("SVG")}
              >
                SVG
              </li>
            </ul>
          </div>
          <div className="pb-8">
            <img src={QR} alt="" className="opacity-70 bg-white" />
          </div>

          <Button
            style="w-32 text-white bg-red-700 hover:bg-orange-600 p-4 font-semibold rounded-lg"
            type="button"
            onClick={() => console.log()}
            text="Generate"
          />
        </div>
      </main>
    </>
  );
}

export default Qrcode;
