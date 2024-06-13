import css from "./Statistics.module.css";

export const Statistics = ({title, stats}) => {
  return (
    <section className={css.statistics}>
      <div className={css.wrapper}>
      {title  && (
        <h2 className={css.title}>{title}</h2>
      )}
      <ul className={css.statList}>
      {stats.map(stat => (
          <li key={stat.id} className={css.item} style={{backgroundColor: getRandomHexColor()}}>
            <span className={css.label}>{stat.label}</span>
            <span className={css.percentage}>{stat.percentage}</span>
          </li>
      ))}
      </ul>
    </div>
    </section>
  );
};


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}
