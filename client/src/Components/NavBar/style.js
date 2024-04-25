import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Header = styled.div`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  padding: 18px;
  background-color: white;
  width: 100%;
  box-shadow: rgb(206,207,209) 0px 2px 10px 0px;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  z-index: 10;
`;

export const StyledLink = styled(Link)`
    color: white;
    text-decoration: none;
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;