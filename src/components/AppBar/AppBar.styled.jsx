import styled from 'styled-components';

const Header = styled.header`
  position: sticky;
  top: -1px;
  z-index: 1100;

  padding: 20px 0;
  background-color: rgb(241 243 244);
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  max-width: 1440px;
  padding-right: 16px;
  padding-left: 16px;
  margin-left: auto;
  margin-right: auto;
`;

export { Header, Container };
