import PropTypes from 'prop-types';
import css from '../StatisticsData/StatisticsData.module.css';
import { Item } from '../StatisticsData/StatisticsItem';

export const StatisticsList = ({ items, title }) => {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}
      <ul className={css.list}>
        {items.map(({ id, label, percentage }) => (
          <Item key={id} label={label} percentage={percentage} />
        ))}
      </ul>
    </section>
  );
};
StatisticsList.protoTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
