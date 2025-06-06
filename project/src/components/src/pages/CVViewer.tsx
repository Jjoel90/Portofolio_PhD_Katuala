import React from 'react';

const CVViewer = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-4">
      <iframe
        src="/cv-katuala.pdf"
        title="CV de Me. Katuala Gize Regis"
        width="100%"
        height="1000px"
        className="border rounded-md shadow-lg w-full max-w-5xl"
      />
    </div>
  );
};

export default CVViewer;






