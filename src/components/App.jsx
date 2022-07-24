import { UserProfile } from '../components/UserProfile/UserProfile'
import { StatisticsList } from '../components/StatisticsData/StatisticsList'
import { FriendsList } from './FriendsList/FriendsList'
import user from './data/user.json'
import data from './data/data.json'
import friendsList from './data/friends.json'

export const App = () => {
  return (
    <>
      <UserProfile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <StatisticsList items={data} />
      <FriendsList friends={friendsList} />
    </>
  );
};
