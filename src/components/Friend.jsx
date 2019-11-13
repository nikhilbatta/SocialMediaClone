import React from "react";
import PropTypes from "prop-types";

function Friend(props){
    var styleDiv = {
      position: 'relative',
      right: '40px',
      bottom: '360px',
      marginLeft: '75em',
    }
  return (
    <div style={styleDiv}>
      <h3>{props.userName}</h3>
      <button type='button'>Send Invite</button>
      <hr/>
    </div>
  );
}

Friend.propTypes = {
    userName: PropTypes.string,
  };
  
export default Friend;