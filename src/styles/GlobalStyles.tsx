// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {
    --light-background: rgba(123, 148, 168, 0.089);
    --dark-background:rgba(110, 124, 201, 0.486);
    --light-text:  #ffffff;
    --dark-text:  rgb(12, 33, 151);
  }

  body {
    box-sizing: border-box;
    font-family: 'Quicksand', sans-serif;
    font-weight: 700;
    background-color: ${(props) => props.theme.backgroundColor};
    color: ${(props) => props.theme.textColor};
    overflow-x: hidden;
  }

  .nav-link.active {
    background-color: #ffffff;
    border-radius: 10%;
    width: fit-content;
    height: fit-content;
  }

.btn {
  width: fit-content;
  height: fit-content;
  border-radius: 10%;
  background-color: rgba(23, 99, 165, 0.596);
  color: white;
  font-weight: bolder;
  cursor: pointer;
  
}

.icon-btn {
  width: 37px;
  height: 37px;
  background-color: "white";
  background-size: "cover";
  cursor: pointer;
}

.modal-content, .sidebar, .sidebar-title, .sidebar-cards,.card{
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.textColor};
}


`;
