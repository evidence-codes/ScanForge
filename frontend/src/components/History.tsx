interface HistoryProps {
  onHistoryItemClick: (item: string) => void;
}

function History({ onHistoryItemClick }: HistoryProps) {
  return (
    <div className="w-1/4 bg-gray-200 p-4">
      {/* Content for the left section */}
      <div className="p-2">
        <p
          className="border border-solid border-pink-500 rounded-lg p-4 cursor-pointer"
          onClick={() => onHistoryItemClick("New")}
        >
          New
        </p>
      </div>
      <div className="p-2">
        <p
          className="border border-solid border-pink-500 rounded-lg p-4 cursor-pointer"
          onClick={() => onHistoryItemClick("Evidence")}
        >
          Evidence website
        </p>
      </div>
      {/* Logout button */}
      <div className="mt-auto">
        <button className="text-red-500" onClick={() => console.log("Logout")}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default History;
