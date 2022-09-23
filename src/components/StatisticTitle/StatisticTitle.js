import { StatisticText } from './StatisticTitle.styled';
import PropTypes from 'prop-types';

export const StatisticTitle = ({ title }) => {
  return <StatisticText>{title}</StatisticText>;
};

StatisticTitle.propTypes = {
  items: PropTypes.string,
};
