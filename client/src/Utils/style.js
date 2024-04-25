import styled from "styled-components";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

/* Extra small devices (phones, 600px and down) */
export const XS = "(max-width: 600px)";

/* Small devices (portrait tablets and large phones, 600px and up) */
export const SM = "(min-width: 600px)";

/* Medium devices (landscape tablets, 768px and up) */
export const MD = "(min-width: 768px)";

/* Large devices (laptops/desktops, 992px and up) */
export const LG = "(min-width: 992px)";

/* Extra large devices (large laptops and desktops, 1200px and up) */
export const XL = "(min-width: 1200px)";

export const BodyContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  margin-bottom: 100px;
  
  @media ${SM} {
    width: 600px;
    margin-top: 100px;
    margin-bottom: 100px;
  }

  @media ${MD} {
    width: 668px;
    margin: auto;
    margin-top: 100px;
    margin-bottom: 100px;
  }

  @media ${LG} {
    width: 1000px;
    margin: auto;
    margin-top: 100px;
    margin-bottom: 100px;
  }

  @media ${XL} {
    width: 1100px;
    margin: auto;
    margin-top: 100px;
    margin-bottom: 100px;
  }
`;


export const AppInput = styled.input`
  padding: 10px 16px;
  background-color: #eff3f6;
  border: 0 solid transparent;
  border-radius: 4px;
  font-size: 20px;
  outline-color: transparent;
  color: black;
  margin-bottom: 16px;
  flex: ${(props) => props.isForDeveloper ? 2 : 0};
  flex: ${(props) => props.isFromForm && props.isError ? '3px solid #f64f54' : '0 solid transparent'};
  &:focus {
    outline-width: 0;
  }
`;

export const AppTextArea = styled.textarea`
  padding: 10px 16px;
  background-color: #eff3f6;
  border: 0 solid transparent;
  border-radius: 4px;
  font-size: 20px;
  outline-color: transparent;
  color: rgb(204,7,51);
  font-family: "Arial", sans-serif;
  margin-top: ${(props) => props.isForDeveloper ? 0 : '14px'};
  flex: ${(props) => props.isForDeveloper ? 2 : 0};
  flex: ${(props) => props.isFromForm && props.isError ? '3px solid #f64f54' : '0 solid transparent'};
  &:focus {
    outline-width: 0;
  }
`;

export const AppButton = styled.button`
  padding: 10px 16px;
  background: #cc0733 ;
  border: 0 solid transparent;
  border-radius: 4px;
  font-size: ${(props) => props.size ? props.size : '20px'};
  outline-color: transparent;
  color: white;
  cursor: pointer;
  margin-top: ${(props) => props.isFromForm ? '24px' : 0};
  &:focus {
    outline-width: 0;
  }
  ${(props) => props.disabled && `
    opacity: 0.5;
    cursor: not-allowed;
  `}
`;

export const AppFormLabel = styled.p`
  margin-top: 16px;
  font-size: 20px;
  margin-left: 12px;
  color: black;
`;

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  margin: auto;
  
`;

export const SearchBar = styled.input`
  width: 400px;
  background-color: #eff3f6;
  padding: 10px 16px;
  margin-right: -4px;
  border: 0 solid transparent;
  border-radius: 4px 0 0 4px;
  font-size: 20px;
  outline-color: transparent;
  color: rgb(204,7,51);
  &:focus {
    outline-width: 0;
  }
  @media ${SM} {
    width: 500px;
  }
`;

export const SearchButton = styled.img`
  padding: 8px;
  width: 40px;
  height: 40px;
  object-fit: cover;
  background: #cc0733 ;
  border: 0 solid transparent;
  border-radius: 0 4px 4px 0;
  outline-color: transparent;
  color: white;
  cursor: pointer;
  &:focus {
    outline-width: 0;
  }
`;

export const PageLabel = styled.label`
  font-size: 24px;
  text-align: center;
  margin: 24px auto 16px auto;
`;

export const AppSelect = styled.select`
  padding: 10px 16px;
  background-color: #eff3f6;
  border: 0 solid transparent;
  border-radius: 4px;
  font-size: 20px;
  outline-color: transparent;
  color: rgb(204,7,51);
  margin-top: ${(props) => props.isForSearch ? 0 : '14px'};
  width: ${(props) => props.isForSearch ? '180px' : 'unset'};
  
  &:focus {
    outline-width: 0;
  }
  -moz-appearance:none; /* Firefox */
  -webkit-appearance:none; /* Safari and Chrome */
  appearance:none;
  background-image: url("data:image/svg+xml;utf8,<svg fill='black' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>");
  background-repeat: no-repeat;
  background-position-x: 99%;
  background-position-y: 10px;
`;

export const CustomeDatePicker = styled(DatePicker)`
  padding: 10px 16px;
  background-color: #eff3f6;
  border: 0 solid transparent;
  border-radius: 4px;
  font-size: 20px;
  outline-color: transparent;
  color: rgb(204,7,51);
  margin-top: ${(props) => props.isForDeveloper ? 0 : '14px'};
  flex: ${(props) => props.isForDeveloper ? 2 : 0};
  width: 100%;
  &:focus {
    outline-width: 0;
  }
`;

export const ErrorLabel = styled.label`
  color: #f64f54;
`;

export const ErrorBox = styled.span`
  margin-top: 10px;
`;
