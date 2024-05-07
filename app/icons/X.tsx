import { SVG } from '../types/SVG';

const X = (props: SVG) => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={props.className}
  >
    <g clipPath="url(#clip0_171_2321)">
      <path
        d="M22.901 5.3335H26.581L18.541 14.5235L28 27.0265H20.594L14.794 19.4425L8.156 27.0265H4.474L13.074 17.1965L4 5.3345H11.594L16.837 12.2665L22.901 5.3335ZM21.61 24.8245H23.649L10.486 7.4205H8.298L21.61 24.8245Z"
        fill="#4D6983"
      />
    </g>
    <defs>
      <clipPath id="clip0_171_2321">
        <rect width="32" height="32" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default X;
