import React from 'react'

const List = ({contacts}) => {
  return (
    <div>
      <input type="text" placeholder='Filter contact' />
      <ul>
        {
          contacts.map((contact, index)=>{
            return(
              <li key={index}>{contact.fullname}</li>

            )
          })
        }
      </ul>
    </div>
  )
}

export default List