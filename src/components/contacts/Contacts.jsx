import React, { useEffect, useState } from 'react'
import Form from '../form/Form'
import List from '../list/List'

const Contacts = () => {
const [contacts, setContacts] = useState([
  {
    fullname: "Cooper SKY",
    phoneNumber: "90 533 4441212",
  },
  {
    fullname: "Gehad SAMY",
    phoneNumber: "44 166 122345",
  },
  {
    fullname: "Gerard PIQUE",
    phoneNumber: "90 153 123345",
  },
  {
    fullname: "Noah ADAMS",
    phoneNumber: "90 44 123445",
  },
  {
    fullname: "Felix FRANCO",
    phoneNumber: "90 533 4441213",
  },
]);

useEffect(() => {
  console.log(contacts)

}, [contacts])


  return (
    <div className='container'>
      <h1>Contacts ☎</h1>
      <Form setContacts={setContacts} contacts={contacts} />
      <List contacts = {contacts} />
    </div>
  );
}

export default Contacts