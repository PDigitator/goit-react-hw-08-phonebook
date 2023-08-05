import styled from 'styled-components';

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;

  padding: 8px 12px;
  border: 1px solid #e5eaf1;
  border-radius: 8px;
  background-color: #fff;
`;

export { List, ListItem };
