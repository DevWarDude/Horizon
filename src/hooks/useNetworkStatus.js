import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export function useNetworkStatus() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
      toast.dismiss("offline-toast");
      toast.success("You're back online!");
    };

    const handleOffline = () => {
      setIsOnline(false);
      toast.error("You're offline. Changes may not save.", {
        toastId: "offline-toast",
      });
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return isOnline;
}
