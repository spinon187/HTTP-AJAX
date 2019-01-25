import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import UpdateForm from './UpdateForm';

const Friend = props => {
//     const id = props.match.params.id;

    return(
            <div className = 'friend'>
                <div className='top-line'>
                    <h1>Name: {props.friend.name}</h1>
                    {/* <button className='update-button'><NavLink to='/update'>Update Friend</NavLink></button> */}
                    <button className='delete' onClick={e=> props.RemoveFriend(e, props.friend.id)}>X</button>
                </div>
                <p>Age: {props.friend.age}</p>
                <p>Email: {props.friend.email}</p>
            </div>
        // </div>
    );
}

export default Friend;