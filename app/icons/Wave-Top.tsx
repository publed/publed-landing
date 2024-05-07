import React from 'react';

interface SVG {
  className?: string;
}

const WaveTop = ({ className }: SVG) => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 1440 680"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ position: 'absolute', top: 0, left: 0 }}
    >
      <path
        d="M0 39.9896C198 -16.4253 443 -7.42544 719.5 39.9895C999 76.5746 1153 85.5746 1440 24.5746V788.629H0V39.9896Z"
        fill="#01284E"
      />
    </svg>
  );
};

export default WaveTop;
