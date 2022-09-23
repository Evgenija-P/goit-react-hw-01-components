import { Statistic } from '../Statistics/Statistic';
import { StatisticTitle } from 'components/StatisticTitle/StatisticTitle';

export const StatisticList = ({ datas }) => {
  return (
    <section className="statistics">
      <StatisticTitle title="Upload stats" />

      <ul className="stat-list">
        {datas.map(({ id, label, percentage }) => (
          <Statistic key={id} label={label} percentage={percentage} />
        ))}
      </ul>
    </section>
  );
};
