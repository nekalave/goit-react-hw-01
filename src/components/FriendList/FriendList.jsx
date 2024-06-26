import { FriendListItem } from './FriendListItem/FriendListItem';
import css from "./FriendList.module.css";


export const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendList}>
      {friends.map(friend => (
        <FriendListItem key={friend.id} friendInfo={friend} />
      ))}
    </ul>
  );
};
