import styled from 'styled-components';

const FormLogin = styled.form`
  display: grid;
  align-items: center;
  justify-content: center;
  box-shadow: 1px 1px 7px white;
  border-radius: 15px;
  width: 400px;
  background-color: #ffffff09;
  margin: 20px auto;
  padding: 20px;
`;

const FormLabel = styled.label`
  margin-bottom: 20px;
  p {
    margin-bottom: 4px;
    color: #fff;
    text-shadow: 2px 2px 7px #fff;
  }
  input {
    border: 1px solid grey;
    border-radius: 5px;
    background-color: transparent;
    color: #fff;
    padding: 5px;
  }
`;

const FormBtn = styled.button`
  display: block;
  cursor: pointer;

  margin: 0 auto;
  width: 50%;
  border-radius: 5px;

  :hover {
    background-color: #fff;
    box-shadow: 1px 1px 7px white;
  }
`;

export { FormLogin, FormLabel, FormBtn };
