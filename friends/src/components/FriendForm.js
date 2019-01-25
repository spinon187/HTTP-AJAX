import React from 'react';

const FriendForm = props => {
    return (
        <form className='friend-form' onSubmit={props.AddFriend}>
            <h1>New Friend</h1>
            <input
                type='text'
                name='name'
                onChange={props.HandleChanges}
                value={props.friend.name}
                placeholder='Name'
            />
            <input
                type='number'
                name='age'
                onChange={props.HandleChanges}
                value={props.friend.age}
                placeholder='Age'
            />
            <input
                type='email'
                name='email'
                onChange={props.HandleChanges}
                value={props.friend.email}
                placeholder='Email Address'
            />
            <button type='submit'>Add Friend</button>
        </form>
    );
}


export default FriendForm;