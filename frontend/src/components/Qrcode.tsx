import QR from "../assets/qr.svg";
import Button from "./Button";

function Qrcode() {
  return (
    <>
      <main>
        <div className="main-gradient flex flex-col items-center pt-16 pb-20">
          <div>
            <h1 className="">Swift QR Generation</h1>
            <h2>Instantly encode your data into codes</h2>
          </div>
          <div>
            <p>Enter Link or Text</p>
            <input type="search" name="" id="" placeholder="https://" />
            <ul className="flex">
              <li>
                <a href="">PNG</a>
              </li>
              <li>
                <a href="">JPG</a>
              </li>
              <li>
                <a href="">SVG</a>
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
