import PropTypes from 'prop-types'
import css from '../StatisticsData/StatisticsData.module.css'
import { Item } from '../StatisticsData/StatisticsItem'

export const StatisticsList = ({ items }) => {
    return <section className={css.statistics}>
      <h2 className={css.title}>Upload stats</h2>
      <ul className={css.statList}>
        {items.map(({ id, label, percentage }) => (<Item key={id}
          label={label}
          percentage={percentage}
        />))}
      </ul>
</section>
}
StatisticsList.protoTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }))
}