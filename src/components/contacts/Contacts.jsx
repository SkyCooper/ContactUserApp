import React, { useEffect, useState } from 'react'
import Form from '../form/Form'
import List from '../list/List'

const Contacts = () => {
const [contacts, setContacts] = useState([
  {
    fullname: "Cooper",
    phoneNumber: 532 - 5443223232,
  },
  {
    fullname: "Sky",
    phoneNumber: 216 - 5443223232,
  },
]);

useEffect(() => {
  console.log(contacts)

}, [contacts])


  return (
    <div>
      <List contacts = {contacts} />
      <Form setContacts={setContacts} contacts={contacts} />
    </div>
  );
}

export default Contacts