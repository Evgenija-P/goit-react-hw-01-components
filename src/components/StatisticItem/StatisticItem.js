import PropTypes from 'prop-types';
import { StatisticsItem, Label, Percentage } from './StatisticItem.styled';

export const StatisticItem = ({ label, percentage }) => {
  return (
    <StatisticsItem style={{ backgroundColor: getRandomColor(percentage) }}>
      <Label>{label}</Label>
      <Percentage>{percentage}%</Percentage>
    </StatisticsItem>
  );
};

StatisticItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

function getRandomColor(percentage) {
  if (percentage > 30) {
    return '#5882FA';
  } else if (percentage > 10) {
    return '#F7819F';
  }
  return '#AC58FA';
}
