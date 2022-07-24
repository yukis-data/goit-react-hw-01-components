import css from '../FriendsList/FriendsList.module.css'

export const Friend = ({ avatar, name, isOnline }) => {
    return <li className={css.item}>
        <span className={isOnline? css.online : css.offline}></span>
        <img className={css.avatar} src={avatar} alt={name} width="48" />
        <p className={css.name}>{name}</p>
</li>
}