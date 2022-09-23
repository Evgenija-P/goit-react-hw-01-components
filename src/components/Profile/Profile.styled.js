import styled from '@emotion/styled';

export const ProfileWrapper = styled.div`
  width: 250px;
  padding-top: 40px;
  border: 1px solid #d8d8d8;
`;

export const UserWrapper = styled.div`
  padding-bottom: 20px;
`;

export const UserAvatar = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin: 0 auto 30px;
`;

export const UserTitle = styled.p`
  text-align: center;
  font-size: 18px;
  font-weight: 700;
`;

export const UserText = styled.p`
  text-align: center;
  font-size: 18px;
`;

export const UserStats = styled.ul`
  display: flex;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  width: calc(100% / 3);
  border: 1px solid grey;
  padding-top: 10px;
  padding-bottom: 10px;
  text-align: center;
  background-color: #f2f2f2;
`;

export const StatsText = styled.span`
  font-size: 16px;
`;

export const StatsQuantity = styled.span`
  font-size: 16px;
  font-weight: 700;
`;
