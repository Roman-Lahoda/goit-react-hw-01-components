import PropTypes from "prop-types";
import { FriendListItem } from "../FriendListItem/FriendListItem";
import s from "./FriendList.module.css";

export function FriendList({ friends }) {
  return (
    <div className="container">
      <h2 className={s.title}>Task-3: friends list</h2>
      <section className={s.friends}>
        <ul className={s.friendList}>
          {friends.map((friend) => {
            return <FriendListItem friend={friend} key={friend.id} />;
          })}
        </ul>
      </section>
    </div>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool,
      id: PropTypes.number.isRequired,
    })
  ),
};
