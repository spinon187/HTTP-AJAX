import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import Friend from './Friend';
import './FriendsList.css';
import FriendForm from './FriendForm';

class FriendsList extends Component {
    constructor(props){
        super(props);
        this.state = {
            friends: []
        };
    }

    componentDidMount() {
        axios
            .get('http://localhost:5000/friends')
            .then(response => {
                this.setState(() => ({ friends: response.data }));
            })
            .catch(error => {
                console.error('Server Error', error);
            });
    }

    HandleChanges = e => {
        this.setState({ [e.target.name]: e.target.value});
    }
    // addFriend

    render(){
        return(
            <div className='big-box'>
                <div className='friends-list'>
                    {this.state.friends.map(friend => (
                        <Friend key={friend.id} friend = {friend} />
                    ))}
                </div>
                <Route
                    exact path='/form'
                    render={props => <FriendForm {...props}
                        HandleChanges = {this.HandleChanges}
                    />}
                />
            </div>
        );
    }
}

export default FriendsList;