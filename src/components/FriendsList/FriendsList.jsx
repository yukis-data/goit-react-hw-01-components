import PropTypes from 'prop-types';
import css from '../FriendsList/FriendsList.module.css';
import { Friend } from '../FriendsList/Friend';

export const FriendsList = ({ friends }) => {
  return (
    <ul className={css.friendList}>
      {friends.map(({ avatar, name, id, isOnline }) => (
        <Friend key={id} avatar={avatar} name={name} isOnline={isOnline} />
      ))}
    </ul>
  );
};
FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};
