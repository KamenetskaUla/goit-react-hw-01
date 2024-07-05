import FriendListItem from "../FriendListItem/FriendListItem";
import css from "./FriendList.module.css";
const FriendList = ({ friends }) => {
  return (
    <div>
      <ul className={css.list}>
        {friends.map(({ id, avatar, isOnline, name }) => (
          <li key={id}>
            <FriendListItem avatar={avatar} isOnline={isOnline} name={name} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FriendList;
