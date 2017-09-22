import styled from 'styled-components';

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
  padding: 0.25em 1em;
  margin: 0 1em;
  background: #ceeaff;
  color: #2E456D;
  border: 2px solid #197bc6;
`;
export const ManateeButton = styled.button`
  border-radius: 3px;
  padding: 0.25em 1em;
  margin: 0 1em;
  background:  #4F5A65;
  color:  #1D0029;
  border: none;
  box-shadow: 0 9px #999;
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

export const LinkStyles = styled.a`
  text-decoration: none;
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  color: #2E456D;
`;
