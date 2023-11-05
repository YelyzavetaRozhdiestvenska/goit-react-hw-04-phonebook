import styled from 'styled-components';
import { Form } from 'formik';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 20px;
  width: 300px;
  padding: 10px;
  background-color: #fffdd0;
  border: 2px solid #808080;
`;

export const StyledLabel = styled.label`
  padding: 3px;
`;

export const StyledButton = styled.button`
border: none;
border-radius: 10px;
text-decoration: none;
color: white;
background: #0B63F6;
box-shadow: 0 5px 0 #003CC5;
:hover {
    background: #003CC5;
    box-shadow: none;
    position: relative;
    top: 5px;
`;
