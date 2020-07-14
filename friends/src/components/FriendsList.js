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
            console.log(this.state.friends);
                
        return (
            <div>
                {this.state.friends.map((item)=>{
                    return (
                        <div>
                        <h3>Name: {item.name}</h3>
                         <h4>Age: {item.age}</h4>
                        <h4>Email: {item.email}</h4>
                        </div>
                        
                    )
                })}
            </div>
        )
    }
}

export default FriendsList;
