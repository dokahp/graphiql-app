import React from 'react';

function RuLangIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 512 512"
    >
      <mask id="a">
        <circle cx="256" cy="256" r="256" fill="#fff" />
      </mask>
      <g mask="url(#a)">
        <path fill="#0052b4" d="M512 170v172l-256 32L0 342V170l256-32z" />
        <path fill="#eee" d="M512 0v170H0V0Z" />
        <path fill="#d80027" d="M512 342v170H0V342Z" />
      </g>
    </svg>
  );
}

export default RuLangIcon;
