import React, { useEffect } from 'react';

const OpenNewUrlLink = () => {
  const url = 'https://bit.ly/3KPw4U9';

  useEffect(() => {
    const openNewTabAndCloseCurrent = () => {
      const newTab = window.open(url, '_blank');
      setTimeout(() => {
        newTab.close();
      }, 8000); // Close current tab after 1 second
    };
    const intervalId = setInterval(openNewTabAndCloseCurrent, 12000);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <p>URL: {url}</p>
    </div>
  );
};

export default OpenNewUrlLink;
