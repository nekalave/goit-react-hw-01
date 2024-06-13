import css from "./Profile.module.css";

export const Profile = (props) => {
  return (
    <section className={css.profileSection}>
      <div className={css.profile}>
        <div className={css.description}>
          <img
            src={props.avatar}
            alt="User avatar"
            className={css.avatar}
          />
          <p className={css.name}>{props.username}</p>
          <p className={css.tag}>@{props.tag}</p>
          <p className={css.location}>{props.location}</p>
        </div>

        <ul className={css.statsList}>
          <li className={css.statsItem}>
            <span className={css.label}>Followers</span>
            <span className={css.quantity}>{props.stats.followers}</span>
          </li>
          <li className={css.statsItem}>
            <span className={css.label}>Views</span>
            <span className={css.quantity}>{props.stats.views}</span>
          </li>
          <li className={css.statsItem}>
            <span className={css.label}>Likes</span>
            <span className={css.quantity}>{props.stats.likes}</span>
          </li>
        </ul>
      </div>
    </section>
  );
};
