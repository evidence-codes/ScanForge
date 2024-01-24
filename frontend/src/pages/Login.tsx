import Form from "../components/Form";

function Login() {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Left side (header on smaller screens) */}
      <div className="w-full md:w-1/2 sm:grad-pic main-gradient p-4 text-white flex items-center justify-center">
        <p className="text-center font-bold text-3xl sm:text-5xl">ScanForge</p>
      </div>

      {/* Right side with form */}
      <div className="w-full md:w-1/2 flex items-center justify-center">
        <Form />
      </div>
    </div>
  );
}

export default Login;
