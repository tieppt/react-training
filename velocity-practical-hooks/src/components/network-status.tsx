import React, { useState, useEffect } from "react";

export function NetworkStatus() {
  const [networkStatus, setNetworkStatus] = useState<"online" | "offline">(() =>
    navigator.onLine ? "online" : "offline"
  );
  function handleOnline() {
    console.log("online");
    setNetworkStatus("online");
  }
  function handleOffline() {
    console.log("offline");
    setNetworkStatus("offline");
  }
  useEffect(() => {
    // register events
    window.addEventListener("offline", handleOffline);
    window.addEventListener("online", handleOnline);
    return () => {
      // unregister events
      window.removeEventListener("offline", handleOffline);
      window.removeEventListener("online", handleOnline);
    };
  }, []);
  const className = "ns-" + networkStatus;
  return (
    <div className="ns-container">
      <span className={className}></span>
      {networkStatus}
    </div>
  );
}
