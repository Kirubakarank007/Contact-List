import React from "react";
import ContactCard from "./ContactCard";

function ContactList(props){
    // console.log(props);
    const renderContactList=props.contacts.map((contacts)=>{
        return (
            <ContactCard contacts={contacts}></ContactCard>
        )
    })
    return (
       
        <div className="ui celled list">
            {renderContactList}
        </div>
    );
};
export default ContactList;