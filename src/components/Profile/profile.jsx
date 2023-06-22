import React from "react";
import './Profile.css'

const user = {
    name: "John",
    imageUrl: "",
    imageSize: 100
}
export default function Profile(){
    return(
        <div>
            <h1>{user.name}</h1>
        <img
        className="avatar"
        src={user.imageUrl}
        alt="photo"
        style={{width: user.imageSize,
        height: user.imageSize}}/>
        
        </div>

    );
}