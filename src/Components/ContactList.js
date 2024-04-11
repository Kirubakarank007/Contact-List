import React from "react";
import ContactCard from "./ContactCard";

function ContactList(props){
    console.log(props);
    
    const deleteContactHandler=(id)=>{
        props.getContactId(id)
    };
    console.log('enter coontact list')
    const renderContactList=props.contacts.map((contacts)=>{
        return (
            <ContactCard contacts={contacts} clickHandler={deleteContactHandler}></ContactCard>
            
        )
    })
    return (
       
        <div className="ui celled list">
            {renderContactList}
        </div>
    );
};
export default ContactList;