import React from "react";
import DirectMessageCard from "./DirectMessageCard";

function DirectMessageBody() {
  return (
    <div
      style={{
        //   position: "relative",
        overflowY: "auto",
        borderTop: "1px solid rgba(255,255,255,0.1)",
        maxHeight: "calc(100vh - 138px)",
        borderBottom: "1px solid rgba(255,255,255,0.1)",
      }}
      className="bg-[#222529] px-4 overflow-y-auto pb-10"
    >
      <div className="mt-5"></div>
      <DirectMessageCard />
      <DirectMessageCard />
      <DirectMessageCard />
      <DirectMessageCard />
      <DirectMessageCard />
      <DirectMessageCard />
      <DirectMessageCard />
    </div>
  );
}

export default DirectMessageBody;
