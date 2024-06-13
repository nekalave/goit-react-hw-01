import { Routes, Route } from "react-router-dom";
import user from 'data/user.json';
import data from 'data/data.json';
import friends from 'data/friends.json';
import transactions from 'data/transactions.json';
import { Profile } from '../Profile/Profile';
import { TransactionHistory } from '../TransactionHistory/TransactionHistory';
import { FriendList } from '../FriendList/FriendList';
import { Statistics } from '../Statistics/Statistics';
import { Fragment } from 'react';
import { Header } from '../Header/Header';

export const App = () => {
  return (
    <Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />}/>
        <Route path="/statistic1" element={<Statistics title="Upload stats" stats={data} />}/>
        <Route path="/statistic2" element={<Statistics stats={data} />}/>
        <Route path="/friendlist" element={<FriendList friends={friends} />}/>
        <Route path="/transactionhistory" element={<TransactionHistory items={transactions} />}/>
      </Routes>
    </Fragment>
  );
};
