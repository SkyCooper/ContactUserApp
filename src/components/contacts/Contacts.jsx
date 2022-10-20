import React, { useEffect, useState } from 'react'
import Form from '../form/Form'
import List from '../list/List'

const Contacts = () => {
const [contacts, setContacts] = useState([])

useEffect(() => {
  console.log(contacts)

}, [contacts])


  return (
    <div>
      <List />
      <Form setContacts={setContacts} contacts={contacts} />
    </div>
  );
}

export default Contacts