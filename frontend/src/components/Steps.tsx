import { Fa1 } from "react-icons/fa6";
import { Fa2 } from "react-icons/fa6";
import { Fa3 } from "react-icons/fa6";

function Steps() {
  return (
    <>
      <section className="p-6 sm:p-10 px-6 max-w-5xl m-auto ">
        <div className="text-center flex flex-col items-center">
          <p className="bg-red-500 rounded-full w-32 p-2 text-white font-semibold">
            How to Use
          </p>
        </div>
        <div className="flex p-8">
          <div className="sm:pl-30 sm:pr-48">
            <Fa1 size={100} />
          </div>

          <div className="sm:px-40 sm:my-1">
            <h1 className="font-bold sm:text-5xl text-3xl">
              Create an Account
            </h1>
            <p className="font-light sm:text-2xl pt-10">
              Sign up on ScanForge by providing the required information to
              create your account.
            </p>
          </div>
        </div>
        <div className="flex p-8">
          <div className="sm:pl-30 sm:pr-48">
            <Fa2 size={100} />
          </div>

          <div className="sm:px-40 sm:my-1">
            <h1 className="font-bold sm:text-5xl text-3xl">Generate QR Code</h1>
            <p className="font-light sm:text-2xl pt-10">
              Access the QR Code Generator in your dashboard after logging in
            </p>
          </div>
        </div>
        <div className="flex p-8">
          <div className="sm:pl-30 sm:pr-48">
            <Fa3 size={100} />
          </div>

          <div className="sm:px-40 sm:my-1">
            <h1 className="font-bold sm:text-5xl text-3xl">Download & Share</h1>
            <p className="font-light sm:text-2xl pt-10">
              Choose the type of QR code, fill in what you want to encode.
              Download your generated QR code and share.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Steps;
