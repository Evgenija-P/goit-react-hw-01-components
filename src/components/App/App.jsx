import user from '../../user.json';
import data from '../../data.json';
import friends from '../../friends.json';
import transactions from '../../transactions.json';
import { AppWrapper, ProfileWrapper } from './App.styled';
import { Profile } from '../Profile/Profile';
import { Statistic } from '../Statistic/Statistic';
import { FriendList } from '../FriendList/FriendList';
import { TransactionHistory } from '../TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <>
      <AppWrapper>
        <ProfileWrapper>
          <div>
            <Profile
              username={user.username}
              tag={user.tag}
              location={user.location}
              avatar={user.avatar}
              stats={user.stats}
            />
            <Statistic stats={data} title="Upload stats" />
          </div>
          <div>
            <FriendList friends={friends} />
          </div>
        </ProfileWrapper>
      </AppWrapper>
      <TransactionHistory items={transactions} />;
    </>
  );
};
