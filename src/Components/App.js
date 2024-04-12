import React,{useState , useEffect} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import { v4 as uuidv4 } from 'uuid';
import Header from './Header'
import AddContact from './AddContact'
import ContactList from './ContactList'

function App() {
  const LOCAL_STORAGE_KEY="contacts";
  const [contacts,setContacts]=useState([]);

  const addContactHandler = (contact)=> {
    console.log(contact);
    setContacts([...contacts,{id :uuidv4(), ...contact}]);
   
  }
  useEffect(()=>{
    const retriveContacts= JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if(retriveContacts) setContacts(retriveContacts)
   },[]);

  const removeContactHandler =(id) =>{
    const newContactList=contacts.filter((contact)=>{
      return contact.id !==id;
    });
    setContacts(newContactList);
  };

  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts));
  },[contacts]);

  return (
    <div className='ui container'>
    <Router>
      <Header/>
      <Route path='/add' Component={AddContact}/>
      <Route path ='/' Component={ContactList}/>
      {/* // <AddContact addContactHandler={addContactHandler}/>
      // <ContactList contacts={contacts} getContactId={removeContactHandler}/> */}
    </Router>  
    </div> 
  );
}

export default App;
