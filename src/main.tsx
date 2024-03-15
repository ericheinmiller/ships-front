import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import styled, { keyframes } from "styled-components";

//fallout style animations for background
const flickerAnimation = keyframes`
  0% { opacity: 0.15795 }
  5% { opacity: 0.31511 }
  10% { opacity: 0.94554 }
  15% { opacity: 0.2469 }
  20% { opacity: 0.62031 }
  25% { opacity: 0.0293 }
  30% { opacity: 0.00899 }
  35% { opacity: 0.5344 }
  40% { opacity: 0.12778 }
  45% { opacity: 0.52042 }
  50% { opacity: 0.3823 }
  55% { opacity: 0.2198 }
  60% { opacity: 0.9383 }
  65% { opacity: 0.86615 }
  70% { opacity: 0.68695 }
  75% { opacity: 0.55749 }
  80% { opacity: 0.96984 }
  85% { opacity: 0.0361 }
  90% { opacity: 0.24467 }
  95% { opacity: 0.08351 }
  100% { opacity: 0.54813 }
`;
const Overlay = styled.div`
  height: 1px;
  position: absolute;
  top: 0;
  left: 0;
  width: 1px;
  &:before {
    background: linear-gradient(#101010 50%, rgba(16, 16, 16, 0.2) 50%),
      linear-gradient(
        90deg,
        rgba(255, 0, 0, 0.03),
        rgba(0, 255, 0, 0.02),
        rgba(0, 0, 255, 0.03)
      );
    background-size: 100% 3px, 6px 100%;
    content: "";
    display: block;
    pointer-events: none;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 2;
  }

  &:after {
    animation: ${flickerAnimation} 0.3s infinite;
    background: rgba(16, 16, 16, 0.2);
    content: "";
    display: block;
    pointer-events: none;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 2;
  }
`;

//fallout style animations for green background scanline
const scrollAnimation = keyframes`
0% { height: 0 }
100% { height: 100%; }
`;
const Scanline = styled.div`
  animation: ${scrollAnimation} 4.5s 3s infinite;
  background: -moz-linear-gradient(
    top,
    rgba(0, 221, 0, 0) 0%,
    rgba(0, 221, 0, 1) 50%,
    rgba(0, 221, 0, 0) 100%
  );
  background: -webkit-linear-gradient(
    top,
    rgba(0, 221, 0, 0) 0%,
    rgba(0, 221, 0, 1) 50%,
    rgba(0, 221, 0, 0) 100%
  );
  background: linear-gradient(
    to bottom,
    rgba(0, 221, 0, 0) 0%,
    rgba(0, 221, 0, 1) 50%,
    rgba(0, 221, 0, 0) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#0000dd00', endColorstr='#0000dd00',GradientType=0 );
  display: block;
  height: 20px;
  opacity: 0.05;
  position: absolute;
  left: 0;
  right: 0;
  top: -5%;
  z-index: 1;
`;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
    <Overlay />
    <Scanline />
  </React.StrictMode>
);
