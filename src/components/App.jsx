import { UserProfile } from './UserProfile/UserProfile'
import { StatisticsList } from './StatisticsData/StatisticsList'
import { FriendsList } from './FriendsList/FriendsList'
import { TransactionHistory } from './TransactionHistory/TransactionHistory'
import user from '../data/user.json';
import data from '../data/data.json'
import friendsList from '../data/friends.json'
import transactions from '../data/transactions.json';

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
      <StatisticsList title="Upload stats" items={data} />
      <StatisticsList items={data} />
      <FriendsList friends={friendsList} />
      <TransactionHistory items={transactions} />
    </>
  );
};
