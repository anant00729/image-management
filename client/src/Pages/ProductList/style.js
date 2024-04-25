import styled from "styled-components";

export const ProductContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  min-height: 100%;
  overflow-y: scroll;
`;

export const ProductNotFound = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
`;

export const ProductNotFoundImg = styled.img`
  width: 100px;
  height: 100px;
  margin-bottom: 16px;
`

export const TableWrapper = styled.div`
  width: unset;
  margin: unset;
  box-shadow: rgb(206,207,209) 0px 2px 2px 0px;
  

  @media only screen and (max-width: 650px) {
    width: min(900px, 100% - 3rem);
    margin: 0 auto;
  }
`;


export const TableHeader = styled.th`
  padding: 1rem;
  text-align: left;
  line-height: 1.5;
  color: white;
  background: #cc0733;
`;

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

export const ResponsiveTable = styled.table`
  width: 100%;
	border-collapse: collapse;
  border-radius: 1rem;
  
  @media only screen and (max-width: 650px) {
    ${TableHeader} {
      display: none;
    }

    ${TableData} {
      display: grid;
      grid-template-columns: 15ch auto;
    }

    ${TableData}::before {
      content: attr(data-cell) ": ";
      font-weight: 700;
      text-transform: capitalize;
    }
  }
`;