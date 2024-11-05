import React, { useEffect } from 'react';

const OpenNewTabInterval = () => {
  const url = 'http://localhost:3000';
  // const url = 'http://www.phimme.online';

  useEffect(() => {
    const openNewTabAndCloseCurrent = () => {
      const newTab = window.open(url, '_blank');
      setTimeout(() => {
        window.close();
      }, 3000); // Close current tab after 1 second
    };
    // const clickMeButton = document.getElementById('clickMeButton');
    // clickMeButton.addEventListener('click', function () {
    //   alert(1)
    // });
    // setTimeout(() => {

    //   function simulateClick() {

    //     // Create a synthetic click MouseEvent
    //     let evt = new MouseEvent("click", {
    //       bubbles: true,
    //       cancelable: true,
    //       view: window,
    //     });

    //     // Send the event to the checkbox element
    //     clickMeButton.dispatchEvent(evt);
    //   }
    //   document.getElementById("clickMeButton").addEventListener("click", simulateClick);

    //   // // Tạo một sự kiện click
    //   // const clickEvent = new MouseEvent('click', {
    //   //   view: window,
    //   //   bubbles: true,
    //   //   cancelable: true,
    //   //   // Đặt isTrusted thành true để làm cho trình duyệt hiểu rằng đây là sự kiện từ người dùng
    //   //   isTrusted: true
    //   // });

    //   // // Phát ra sự kiện click cho button
    //   // clickMeButton.dispatchEvent(clickEvent);
    // }, 9000);

    const intervalId = setTimeout(openNewTabAndCloseCurrent, 13000); // Open new tab every 5 seconds

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <p>URL: {url}</p>
    </div>
  );
};

export default OpenNewTabInterval;
