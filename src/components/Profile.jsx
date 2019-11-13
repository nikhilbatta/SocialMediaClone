import React from "react";

function Profile(props){
    var myStyledProfile = {
        backgroundColor: 'lightblue',
        float: 'left',
        textAlign: 'right',
        minWidth: '300px'       
    }
    var styledH4 = {
        fontSize: '20px',
        float: 'left',
        margin: '10px'
    }
    var styledH2 = {
        paddingRight: '40px'
    }
    var styledProfilePic = {
        maxHeight: '120px',
        width: 'auto',
        float: 'left'
    }
  
    return(
        <div style={myStyledProfile}>
      
            <img style={styledProfilePic} src="http://cqrecords.com/wp-content/uploads/st/stock-illustration-vector-businessman-profile-icon-man.jpg"></img>
            <img></img>
            <h2 style={styledH2}>Kellie A. Corrigan</h2>
            <div style={myStyledProfile}>
            
                <h4 style={styledH4}>Tweets</h4>
                <h4 style={styledH4}>Following</h4>
                <h4 style={styledH4}>Followers</h4>
            </div>
        </div>
    );
}
export default Profile;