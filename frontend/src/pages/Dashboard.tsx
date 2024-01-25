import QR from "../assets/qr.svg";

import { useState } from "react";
import Header from "../components/Header";
import Qrcode from "../components/Qrcode";
import History from "../components/History";

function Dashboard() {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const handleHistoryItemClick = (item: string) => {
    setSelectedItem(item);
  };

  return (
    <>
      <Header />

      <div className="flex">
        {/* Left Section */}
        <History onHistoryItemClick={handleHistoryItemClick} />

        {/* Right Section (QRcode component or other content) */}
        <div className="w-3/4 p-4">
          {selectedItem === "New" && (
            <div>
              {/* Content for 'New' item */}
              <Qrcode />
            </div>
          )}
          {selectedItem === "Evidence" && (
            <div>
              {/* Content for 'Evidence' item */}
              <img src={QR} alt="Evidence" />
            </div>
          )}
          {!selectedItem && (
            <div>
              {/* Default content when no item is selected */}
              <Qrcode />
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Dashboard;
