import { useState } from "react";
import { ShareIcon } from "@heroicons/react/24/outline";

const ShareButton = ({ jobLink }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(window.location.origin + jobLink)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); 
      })
      .catch(() => {
        alert("Failed to copy link");
      });
  };

  return (
    <button
      onClick={handleCopy}
      title={copied ? "Link copied!" : "Copy job link"}
      className="ml-auto rounded-full p-2 text-gray-400 hover:bg-gray-100 hover:text-blue-600 transition"
    >
      <ShareIcon className="h-5 w-5" />
    </button>
  );
};

export default ShareButton;
