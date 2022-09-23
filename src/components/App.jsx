import user from '../user.json';
import datas from '../data.json';
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
      <StatisticList data={datas} />
      {/* <StatisticList
        lable={datas.label}
        id={datas.id}
        percentage={datas.percentage}
      /> */}
    </>
  );
};
