import React from "react";
import "./App.css";

import { Profile } from "./components/Profile/Profile";
import user from "./data/user.json";

import { Statistics } from "./components/Statistics/Statistics";
import statistics from "./data/statistics.json";

import { FriendList } from "./components/FriendList/FriendList";
import friends from "./data/friends.json";

import { Transactions } from "./components/TransactionHistory/TransactionHistory";
import transactions from "./data/transactions.json";

const { name, tag, location, avatar, stats } = user;

function App() {
  return (
    <div className="App">
      <Profile
        name={name}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats}
      />
      <Statistics title={"UPLOAD STATS"} stats={statistics} />
      <FriendList friends={friends} />
      <Transactions transactions={transactions} />
    </div>
  );
}

export default App;
