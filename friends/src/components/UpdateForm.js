import React from 'react';


const UpdateForm = props => {
    return (
        <form className='friend-form' onSubmit={() => props.UpdateFriend(props.friend.id)}>
            <h1>Update Friend</h1>
            <input
                type='text'
                name='name'
                onChange={props.UpdateChanges}
                value={props.friend.name}
                placeholder='Name'
            />
            <input
                type='number'
                name='age'
                onChange={props.UpdateChanges}
                value={props.friend.age}
                placeholder='Age'
            />
            <input
                type='email'
                name='email'
                onChange={props.UpdateChanges}
                value={props.friend.email}
                placeholder='Email Address'
            />
            <button type='submit'>Update Friend</button>
        </form>
    );
}


export default UpdateForm;