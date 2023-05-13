import styled from 'styled-components';

const NavStyle = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  align-items: center;
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
const ListItemStyle = styled.li`
  font-size: 20px;
`;

const WellcomeTitle = styled.div`
  display: flex;
  gap: 20px;
  p {
    text-shadow: 2px 2px 4px #fff;
    color: #fff;
  }
`;

export { NavStyle, ListStyle, WellcomeTitle, ListItemStyle };
