import styled from 'styled-components';
import { Link } from "react-router-dom";

export const StyledInput = styled.input`
  background-color: #FEF9F0;
  height: 30px;
`;

export const StyledLabel = styled.label`

  float: left;
  text-align: right;
  margin-right: 15px;
  padding: 0 0 2% 0;
  width: 100px;
  font-weight: bold;
  color: #1C2A43;
  font-family: 'Montserrat', sans-serif;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  border: 2px solid #021e33;
  border-radius: 3%;
  padding: 10px;
  margin: 20px;
  background-color: rgba(255, 255, 255, 0.6);
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: left;
  color: #006DC0;
  width: 700px ;
  margin-left: auto ;
  margin-right: auto ;
`;

export const StyledTextArea = styled.textarea`
  background-color: #FEF9F0;


`;
