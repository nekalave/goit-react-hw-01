import css from "./FriendListItem.module.css";

export const FriendListItem = ({friendInfo}) => {
  const statusClass = friendInfo.isOnline ? css.online : css.offline;
  return (
    <li className={css.item}>
      <span className={`${css.status} ${statusClass}`}></span>
      <img className={css.avatar} src={friendInfo.avatar} alt="User avatar" width="48" />
      <p className={css.name}>{friendInfo.name}</p>
    </li>
  );
};
