import styled, { css } from "styled-components";
import { MD } from "../../Utils/style";

export const Snackbar = styled.div`
  /* Hidden by default. Visible on click */
  min-width: 290px;
  /* Set a default minimum width */
  /* margin: 0 auto; */
  /* Divide value of min-width by 2 */
  background-color: transparent; /* Black background color */
  color: black; /* White text color */
  text-align: center; /* Centered text */
  border-radius: 1rem; /* Rounded borders */
  position: fixed; /* Sit on top of the screen */
  z-index: 1; /* Add a z-index if needed */
  left: 50%; /* Center the snackbar */
  transform: translateX(-50%);
  bottom: 30px; /* 30px from the bottom */
  ${(p) =>
    p.isVisible
      ? css`
          visibility: visible; /* Show the snackbar */
          -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;
          animation: fadein 0.5s, fadeout 0.5s 2.5s;
        `
      : css`
          visibility: hidden;
        `}
`;

export const SnackbarContainer = styled.div`
  width: 100%;
  background-color: #eff3f6;
  border: 1px solid #4e44e3;
  border-radius: 4px;
  box-shadow: rgb(206,207,209) 0px 2px 10px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px 8px;
`;

export const AlertLabel = styled.label`
  font-size: 20px;
  margin-left: 12px;
`;

export const AlertLogo = styled.img`
  width: 20px;
  height: 20px;
  margin-left: 12px;

  @media ${MD} {
    margin-left: unset;
  }
`;