import React from "react";
import ContactCard from "./ContactCard";

function ContactList(props){
    console.log(props);
    
    const deleteContactHandler=(id)=>{
        console.log('contact deleted');
        props.getContactId(id);
    };
    console.log('enter contact list')
    const contacts=[{
        id:'1',
        name:"kk",
        email:'kiruba'
    }]
    const renderContactList=contacts.map((contact)=>{
        return (
            <ContactCard 
            contact={contact} 
            clickHandler={deleteContactHandler}
            key={contact.id}
            />
            
        )
    })
    return (
       <div className="main">
        <h2>Contact List</h2>
        <div className="ui celled list">{renderContactList}</div>
        </div>
    );
};
export default ContactList;