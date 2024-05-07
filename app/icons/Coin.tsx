import { SVG } from '../types/SVG';

const Coin = (props: SVG) => {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
    >
      <g id="ph:coin">
        <path
          id="Vector"
          d="M29.1909 8.9775C26.2758 7.52063 22.4058 6.75 18 6.75C13.5942 6.75 9.72422 7.52063 6.80906 8.9775C3.89391 10.4344 2.25 12.4847 2.25 14.625V21.375C2.25 23.5153 3.91219 25.5727 6.80906 27.0225C9.70594 28.4723 13.5942 29.25 18 29.25C22.4058 29.25 26.2758 28.4794 29.1909 27.0225C32.1061 25.5656 33.75 23.5153 33.75 21.375V14.625C33.75 12.4847 32.0878 10.4273 29.1909 8.9775ZM18 9C26.8088 9 31.5 12.2667 31.5 14.625C31.5 16.9833 26.8088 20.25 18 20.25C9.19125 20.25 4.5 16.9833 4.5 14.625C4.5 12.2667 9.19125 9 18 9ZM16.875 22.4803V26.9803C14.2031 26.8931 11.9531 26.4994 10.125 25.927V21.5227C12.3288 22.1098 14.5949 22.4313 16.875 22.4803ZM19.125 22.4803C21.4051 22.4313 23.6712 22.1098 25.875 21.5227V25.9256C24.0469 26.498 21.7969 26.8917 19.125 26.9789V22.4803ZM4.5 21.375V18.7777C5.20798 19.3653 5.98307 19.8671 6.80906 20.2725C7.15078 20.4427 7.51219 20.603 7.875 20.7548V25.0312C5.64891 23.9287 4.5 22.5408 4.5 21.375ZM28.125 25.0312V20.7548C28.492 20.603 28.8492 20.4427 29.1909 20.2725C30.0169 19.8671 30.792 19.3653 31.5 18.7777V21.375C31.5 22.5408 30.3511 23.9287 28.125 25.0312Z"
          fill="#4DB6D0"
        />
      </g>
    </svg>
  );
};

export default Coin;