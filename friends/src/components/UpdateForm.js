import React from 'react';


const UpdateForm = props => {
    return (
        <form className='friend-form' onSubmit={props.UpdateFriend}>
            <h1>Update Friend</h1>
            <input
                type='text'
                name='name'
                onChange={props.HandleChanges}
                value={props.name}
                placeholder='Name'
            />
            <input
                type='number'
                name='age'
                onChange={props.HandleChanges}
                value={props.age}
                placeholder='Age'
            />
            <input
                type='email'
                name='email'
                onChange={props.HandleChanges}
                value={props.email}
                placeholder='Email Address'
            />
            <button type='submit'>Update Friend</button>
        </form>
    );
}


export default UpdateForm;