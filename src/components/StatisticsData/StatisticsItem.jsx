import getRandomColor from '../getRandomColor'
import css from '../StatisticsData/StatisticsData.module.css';

export const Item = ({ label, percentage }) => {
  return (
    <li className={css.item} style={{ backgroundColor: getRandomColor() }}>
      <span className={css.label}>{label}</span>
      <span className={css.percentage}>{percentage}%</span>
    </li>
  );
};
