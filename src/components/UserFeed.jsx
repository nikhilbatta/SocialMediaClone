import React from 'react';
import User from './User';

var userPost = [
    {
        userName: "Nikhil",
        location: "Los Angeles",
        userPost: "I love basketball"
    },
    {
        userName: "Mike",
        location: "Los Seattle",
        userPost: "I love baseball"
    },
    {
        userName: "Oly",
        location: "Los Oly",
        userPost: "I love football"
    }
]
function UserFeed(){
    var styledFeed = {
        marginTop: '4em',
        maxWidth: '70em',
        position: 'relative'
    }
    return (
        
        <div style={styledFeed}>
            <hr/>
            {userPost.map((post, index) =>
            <User 
            userName={post.userName}
            location={post.location}
            userPost={post.userPost}
            key={index}/>
    )}
        </div>
    );
}
export default UserFeed;