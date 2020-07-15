import React from "react";
import moment from "moment";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import axios from 'axios'

class FriendsList extends React.Component {
    state = {
        friends: [],
        newFriend: {
            id:'',
            name:'',
            age:'',
            email:''
        }
    };


    componentDidMount() {
        this.getData();
    }

    handleChange = e => {
         this.setState({
            newFriend: {
                ...this.state.newFriend,
               [e.target.name]: e.target.value
            }
        });
        console.log(this.state.friends);
        console.log('blah');
        console.log(this.state.newFriend);

        };
    
    

    addFriend =(e)=>{
        e.preventDefault();
        
        axiosWithAuth().post("/friends",this.state.newFriend)
    .then(res=>{
        console.log('hello');
        this.setState({
            friends:res.data
        })
        console.log(res.data);
    })
    .catch(err=>console.log({err}));
    }

   

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
                        name='name'
                        id='newFriendName'
                        placeholder='Name'
                        value = {this.state.newFriend.name}
                        onChange = { this.handleChange}
                    />
                    <input
                        type='text'
                        name='age'
                        id='newFriendAge'
                        placeholder='Age'
                        value = {this.state.newFriend.age}
                        onChange = { this.handleChange}

                    />
                    <input
                        type='text'
                        name='email'
                        id='newFriendEmail'
                        placeholder='Email'
                        value = {this.state.newFriend.email}
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
