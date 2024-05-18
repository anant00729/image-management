import styled from "styled-components";

export const TableData = styled.td`
  padding: 1rem;
  text-align: left;
  line-height: 1.5;
  color: black;
`;

export const TableRow = styled.tr`
  &:nth-of-type(2n) {
    background: #eff3f6;
  }
  
  &:hover {
    background: #e2e8f0;
  }
`;

