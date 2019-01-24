import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import axios from 'axios';
import Friend from './Friend';
import './FriendsList.css';
import FriendForm from './FriendForm';
import UpdateForm from './UpdateForm';

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
                console.error('Addition Error', error);
            })
    }

    RemoveFriend = (e, friendID) => {
        e.preventDefault();
        axios
            .put(`http://localhost:5000/friends/${friendID}`, this.state.friend)
            .then(response => {
                this.setState({friends: response.data});
                this.props.history.push('/');
            })
            .catch(error => {
                console.error('Deletion Error', error);
            })
    }

    UpdateFriend = friendID => {
        axios
            .put(`http://localhost:5000/friends/${friendID}`)
            .then(response => {
                this.setState({friends: response.data});
            })
            .catch(error => {
                console.error('Update Error', error);
            })
    }

    render(){
        return(
            <div className='big-box'>
                <div className='friends-list'>
                    <div className='button-box'>
                        <NavLink to='/form'>
                            <button className='friend-form-button'>Add More Friends</button>
                        </NavLink>
                        <NavLink to='/update'>
                            <button className='friend-form-button'>Update Friends</button>
                        </NavLink>
                    </div>
                    {this.state.friends.map(friend => (
                        <Route
                            path='/' 
                            render={props => <Friend {...props}
                                key={friend.id}
                                friend = {friend} 
                                friends = {this.state.friends}
                                RemoveFriend = {this.RemoveFriend}
                            />}
                        />
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
                {/* <Route
                    exact path='/update'
                    render={props => <UpdateForm {...props}
                        friend = {this.state.friend}
                        HandleChanges = {this.HandleChanges}
                        AddFriend = {this.AddFriend}
                    />}
                /> */}
            </div>
        );
    }
}

export default FriendsList;