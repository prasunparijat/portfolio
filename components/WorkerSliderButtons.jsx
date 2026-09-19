'use client';
import { useSwiper } from 'swiper/react';
import { PiCaretLeftBold, PiCaretRightBold } from 'react-icons/pi';

const WorkerSliderButtons = ({ containerStyles, iconStyles, btnStyles }) => {
  const swiper = useSwiper();

  return (
    <div className={containerStyles}>
      <button
        className={btnStyles}
        onClick={() => swiper.slidePrev()}
      >
        <PiCaretLeftBold className={`pointer-events-none ${iconStyles}`}></PiCaretLeftBold>
      </button>
      <button
        className={btnStyles}
        onClick={() => swiper.slideNext()}
      >
        <PiCaretRightBold className={`pointer-events-none ${iconStyles}`}></PiCaretRightBold>
      </button>
    </div>
  );
};

export default WorkerSliderButtons;
