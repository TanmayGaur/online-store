import React, { useState} from "react";
import { OAuth } from "../../../shared/services/oauth";
import {UserInfo } from "../../user/pages/UserInfo";

export const Pay = ({total})=>{
    const [user, setUser] = useState(null);
    const orderNow = async()=>{
        const usercred = await OAuth();
        console.log('user info ', usercred)
        console.log('.....',total)
        setUser(usercred.user);
    }
    return (
        <>
            {!user && <button onClick={orderNow} className="btn btn-primary">Order Now</button>}
            { user && <UserInfo total = {total} email = {user.email} name={user.displayName} image = {user.photo}/>}
        </>
    )
}
