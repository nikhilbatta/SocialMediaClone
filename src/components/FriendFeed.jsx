import React from "React";
import Friend from "./Friend";

var FriendList = [
    {
        userName: "Thing 1"
    },
    {
        userName: "Thing 2"

    },
    {
        userName: "The Grinch"
    }
]
function FriendFeed() {
    var styledFeed = {
        marginTop: '4em',
        maxWidth: '140em',
        position: 'relative'       
    }
    return (
        
        <div style={styledFeed}>
            {FriendList.map((f, index) =>
            <Friend 
            userName={f.userName}
            key={index}/>
    )}
        </div>
    );
}
export default FriendFeed;