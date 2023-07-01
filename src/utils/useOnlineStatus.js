import { useEffect, useState } from "react";
const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState("online");

  addEventListener("online", (event) => {
    setOnlineStatus("online");
  });

  addEventListener("offline", (event) => {
    setOnlineStatus("offline");
  });

  return onlineStatus;
};

export default useOnlineStatus;
