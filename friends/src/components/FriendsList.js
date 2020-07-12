import React, {useState} from "react";
import moment from "moment";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const FriendsList = () => {
    const [friend, setFriend] = useState({
        friend: {
            id: '',
            name: '',
            age: '',
            email: '',
        }
    });


    const componentDidMount= ()=> {
        getData();
    }

    const getData = () => {
        // fetch protected data from the API using axiosWithAuth
        axiosWithAuth()
            .get("/friends")
            .then(res => {
                console.log({ res });
                setFriend({
                    friend: res
                });
            })
            .catch(err => console.log({ err }));
    };

        return (
            <div>
                <h1>{friend.name}</h1>

            </div>
        );
    
}

export default FriendsList;
