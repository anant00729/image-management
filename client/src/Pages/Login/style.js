import styled from "styled-components";

export const ProductFormContainer = styled.div`
  width: 100%;
  max-width: 900px;
  margin: auto;
  box-shadow: rgb(206,207,209) 0px 2px 2px 0px;
  display: flex; 
  flex-direction: column;
  word-break: break-all;
  padding: 0 16px;
`;

export const ProductFormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  color: black;
  padding: 0 16px;
  box-sizing: border-box;
  padding: 20px;
`;

export const AddDeveloperWrapper = styled.div`
  display: flex;
  margin-top: 16px;
`;

export const DeveloperChip = styled.div`
  margin-top: 16px;
  background-color: #4e44e3;
  border-radius: 30px;
  display: flex;
  padding: 4px 6px;
  color: white;
  align-items: center;
  font-size: 20px;
  margin-left: 8px;
`;

export const DeveloperChipGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Cross = styled.img`
  width: 20px;
  height: 20px;
  margin-left: 8px;
  cursor: pointer;
`;

export const DevLabel = styled.label`
  margin-left: 8px;
  margin-top: -2px;
`;

export const PageTitle = styled.h2`
 text-align: center;
`;

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 10px 50px;
  gap:10px;
`

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
  margin-top: 10px;
  

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