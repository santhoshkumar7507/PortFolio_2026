import { useState } from 'react';

const ResumeButton = () => {
  const [isDownloading, setIsDownloading] = useState(false);
  const resumeSrc = "/santhosh_resume.pdf";
  const fileName = "Santhosh_Kumar_Resume.pdf";

  const handleDownload = () => {
    setIsDownloading(true);
    
    // Simulate a brief downloading state for UX
    setTimeout(() => {
      setIsDownloading(false);
    }, 1000);
  };

  return (
    <a
      href={resumeSrc}
      download={fileName}
      onClick={handleDownload}
      className="text-black hover:text-gray-700 cursor-pointer transition-colors font-medium relative group"
    >
      {isDownloading ? 'Downloading...' : 'View my Resume'}
    </a>
  );
};

export default ResumeButton;
