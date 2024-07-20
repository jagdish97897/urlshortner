import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const URLHistory = ({ history, onClearHistory }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const formattedDate = date.toLocaleDateString();
    const formattedTime = date.toLocaleTimeString();
    return `${formattedDate} ${formattedTime}`;
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    toast.success('URL copied to clipboard!');
  };

  const handleClearHistory = () => {
    if (history.length > 0) {
      onClearHistory();
      toast.warn('URL history cleared!');
    }
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = history.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(history.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <div className="p-4 bg-white rounded-md shadow-md transition duration-300 ease-in-out transform hover:scale-105 max-w-full">
      <h2 className="text-xl font-semibold mb-4">URL History</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-md shadow-sm">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2 text-left">Original URL</th>
              <th className="p-2 text-left">Shortened URL</th>
              <th className="p-2 text-left">Created At</th>
              <th className="p-2 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map(({ originalUrl, shortUrl, createdAt }, index) => (
              <tr key={index} className="border-t border-gray-200">
                <td className="p-2">{originalUrl}</td>
                <td className="p-2">{shortUrl}</td>
                <td className="p-2">{formatDate(createdAt)}</td>
                <td className="p-2">
                  <button
                    className="p-1 bg-blue-500 text-white rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out transform hover:scale-105"
                    onClick={() => copyToClipboard(shortUrl)}
                  >
                    Copy
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 flex flex-col items-center space-y-2">
        <button
          className="p-2 bg-red-500 text-white rounded-md shadow-sm hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-300 ease-in-out transform hover:scale-105"
          onClick={handleClearHistory}
        >
          Clear History
        </button>

        <div className="flex space-x-1">
          <button
            className={`px-3 py-1 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-200 transition duration-300 ease-in-out ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            &laquo; Prev
          </button>

          {Array.from({ length: totalPages }, (_, index) => index + 1).map(pageNumber => (
            <button
              key={pageNumber}
              className={`px-3 py-1 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-200 transition duration-300 ease-in-out ${currentPage === pageNumber ? 'bg-blue-500 text-white' : ''}`}
              onClick={() => handlePageChange(pageNumber)}
            >
              {pageNumber}
            </button>
          ))}

          <button
            className={`px-3 py-1 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-200 transition duration-300 ease-in-out ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next &raquo;
          </button>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default URLHistory;


// import React, { useState } from 'react';
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const URLHistory = ({ history, onClearHistory }) => {
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 5;

//   const formatDate = (dateString) => {
//     const date = new Date(dateString);
//     const formattedDate = date.toLocaleDateString();
//     const formattedTime = date.toLocaleTimeString();
//     return `${formattedDate} ${formattedTime}`;
//   };

//   const copyToClipboard = (text) => {
//     navigator.clipboard.writeText(text);
//     toast.success('URL copied to clipboard!');
//   };

//   const handleClearHistory = () => {
//     if (history.length > 0) {
//       onClearHistory();
//       toast.warn('URL history cleared!');
//     }
//   };

//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentItems = history.slice(indexOfFirstItem, indexOfLastItem);

//   const totalPages = Math.ceil(history.length / itemsPerPage);

//   const handlePageChange = (pageNumber) => {
//     if (pageNumber > 0 && pageNumber <= totalPages) {
//       setCurrentPage(pageNumber);
//     }
//   };

//   return (
//     <div className="p-4 bg-white rounded-md shadow-md transition duration-300 ease-in-out transform hover:scale-105">
//       <h2 className="text-xl font-semibold mb-4">URL History</h2>
//       <table className="w-full bg-white rounded-md shadow-sm">
//         <thead>
//           <tr className="bg-gray-200">
//             <th className="p-2 text-left">Original URL</th>
//             <th className="p-2 text-left">Shortened URL</th>
//             <th className="p-2 text-left">Created At</th>
//             <th className="p-2 text-left">Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {currentItems.map(({ originalUrl, shortUrl, createdAt }, index) => (
//             <tr key={index} className="border-t border-gray-200">
//               <td className="p-2">{originalUrl}</td>
//               <td className="p-2">{shortUrl}</td>
//               <td className="p-2">{formatDate(createdAt)}</td>
//               <td className="p-2">
//                 <button
//                   className="p-1 bg-blue-500 text-white rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out transform hover:scale-105"
//                   onClick={() => copyToClipboard(shortUrl)}
//                 >
//                   Copy
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       <div className="mt-4 flex flex-col items-center space-y-2">
//         <button
//           className="p-2 bg-red-500 text-white rounded-md shadow-sm hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-300 ease-in-out transform hover:scale-105"
//           onClick={handleClearHistory}
//         >
//           Clear History
//         </button>

//         <div className="flex space-x-1">
//           <button
//             className={`px-3 py-1 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-200 transition duration-300 ease-in-out ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
//             onClick={() => handlePageChange(currentPage - 1)}
//             disabled={currentPage === 1}
//           >
//             &laquo; Prev
//           </button>

//           {Array.from({ length: totalPages }, (_, index) => index + 1).map(pageNumber => (
//             <button
//               key={pageNumber}
//               className={`px-3 py-1 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-200 transition duration-300 ease-in-out ${currentPage === pageNumber ? 'bg-blue-500 text-white' : ''}`}
//               onClick={() => handlePageChange(pageNumber)}
//             >
//               {pageNumber}
//             </button>
//           ))}

//           <button
//             className={`px-3 py-1 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-200 transition duration-300 ease-in-out ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}
//             onClick={() => handlePageChange(currentPage + 1)}
//             disabled={currentPage === totalPages}
//           >
//             Next &raquo;
//           </button>
//         </div>
//       </div>

//       <ToastContainer />
//     </div>
//   );
// };

// export default URLHistory;


// import React, { useState } from 'react';
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const URLHistory = ({ history, onClearHistory }) => {
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 5;

//   const formatDate = (dateString) => {
//     const date = new Date(dateString);
//     const formattedDate = date.toLocaleDateString();
//     const formattedTime = date.toLocaleTimeString();
//     return `${formattedDate} ${formattedTime}`;
//   };

//   const copyToClipboard = (text) => {
//     navigator.clipboard.writeText(text);
//     toast.success('URL copied to clipboard!');
//   };

//   const handleClearHistory = () => {
//     if (history.length > 0) {
//       onClearHistory();
//       toast.warn('URL history cleared!');
//     }
//   };

//   // Calculate the indices of items to display based on the current page
//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentItems = history.slice(indexOfFirstItem, indexOfLastItem);

//   // Calculate total pages
//   const totalPages = Math.ceil(history.length / itemsPerPage);

//   const handlePageChange = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

//   return (
//     <div className="p-4 bg-white rounded-md shadow-md transition duration-300 ease-in-out transform hover:scale-105">
//       <h2 className="text-xl font-semibold mb-4">URL History</h2>
//       <table className="w-full bg-white rounded-md shadow-sm">
//         <thead>
//           <tr className="bg-gray-200">
//             <th className="p-2 text-left">Original URL</th>
//             <th className="p-2 text-left">Shortened URL</th>
//             <th className="p-2 text-left">Created At</th>
//             <th className="p-2 text-left">Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {currentItems.map(({ originalUrl, shortUrl, createdAt }, index) => (
//             <tr key={index} className="border-t border-gray-200">
//               <td className="p-2">{originalUrl}</td>
//               <td className="p-2">{shortUrl}</td>
//               <td className="p-2">{formatDate(createdAt)}</td>
//               <td className="p-2">
//                 <button
//                   className="p-1 bg-blue-500 text-white rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out transform hover:scale-105"
//                   onClick={() => copyToClipboard(shortUrl)}
//                 >
//                   Copy
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       <div className="mt-4 flex justify-between items-center">
//         <button
//           className="p-2 bg-red-500 text-white rounded-md shadow-sm hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-300 ease-in-out transform hover:scale-105"
//           onClick={handleClearHistory}
//         >
//           Clear History
//         </button>

//         <div className="flex space-x-2">
//           <button
//             className="p-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 transition duration-300 ease-in-out"
//             onClick={() => handlePageChange(currentPage - 1)}
//             disabled={currentPage === 1}
//           >
//             Prev
//           </button>
//           <span className="text-gray-700">
//             Page {currentPage} of {totalPages}
//           </span>
//           <button
//             className="p-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 transition duration-300 ease-in-out"
//             onClick={() => handlePageChange(currentPage + 1)}
//             disabled={currentPage === totalPages}
//           >
//             Next
//           </button>
//         </div>
//       </div>
//       <ToastContainer />
//     </div>
//   );
// };

// export default URLHistory;


// import React from 'react';
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const URLHistory = ({ history, onClearHistory }) => {
//   const formatDate = (dateString) => {
//     const date = new Date(dateString);
//     const formattedDate = date.toLocaleDateString();
//     const formattedTime = date.toLocaleTimeString();
//     return `${formattedDate} ${formattedTime}`;
//   };

//   const copyToClipboard = (text) => {
//     navigator.clipboard.writeText(text);
//     toast.success('URL copied to clipboard!');
//   };

//   const handleClearHistory = () => {
//     if (history.length > 0) {
//       onClearHistory();
//       toast.warn('URL history cleared!');
//     }
//   };

//   return (
//     <div className="p-4 bg-white rounded-md shadow-md transition duration-300 ease-in-out transform hover:scale-105">
//       <h2 className="text-xl font-semibold mb-4">URL History</h2>
//       <table className="w-full bg-white rounded-md shadow-sm">
//         <thead>
//           <tr className="bg-gray-200">
//             <th className="p-2 text-left">Original URL</th>
//             <th className="p-2 text-left">Shortened URL</th>
//             <th className="p-2 text-left">Created At</th>
//             <th className="p-2 text-left">Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {history.map(({ originalUrl, shortUrl, createdAt }, index) => (
//             <tr key={index} className="border-t border-gray-200">
//               <td className="p-2">{originalUrl}</td>
//               <td className="p-2">{shortUrl}</td>
//               <td className="p-2">{formatDate(createdAt)}</td>
//               <td className="p-2">
//                 <button
//                   className="p-1 bg-blue-500 text-white rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out transform hover:scale-105"
//                   onClick={() => copyToClipboard(shortUrl)}
//                 >
//                   Copy
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <button
//         className="mt-4 p-2 bg-red-500 text-white rounded-md shadow-sm hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-300 ease-in-out transform hover:scale-105"
//         onClick={handleClearHistory}
//       >
//         Clear History
//       </button>

//       <ToastContainer />
//     </div>
//   );
// };

// export default URLHistory;


// import React from 'react';
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import 'tailwindcss/tailwind.css';

// const URLHistory = ({ history, onClearHistory }) => {
//   const formatDate = (dateString) => {
//     const date = new Date(dateString);
//     const formattedDate = date.toLocaleDateString();
//     const formattedTime = date.toLocaleTimeString();
//     return `${formattedDate} ${formattedTime}`;
//   };

//   const copyToClipboard = (text) => {
//     navigator.clipboard.writeText(text);
//     toast.success('URL copied to clipboard!');
//   };

//   const handleClearHistory = () => {
//     if (history.length > 0) {
//       onClearHistory();
//       toast.warn('URL history cleared!');
//     }
//   };

//   return (
//     <div className="url-history p-4 bg-gray-100 rounded-md shadow-md">
//       <h2 className="text-xl font-semibold mb-4">URL History</h2>
//       <table className="w-full bg-white rounded-md shadow-sm">
//         <thead>
//           <tr className="bg-gray-200">
//             <th className="p-2 text-left">Original URL</th>
//             <th className="p-2 text-left">Shortened URL</th>
//             <th className="p-2 text-left">Created At</th>
//             <th className="p-2 text-left">Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {history.map(({ originalUrl, shortUrl, createdAt }, index) => (
//             <tr key={index} className="border-t border-gray-200">
//               <td className="p-2">{originalUrl}</td>
//               <td className="p-2">{shortUrl}</td>
//               <td className="p-2">{formatDate(createdAt)}</td>
//               <td className="p-2">
//                 <button
//                   className="p-1 bg-blue-500 text-white rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   onClick={() => copyToClipboard(shortUrl)}
//                 >
//                   Copy
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <button
//         className="mt-4 p-2 bg-red-500 text-white rounded-md shadow-sm hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
//         onClick={handleClearHistory}
//       >
//         Clear History
//       </button>

//       <ToastContainer />
//     </div>
//   );
// };

// export default URLHistory;


// import React from 'react';
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const URLHistory = ({ history, onClearHistory }) => {
//   const formatDate = (dateString) => {
//     const date = new Date(dateString);
//     const formattedDate = date.toLocaleDateString();
//     const formattedTime = date.toLocaleTimeString();
//     return `${formattedDate} ${formattedTime}`;
//   };

//   const copyToClipboard = (text) => {
//     navigator.clipboard.writeText(text);
//     toast.success('URL copied to clipboard!');
//   };

//   const handleClearHistory = () => {
//     if (history.length > 0) {
//       onClearHistory();
//       toast.warn('URL history cleared!');
//     }
//   };

//   return (
//     <div className="url-history">
//       <h2>URL History</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>Original URL</th>
//             <th>Shortened URL</th>
//             <th>Created At</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {history.map(({ originalUrl, shortUrl, createdAt }, index) => (
//             <tr key={index}>
//               <td>{originalUrl}</td>
//               <td>{shortUrl}</td>
//               <td>{formatDate(createdAt)}</td>
//               <td>
//                 <button onClick={() => copyToClipboard(shortUrl)}>Copy</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <button onClick={handleClearHistory}>Clear History</button>

//       <ToastContainer />
//     </div>
//   );
// };

// export default URLHistory;
