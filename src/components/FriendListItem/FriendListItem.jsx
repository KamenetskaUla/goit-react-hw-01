import css from "./FriendListItem.module.css";
import clsx from "clsx";
const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={css.item}>
      <img src={avatar} alt={name} width="48" />
      <p>{name}</p>
      <p className={clsx({ [css.onLine]: isOnline, [css.offLine]: !isOnline })}>
        {isOnline ? "online" : "offline"}
      </p>
    </div>
  );
};

export default FriendListItem;
