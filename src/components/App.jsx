import React from "react";
import Profile from "./Profile";
import Bio from "./Bio";
import UserFeed from "./UserFeed"
import FriendFeed from "./FriendFeed";

function App(){
  return (
    <div>
      <Profile/>
      <Bio/>
      <UserFeed/>
      <FriendFeed/>
    </div>
  );
}

export default App;