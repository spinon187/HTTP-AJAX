import React from 'react';

const FriendForm = props => {
    return (
        <form className='friend-form' onSubmit={props.AddFriend}>
            <h1>New Friend</h1>
            <input
                type='text'
                name='name'
                onChange={props.HandleChanges}
                placeholder='Name'
            />
            <input
                type='number'
                name='age'
                onChange={props.HandleChanges}
                placeholder='Age'
            />
            <input
                type='email'
                name='email'
                onChange={props.HandleChanges}
                placeholder='Email Address'
            />
            <button type='submit'>Add Friend</button>
        </form>
    );
}


export default FriendForm;