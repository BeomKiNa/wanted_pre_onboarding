import { useEffect } from "react";

const useOutsideFocus = (ref, callback) => {
  const handleCallback = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener("focusin", handleCallback);
    document.addEventListener("click", handleCallback);

    return () => {
      document.removeEventListener("focusin", handleCallback);
      document.removeEventListener("click", handleCallback);
    };
  });
};

export default useOutsideFocus;
