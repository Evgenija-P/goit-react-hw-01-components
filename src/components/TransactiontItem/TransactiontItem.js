import PropTypes from 'prop-types';
import { TableItem } from './TransactiontItem.styled';

export const TransactiontItem = ({ type, amount, currency }) => {
  return (
    <TableItem>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </TableItem>
  );
};

TransactiontItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
