import { Statistic } from '../Statistics/Statistic';

export const StatisticList = ({ datas }) => {
  return (
    <ul>
      {datas.map(({ id, label, percentage }) => (
        <Statistic key={id} label={label} percentage={percentage} />
      ))}
    </ul>
  );
};
