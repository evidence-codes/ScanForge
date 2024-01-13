import "./App.css";
import Download from "./components/Download";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Qrcode from "./components/Qrcode";
import Step from "./components/Steps";

function App() {
  return (
    <>
      <Header />
      <Qrcode />
      <Step />
      <Download />
      <Footer />
    </>
  );
}

export default App;
