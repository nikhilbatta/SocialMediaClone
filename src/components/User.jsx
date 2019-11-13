import React from "react";
import PropTypes from "prop-types";

function User(props){
    var styleDiv = {
        position: 'relative',
        marginLeft: '20em',
    }
  return (
    <div style={styleDiv}>
      <h3>{props.userName} - {props.location}</h3>
      <p><em>{props.userPost}</em></p>
      <hr/>
    </div>
  );
}

User.propTypes = {
    userName: PropTypes.string,
    location: PropTypes.string,
    userPost: PropTypes.string
  };
  
export default User;