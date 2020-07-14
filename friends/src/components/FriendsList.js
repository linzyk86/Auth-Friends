import React from "react";
import moment from "moment";
import { axiosWithAuth } from "../utils/axiosWithAuth";

class FriendsList extends React.Component {
    state = {
        friends: []
    };

   


    componentDidMount() {
        this.getData();
    }

    // addFriend =()=>{
    //     let newFriend = {...friends, newFriend}
    //     axiosWithAuth.post('/friends',newFriend)

    // }

   

    getData = () => {
        // fetch protected data from the API using axiosWithAuth
        axiosWithAuth()
            .get("/friends")
            .then(res => {
                console.log(res.data);
                this.setState({
                    friends: res.data
                });
            })

            .catch(err => console.log({ err }));
    };
    render() {
                
        return (
            <div>
            <div>
                <form onSubmit = {this.addFriend}>
                    <input
                        type='text'
                        name='newFriendName'
                        id='newFriendName'
                        placeholder='Name'
                        value = {this.state.newFriendName}
                        onChange = { this.handleChange}
                    />
                    <input
                        type='text'
                        name='newFriendAge'
                        id='newFriendAge'
                        placeholder='Age'
                        value = {this.state.newFriendAge}
                        onChange = { this.handleChange}

                    />
                    <input
                        type='text'
                        name='newFriendEmail'
                        id='newFriendEmail'
                        placeholder='Email'
                        value = {this.state.newFriendEmail}
                        onChange = { this.handleChange}

                    />
                    <button>Add Friend</button>
                </form>
            </div>
            <div>
                {this.state.friends.map((item)=>{
                    return (
                        <div className='friends'>
                        <h3>Name: {item.name}</h3>
                         <h4>Age: {item.age}</h4>
                        <h4>Email: {item.email}</h4>
                        </div>
                        
                    )
                })}
            </div>
            </div>
        )
    }
}

export default FriendsList;
