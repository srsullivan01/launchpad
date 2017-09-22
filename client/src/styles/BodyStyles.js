import styled from 'styled-components';
import { Link } from "react-router-dom";

export const DailyStyles = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  color: #006DC0;
  width: 700px ;
  margin-left: auto ;
  margin-right: auto ;
`;
export const TaskStyles = styled.div`
  display: flex;
  border-radius: 3px solid #006DC0;
  align-items: left;
  flex-direction: column;
  flex-wrap: wrap;
  color: #006DC0;
`;
export const TaskContainer = styled.div`
  box-sizing: border-box;
  border: 2px solid #021e33;
  border-radius: 3%;
  padding: 10px;
  margin: 20px;
  background-color: rgba(255, 255, 255, 0.6);
`;
export const Button = styled.button`
  border-radius: 3px;
  font-weight: bold;
  padding: 0.25em 1em;
  height: 35px;
  margin: 0 1em;
  background: #2e5cb8;
  color: #f0f0f5;
  border: 2px solid #197bc6;
  box-shadow: 0 4px #999;
  &:hover{
    background-color: #193366;
  };
  &:active{
    box-shadow: 0 2px #666;
    background-color: #193366;
    transform: translateY(4px);
  }
`;
export const ManateeButton = styled.button`
  border-radius: 3px;
  padding: 0.25em 1em;
  height: 35px;
  margin: 0 1em;
  background:  #4F5A65;
  color:  #f0f0f5;
  border: none;
  box-shadow: 0 4px #999;
  &:hover{
    background-color:  #3d3d5c;
  };
  &:active{
    box-shadow: 0 2px #666;
    transform: translateY(4px);
    background-color:  #3d3d5c;
  }
`;

export const LandingPage = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  font-family: "Verdana", Verdana, sans-serif;
  color: #010f19;
`;
export const Header1 = styled.h1`
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
  color: #1C2A43;
`;
export const Header3 =styled.h3`
  font-family: 'Roboto', sans-serif;
  color: #053c66;
`;
export const Header4 = styled.h4`
  font-family: 'Roboto', sans-serif;
  color: #064b7f;
`;
export const AddTaskStyles = styled.div`
  margin: 20px;
`;

export const LinkStyles = styled(Link)`
  text-decoration: none;
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  color: #2E456D;
`;
