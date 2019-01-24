import React from 'react';

const Friend = props => {
//     const id = props.match.params.id;

    return(
        <div className = 'friend'>
            <div className='top-line'>
                <h1>Name: {props.friend.name}</h1>
                <button className='delete' onClick={e=> props.RemoveFriend(e, props.friend.id)}>X</button>
            </div>
            <p>Age: {props.friend.age}</p>
            <p>Email: {props.friend.email}</p>
        </div>
    );
}

export default Friend;