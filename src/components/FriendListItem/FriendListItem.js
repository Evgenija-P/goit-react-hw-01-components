import PropTypes from 'prop-types';
import { IoIosDisc } from 'react-icons/io';
import {
  ListItem,
  FriendAvatar,
  FriendName,
  FriendStatus,
} from './FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <ListItem>
      <FriendStatus selected={isOnline}>
        <IoIosDisc size={24} />
      </FriendStatus>
      <FriendAvatar src={avatar} alt="User avatar" />
      <FriendName>{name}</FriendName>
    </ListItem>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
