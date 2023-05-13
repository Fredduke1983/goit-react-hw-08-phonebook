import styled from 'styled-components';

const HomeStyle = styled.div`
  display: grid;
  height: 600px;
  color: #fff;
  text-shadow: 2px 2px 7px grey;
  text-align: center;
`;

const HomeStyleTitle = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 50px;
`;

const Description = styled.p`
  font-size: 36px;
  a:hover {
    color: white;
    text-shadow: 2px 2px 7px #fff;
  }
`;
export { HomeStyleTitle, HomeStyle, Description };
