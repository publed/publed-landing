import React from 'react';

interface SVG {
  className?: string;
}

const WaveTop = ({ className }: SVG) => {
  return (
    <svg
      viewBox="0 0 4320 2364"
      preserveAspectRatio="none"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M0 117.359C594 -51.8853 1329 -24.8857 2158.5 117.359C2997 227.114 3459 254.114 4320 71.1145V2363.28H0V117.359Z"
        fill="#01284E"
      />
    </svg>
  );
};

export default WaveTop;
