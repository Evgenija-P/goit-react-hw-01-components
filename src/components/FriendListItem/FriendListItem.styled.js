import styled from '@emotion/styled';

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  height: 50px;
  width: 150px;
  border: 1px solid #d8d8d8;
  border-radius: 4px;
  box-shadow: 2px 8px 11px -2px rgba(0, 0, 0, 0.75);
`;

export const FriendAvatar = styled.img`
  width: 48px;
  height: 48px;
  margin-left: 5px;
`;

export const FriendName = styled.p`
  font-size: 18px;
  font-weight: 700;
  margin-left: 5px;
`;

export const FriendStatus = styled.span`
  color: ${p => (p.selected ? 'green' : 'red')};
`;
