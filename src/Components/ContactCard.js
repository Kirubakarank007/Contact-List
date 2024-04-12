import React from "react";
import user from '../Images/user.jpg'
const ContactCard = (props) =>{
    const {id,name,email}=props.contact;
    console.log('enterd in Contact card')
    return(
        <div className="item">
            <img className="ui avatar image" src={user} alt="user"/>
        <div className="content" style={{width:'95%',marginTop:'7px'} }>
            <div className="header">{name}</div>
            <div className="items">{email}
            <i className="trash alternate outline icon" 
            style={{color:'red',marginTop:'7px',alignItems:'end',justifyContent:'end'}}
            onClick={()=>props.clickHandler(id)}></i>
            </div>
        </div>
        </div>
    );

}
export default ContactCard;