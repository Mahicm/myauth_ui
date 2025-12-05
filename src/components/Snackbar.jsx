import React, { useEffect } from "react";

const Snackbar = ({ message, type = "success", onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000); // auto close 3 sec

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`
        fixed bottom-6 left-1/2 -translate-x-1/2 
        px-5 py-3 rounded-xl shadow-lg text-white font-medium
        transition-all duration-300 animate-slide-up
        ${type === "success" ? "bg-green-600" : "bg-red-600"}
      `}
    >
      {message}
    </div>
  );
};

export default Snackbar;
