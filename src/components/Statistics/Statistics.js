import PropTypes from "prop-types";
import s from "./Statistics.module.css";

export function Statistics({ title, stats }) {
  return (
    <div className="container">
      <h2 className={s.sectionTitle}>Task-2: statistics section</h2>
      <section className={s.statistics}>
        {title && <h3 className={s.title}>{title}</h3>}

        <ul className={s.statList}>
          {stats.map((stat) => {
            const { id, label, percentage } = stat;
            return (
              <li className={s.item} key={id}>
                <span className={s.label}>{label}</span>
                <span className={s.percentage}>{percentage}%</span>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
};
