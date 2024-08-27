import React from "react";
import { payWithRazorPay } from "../../../shared/services/payment";

export const UserInfo = ({total, email, image, name}) => {
    const payNow = ()=>{
        // console.log('in userInfo ', total);
        payWithRazorPay({name, email, total});
    }
    return (
        <div>
            <img src = {image}/>
            <div className="form-group">
                <label htmlFor="">Email :</label><br/>
                <label htmlFor="">{email}</label>
            </div>
            <div className="form-group">
                <label htmlFor="">Name</label>
                <label value ={name} className="form-control" type = "text" placeholder="">{name}</label>
            </div>
            {/* <div className="form-group">
                <label htmlFor="">Address</label>
                <textarea cols="30" rows = "10"></textarea>
            </div> */}
            <button onClick={payNow} className="btn btn-primary">Pay Now</button>
        </div>
    )
}