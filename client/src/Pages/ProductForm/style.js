import styled from "styled-components";

export const ProductFormContainer = styled.div`
  width: 100%;
  max-width: 900px;
  margin: auto;
`;

export const ProductFormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  color: black;
  padding: 0 16px;
  box-sizing: border-box;
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