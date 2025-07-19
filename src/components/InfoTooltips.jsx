import { InformationCircleIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

export const InfoTooltip = ({ message }) => {
  const [show, setShow] = useState(false);

  return (
    <div className="relative inline-block">
      <InformationCircleIcon
        className="w-5 h-5 text-blue-600 cursor-pointer"
        onClick={() => setShow(!show)}
      />

      {show && (
        <div className="absolute z-10 w-64 p-2 text-sm text-white bg-gray-800 rounded shadow-md top-6 left-0">
          {message}
        </div>
      )}
    </div>
  );
};
