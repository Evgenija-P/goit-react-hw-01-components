import user from '../user.json';
import data from '../data.json';
import friends from '../friends.json';
import { Profile } from './Profile/Profile';
import { Statistic } from './Statistic/Statistic';
import { FriendList } from './FriendList/FriendList';

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistic stats={data} title="Upload stats" />
      <FriendList friends={friends} />
    </>
  );
};
