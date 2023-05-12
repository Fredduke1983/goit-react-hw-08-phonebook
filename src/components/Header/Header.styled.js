import styled from 'styled-components';

const NavStyle = styled.nav`
  display: flex;
  align-items: center;
  width: 100%;
  height: 60px;
  box-shadow: 1px 1px 5px white;
`;

const ListStyle = styled.ul`
  display: flex;

  list-style: none;
  gap: 20px;

  color: grey;
  text-shadow: 2px 2px 7px #000;

  a:hover {
    color: white;
    text-shadow: 2px 2px 7px #fff;
  }
  .active {
    color: white;
  }
`;

export { NavStyle, ListStyle };
