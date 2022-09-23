import user from '../user.json';
import data from '../data.json';
import { Profile } from './Profile/Profile';
import { StatisticList } from './StatisticList/StatisticList';

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
      <StatisticList datas={data} />
    </>
  );
};
