import React from 'react';
import axios from 'axios';

const Friend = props => {
    return(
        <div className = 'friend' key={props.id}>
            <h1>Name: {props.friend.name}</h1>
            <p>Age: {props.friend.name}</p>
            <p>Email: {props.friend.email}</p>
        </div>
    );
}

export default Friend;