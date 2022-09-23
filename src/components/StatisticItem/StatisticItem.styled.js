import styled from '@emotion/styled';

export const StatisticsItem = styled.li`
  display: flex;
  flex-direction: column;
  width: calc(100% / 5);
  border: 1px solid grey;
  box-shadow: 2px 8px 11px -2px rgba(0, 0, 0, 0.75);
  padding-top: 10px;
  padding-bottom: 10px;
  text-align: center;
`;

export const Label = styled.span`
  font-size: 12px;
  color: white;
`;

export const Percentage = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: white;
`;

// background-color: ${getRandomColor()};
// function getRandomColor() {
//   var letters = '0123456789ABCDEF';
//   var color = '#';
//   for (var i = 0; i < 6; i++) {
//     color += letters[Math.floor(Math.random() * 16)];
//   }
//   return color;
// }
