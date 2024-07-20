import React, { useState, useEffect } from 'react';
import axios from 'axios';
import InputForm from './InputForm';
import ShortenedUrl from './ShortenedUrl';
import URLHistory from './URLHistory';
import 'tailwindcss/tailwind.css';

function Shortener() {
    const [shortUrl, setShortUrl] = useState('');
    const [copied, setCopied] = useState(false);
    const [urlHistory, setUrlHistory] = useState([]);

    useEffect(() => {
        const storedHistory = localStorage.getItem('urlHistory');
        if (storedHistory) {
            setUrlHistory(JSON.parse(storedHistory));
        }
    }, []);

    const handleClearHistory = () => {
        setUrlHistory([]);
        localStorage.removeItem('urlHistory');
    };

    const handleSubmit = async (url) => {
        const accessToken = '49000345cd84bc0c93aba27fdd7bdb9762d0ce5c'; // Replace with your actual access token
        const apiUrl = 'https://api-ssl.bitly.com/v4/shorten';

        const formattedUrl = /^(https?|ftp):\/\//i.test(url) ? url : `http://${url}`;

        try {
            const response = await axios.post(
                apiUrl,
                { long_url: formattedUrl },
                {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                        'Content-Type': 'application/json',
                    },
                }
            );

            const shortenedUrl = response.data.link;
            setShortUrl(shortenedUrl);

            const historyItem = {
                originalUrl: url,
                shortUrl: shortenedUrl,
                createdAt: new Date().toISOString(),
            };

            const updatedHistory = [historyItem, ...urlHistory];
            setUrlHistory(updatedHistory);
            localStorage.setItem('urlHistory', JSON.stringify(updatedHistory));
        } catch (error) {
            console.error(error);
        }
    };

    const handleCopy = () => {
        setCopied(true);
        setTimeout(() => {
            setCopied(false);
        }, 3000);
    };

    return (
        <div className="shortener-container p-6 bg-gradient-to-b from-yellow-300 to-green-500 min-h-screen flex flex-col items-center">

            <h1 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-green-500 text-transparent bg-clip-text shadow-lg">
                URL Shortener
            </h1>
            <InputForm onSubmit={handleSubmit} />

            {shortUrl && (
                <div className="w-full max-w-md mt-6">
                    <ShortenedUrl url={shortUrl} onCopy={handleCopy} />
                </div>
            )}

            {copied && (
                <p className="mt-4 text-green-500 font-medium">URL copied to clipboard!</p>
            )}

            {urlHistory.length > 0 && (
                <div className="w-full max-w-4xl mt-6">
                    <URLHistory history={urlHistory} onClearHistory={handleClearHistory} />
                </div>
            )}
        </div>
    );
}

export default Shortener;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import InputForm from './InputForm';
// import ShortenedUrl from './ShortenedUrl';
// import URLHistory from './URLHistory';
// import 'tailwindcss/tailwind.css';

// function Shortener() {
//   const [shortUrl, setShortUrl] = useState('');
//   const [copied, setCopied] = useState(false);
//   const [urlHistory, setUrlHistory] = useState([]);

//   useEffect(() => {
//     const storedHistory = localStorage.getItem('urlHistory');
//     if (storedHistory) {
//       setUrlHistory(JSON.parse(storedHistory));
//     }
//   }, []);

//   const handleClearHistory = () => {
//     setUrlHistory([]);
//     localStorage.removeItem('urlHistory');
//   };

//   const handleSubmit = async (url) => {
//     const accessToken = '49000345cd84bc0c93aba27fdd7bdb9762d0ce5c'; // Replace with your actual access token
//     const apiUrl = 'https://api-ssl.bitly.com/v4/shorten';

//     const formattedUrl = /^(https?|ftp):\/\//i.test(url) ? url : `http://${url}`;

//     try {
//       const response = await axios.post(
//         apiUrl,
//         { long_url: formattedUrl },
//         {
//           headers: {
//             Authorization: `Bearer ${accessToken}`,
//             'Content-Type': 'application/json',
//           },
//         }
//       );

//       const shortenedUrl = response.data.link;
//       setShortUrl(shortenedUrl);

//       const historyItem = {
//         originalUrl: url,
//         shortUrl: shortenedUrl,
//         createdAt: new Date().toISOString(),
//       };

//       const updatedHistory = [historyItem, ...urlHistory];
//       setUrlHistory(updatedHistory);
//       localStorage.setItem('urlHistory', JSON.stringify(updatedHistory));
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleCopy = () => {
//     setCopied(true);
//     setTimeout(() => {
//       setCopied(false);
//     }, 3000);
//   };

//   return (
//     <div className="shortener-container p-6 bg-gray-50 min-h-screen flex flex-col items-center">
//       <h1 className="text-3xl font-bold mb-6">URL Shortener</h1>

//       <InputForm onSubmit={handleSubmit} />

//       {shortUrl && (
//         <div className="w-full max-w-md mt-6">
//           <ShortenedUrl url={shortUrl} onCopy={handleCopy} />
//         </div>
//       )}

//       {copied && (
//         <p className="mt-4 text-green-500 font-medium">URL copied to clipboard!</p>
//       )}

//       {urlHistory.length > 0 && (
//         <div className="w-full max-w-4xl mt-6">
//           <URLHistory history={urlHistory} onClearHistory={handleClearHistory} />
//         </div>
//       )}
//     </div>
//   );
// }

// export default Shortener;



// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import InputForm from './InputForm';
// import ShortenedUrl from './ShortenedUrl';
// import URLHistory from './URLHistory';

// function Shortener() {
//   const [shortUrl, setShortUrl] = useState('');
//   const [copied, setCopied] = useState(false);
//   const [urlHistory, setUrlHistory] = useState([]);

//   useEffect(() => {
//     const storedHistory = localStorage.getItem('urlHistory');
//     if (storedHistory) {
//       setUrlHistory(JSON.parse(storedHistory));
//     }
//   }, []);

//   const handleClearHistory = () => {
//     setUrlHistory([]);
//     localStorage.removeItem('urlHistory');
//   };

//   const handleSubmit = async (url) => {
//     // const accessToken = 'ff8fb38b04e62a8229fed86216b99b4e1726a70b'; // Replace with your actual access token bhai sahab
//     const accessToken = '49000345cd84bc0c93aba27fdd7bdb9762d0ce5c'; // Replace with your actual access token
//     const apiUrl = 'https://api-ssl.bitly.com/v4/shorten';

//     const formattedUrl = /^(https?|ftp):\/\//i.test(url) ? url : `http://${url}`;

//     try {
//       const response = await axios.post(
//         apiUrl,
//         { long_url: formattedUrl },
//         {
//           headers: {
//             Authorization: `Bearer ${accessToken}`,
//             'Content-Type': 'application/json',
//           },
//         }
//       );

//       const shortenedUrl = response.data.link;
//       setShortUrl(shortenedUrl);

//       const historyItem = {
//         originalUrl: url,
//         shortUrl: shortenedUrl,
//         createdAt: new Date().toISOString(),
//       };

//       const updatedHistory = [historyItem, ...urlHistory];
//       setUrlHistory(updatedHistory);
//       localStorage.setItem('urlHistory', JSON.stringify(updatedHistory));
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleCopy = () => {
//     setCopied(true);
//     setTimeout(() => {
//       setCopied(false);
//     }, 3000);
//   };

//   return (
//     <div className="shortener-container">
//       <h1>URL Shortener</h1>

//       <InputForm onSubmit={handleSubmit} />

//       {shortUrl && <ShortenedUrl url={shortUrl} onCopy={handleCopy} />}

//       {copied && <p className="copy-message">URL copied to clipboard!</p>}

//       {urlHistory.length > 0 && <URLHistory history={urlHistory} onClearHistory={handleClearHistory} />}
//     </div>
//   );
// };

// export default Shortener;
