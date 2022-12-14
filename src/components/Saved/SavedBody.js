import React from "react";
import SavedMessageCard from "./SavedMessageCard";

function SavedBody() {
  return (
    <div
      style={{
        overflowY: "auto",
        borderTop: "1px solid rgba(255,255,255,0.1)",
        maxHeight: "calc(100vh - 90px)",
        borderBottom: "1px solid rgba(255,255,255,0.1)",
      }}
      className="bg-[#222529] px-4 overflow-y-auto pb-10"
    >
      <div className="mt-5"></div>
      <SavedMessageCard />
      <SavedMessageCard />
      <SavedMessageCard />
      <SavedMessageCard />
      <SavedMessageCard />
      <SavedMessageCard />
      <SavedMessageCard />
      <SavedMessageCard />
      <SavedMessageCard />
    </div>
  );
}

export default SavedBody;
