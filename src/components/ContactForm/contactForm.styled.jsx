import styled from 'styled-components';

const FormContact = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;
const LabelContact = styled.label``;
const InputContact = styled.input`
  margin-right: 10px;
  border-radius: 5px;
  border-color: aliceblue;
  box-shadow: 0px 2px 2px 2px grey;
`;
const FormBtn = styled.button`
  border-radius: 5px;
  background-color: black;
  color: white;
  box-shadow: 0px 2px 2px 2px white;

  transition: background-color 1000ms cubic-bezier(0.165, 0.84, 0.44, 1),
    color 1000ms cubic-bezier(0.165, 0.84, 0.44, 1),
    box-shadow 1000ms cubic-bezier(0.165, 0.84, 0.44, 1);
  &:hover {
    cursor: pointer;
    background-color: aliceblue;
    color: black;
    box-shadow: 0px 2px 4px 4px white;
  }
`;

export { FormContact, LabelContact, InputContact, FormBtn };
