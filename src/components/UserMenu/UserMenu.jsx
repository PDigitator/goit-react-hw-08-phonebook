import { useDispatch, useSelector } from 'react-redux';

import { logOut } from 'redux/auth/operations';
import { selectUser } from 'redux/auth/selectors';
import {
  UserWrap,
  Paragraph,
  BtnOut,
} from 'components/UserMenu/UserMenu.styled';

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <UserWrap>
      <Paragraph>{user.name}</Paragraph>
      <BtnOut type="button" onClick={() => dispatch(logOut())}>
        Log Out
      </BtnOut>
    </UserWrap>
  );
};

export default UserMenu;
