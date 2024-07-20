
import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const InputForm = ({ onSubmit }) => {
  const [url, setUrl] = useState('');

  const handleChange = (e) => {
    setUrl(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!url) {
      toast.error('Please enter a URL');
      return;
    }

    const urlRegex = /^(ftp|https?):\/\/[^ "]+$/;
    const isUrlValid = urlRegex.test(url);

    if (!isUrlValid) {
      toast.error('Invalid URL format');
      return;
    }

    const formattedUrl = /^(https?|ftp):\/\//i.test(url) ? url : `http://${url}`;
    onSubmit(formattedUrl);
    setUrl('');
  };

  return (
    <>
      <form className="flex flex-col items-center space-y-4 p-4 md:flex-row md:space-y-0 md:space-x-4" onSubmit={handleSubmit}>
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 md:flex-1 transition duration-300 ease-in-out transform hover:scale-105"
          value={url}
          onChange={handleChange}
          placeholder="Enter URL"
        />
        <button
          type="submit"
          className="mt-2 w-full p-2 bg-blue-500 text-white rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 md:mt-0 md:w-auto transition duration-300 ease-in-out transform hover:scale-105"
        >
          Shorten
        </button>
      </form>
      <ToastContainer />
    </>
  );
};

export default InputForm;


// import React, { useState } from 'react';
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const InputForm = ({ onSubmit }) => {
//   const [url, setUrl] = useState('');

//   const handleChange = (e) => {
//     setUrl(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!url) {
//       toast.error('Please enter a URL');
//       return;
//     }

//     const urlRegex = /^(ftp|https?):\/\/[^ "]+$/;
//     const isUrlValid = urlRegex.test(url);

//     if (!isUrlValid) {
//       toast.error('Invalid URL format');
//       return;
//     }

//     const formattedUrl = /^(https?|ftp):\/\//i.test(url) ? url : `http://${url}`;
//     onSubmit(formattedUrl);
//     setUrl('');
//   };

//   return (
//     <>
//       <form className="flex flex-col items-center space-y-4 p-4 md:flex-row md:space-y-0 md:space-x-4" onSubmit={handleSubmit}>
//         <input
//           type="text"
//           className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 md:flex-1"
//           value={url}
//           onChange={handleChange}
//           placeholder="Enter URL"
//         />
//         <button
//           type="submit"
//           className="mt-2 w-full p-2 bg-blue-500 text-white rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 md:mt-0 md:w-auto"
//         >
//           Shorten
//         </button>
//       </form>
//       <ToastContainer />
//     </>
//   );
// };

// export default InputForm;




// import React, { useState } from 'react';
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const InputForm = ({ onSubmit }) => {
//   const [url, setUrl] = useState('');

//   const handleChange = (e) => {
//     setUrl(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!url) {
//       toast.error('Please enter a URL');
//       return;
//     }

//     const urlRegex = /^(ftp|https?):\/\/[^ "]+$/;
//     const isUrlValid = urlRegex.test(url);

//     if (!isUrlValid) {
//       toast.error('Invalid URL format');
//       return;
//     }

//     const formattedUrl = /^(https?|ftp):\/\//i.test(url) ? url : `http://${url}`;
//     onSubmit(formattedUrl);
//     setUrl('');
//   };

//   return (
//     <>
//       <form className="input-form" onSubmit={handleSubmit}>
//         <input
//           type="text"
//           className="url-input"
//           value={url}
//           onChange={handleChange}
//           placeholder="Enter URL"
//         />
//         <button type="submit" className="submit-button">
//           Shorten
//         </button>
//       </form>
//       <ToastContainer />
//     </>
//   );
// };

// export default InputForm;
