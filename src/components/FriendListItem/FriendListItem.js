import s from "./FriendListItem.module.css";

export function FriendListItem({ friend }) {
  const { avatar, name, id, isOnline } = friend;
  return (
    <li className={s.item} key={id}>
      <span className={isOnline ? s.online : s.offline}></span>
      <img className={s.avatar} src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </li>
  );
}
