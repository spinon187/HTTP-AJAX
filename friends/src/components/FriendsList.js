import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import Friend from './Friend';
import './FriendsList.css';
import FriendForm from './FriendForm';

const emptyFriend = {
    name: '',
    age: '',
    email: ''
};

class FriendsList extends Component {
    constructor(props){
        super(props);
        this.state = {
            friends: [],
            friend: emptyFriend
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
        e.persist();
        this.setState(prevState => {
            return {
                friend: {
                    ...prevState.friend,
                    [e.target.name]: e.target.value
                }
            };
        });
    }
    
    AddFriend = () => {
        axios
            .post('http://localhost:5000/friends', this.state.friend)
            .then(response => {
                this.setState({friends: response.data});
                this.props.history.push('/');
            })
            .catch(error => {
                console.error('Function Error', error);
            })
    }

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
                        friend = {this.state.friend}
                        HandleChanges = {this.HandleChanges}
                        AddFriend = {this.AddFriend}
                    />}
                />
            </div>
        );
    }
}

export default FriendsList;