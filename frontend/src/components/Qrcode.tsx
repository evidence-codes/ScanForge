import { useState } from "react";
import QR from "../assets/qr.svg";
import Button from "./Button";
import { IoReload } from "react-icons/io5";

function Qrcode() {
  // const [selectedFormat, setSelectedFormat] = useState("");

  // const handleClick = (format: string) => {
  //   setSelectedFormat(format);
  // };
  const [inputValue, setInputValue] = useState<string>("");
  const [qrData, setQrData] = useState<string | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleGenerateClick = async () => {
    try {
      const response = await fetch(
        "https://scanforge.onrender.com/api/qr/generate",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ url: inputValue }),
        }
      );

      if (response.ok) {
        const result = await response.json();
        console.log("QR Code generated:", result);
        setQrData(result.data.image);
      } else {
        console.error("Failed to generate QR code");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleDownloadClick = () => {
    const link = document.createElement("a");
    link.href = `data:image/png;base64,${qrData}`;
    link.download = "qrcode.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleReloadClick = () => {
    setInputValue("");
    setQrData(null);
  };
  return (
    <>
      <main className="shadow-2xl shadow-red-400">
        <div className="main-gradient flex flex-col items-center pl-4 pr-4 pt-16 pb-20 sm:p-10">
          <div>
            <h1 className="text-white font-bold sm:text-7xl text-4xl text-center">
              ScanForge QR Generation
            </h1>
            <h2 className="text-center text-white sm:text-4xl text-xl pt-2 pl-8 pr-8 font-semibold">
              Instantly encode your data into codes
            </h2>
          </div>
          <div className="p-4">
            <p className="text-white text-sm font-bold">Enter Link or Text</p>
            <input
              type="text"
              value={inputValue}
              placeholder="https://"
              className="p-4 sm:input-width w-80 rounded-xl  ... outline-transparent"
              onChange={handleChange}
            />
            {/* <ul className="flex space-x-2 text-white font-semibold text-sm">
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
            </ul> */}
          </div>
          <div className="pb-4">
            {/* Conditionally render the generated QR code or the demo QR code */}
            {qrData ? (
              <img
                src={`data:image/png;base64,${qrData}`}
                alt="Generated QR Code"
                style={{ width: "300px", height: "300px" }}
              />
            ) : (
              <img
                src={QR}
                alt="Demo QR Code"
                className="opacity-70 bg-white"
              />
            )}
          </div>

          {qrData ? (
            <div className="flex justify-center space-x-4 w-80">
              <Button
                style="w-32 text-white bg-red-500 hover:bg-orange-600 p-4 font-semibold rounded-lg"
                type="button"
                onClick={qrData ? handleDownloadClick : handleGenerateClick}
                text={qrData ? "Download" : "Generate"}
              />
              <Button
                style="w-24 flex justify-center items-center text-white bg-gray-500 hover:bg-gray-600 p-4 font-semibold rounded-lg"
                type="button"
                onClick={handleReloadClick}
              >
                <IoReload size={30} />
              </Button>
            </div>
          ) : (
            <Button
              style="w-32 text-white bg-red-500 hover:bg-orange-600 p-4 font-semibold rounded-lg"
              type="button"
              onClick={handleGenerateClick}
              text="Generate"
            />
          )}
        </div>
      </main>
    </>
  );
}

export default Qrcode;
