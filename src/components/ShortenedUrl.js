import React from 'react';

const ShortenedUrl = ({ url, onCopy }) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(url);
    onCopy();
  };

  return (
    <div className="p-4 bg-white rounded-md shadow-md flex flex-col items-center space-y-2 md:flex-row md:space-y-0 md:space-x-4 transition duration-300 ease-in-out transform hover:scale-105">
      <p className="text-lg text-gray-700">Easy Shortened URL: {url}</p>
      <button
        className="p-2 bg-blue-500 text-white rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out transform hover:scale-105"
        onClick={handleCopy}
      >
        Copy
      </button>
    </div>
  );
};

export default ShortenedUrl;







// import React from 'react';


// const ShortenedUrl = ({ url, onCopy }) => {
//   const handleCopy = () => {
//     navigator.clipboard.writeText(url);
//     onCopy();
//   };

//   return (
//     <div className="shortened-url p-4 bg-gray-100 rounded-md shadow-md flex flex-col items-center space-y-2 md:flex-row md:space-y-0 md:space-x-4">
//       <p className="text-lg text-gray-700">Shortened URL: {url}</p>
//       <button
//         className="copy-button-shorten p-2 bg-blue-500 text-white rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
//         onClick={handleCopy}
//       >
//         Copy
//       </button>
//     </div>
//   );
// };

// export default ShortenedUrl;


// import React from 'react';

// const ShortenedUrl = ({ url, onCopy }) => {
//   const handleCopy = () => {
//     navigator.clipboard.writeText(url);
//     onCopy();
//   };

//   return (
//     <div className="shortened-url">
//       <p>Shortened URL: {url}</p>
//       <button className="copy-button-shorten" onClick={handleCopy}>
//         Copy
//       </button>
//     </div>
//   );
// };

// export default ShortenedUrl;
