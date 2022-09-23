import PropTypes from 'prop-types';

import { StatisticItem } from 'components/StatisticItem/StatisticItem';
import { StatisticTitle } from 'components/StatisticTitle/StatisticTitle';
import { StatisticWrapper, StatisticList } from './Statistic.styled';

export const Statistic = ({ stats, title }) => {
  return (
    <StatisticWrapper>
      {title ? <StatisticTitle title={title} /> : null}

      <StatisticList>
        {stats.map(({ id, label, percentage }) => (
          <StatisticItem key={id} label={label} percentage={percentage} />
        ))}
      </StatisticList>
    </StatisticWrapper>
  );
};

Statistic.propTypes = {
  stats: PropTypes.array.isRequired,
};
