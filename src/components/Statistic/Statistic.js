import PropTypes from 'prop-types';

import { StatisticItem } from 'components/StatisticItem/StatisticItem';
import { StatisticTitle } from 'components/StatisticTitle/StatisticTitle';

export const Statistic = ({ stats, title }) => {
  return (
    <section className="statistics">
      {title ? <StatisticTitle title={title} /> : null}

      <ul className="stat-list">
        {stats.map(({ id, label, percentage }) => (
          <StatisticItem key={id} label={label} percentage={percentage} />
        ))}
      </ul>
    </section>
  );
};

Statistic.propTypes = {
  stats: PropTypes.array.isRequired,
};
