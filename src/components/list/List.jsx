import React, { useState } from "react";

const List = ({ contacts }) => {
  const [filtertext, setFiltertext] = useState("");
  const filtered = contacts.filter((item) => {
    return Object.keys(item).some((key) => 
    item[key]
    .toString()
    .toLowerCase()
    .includes(filtertext.toLowerCase())
    );
  });

  console.log('filtered', filtered)
  return (
    <div>
      <input
        type="text"
        placeholder="Filter contact"
        value={filtertext}
        onChange={(e) => setFiltertext(e.target.value)}
      />
      <p className="title"><span>Name</span><span>Phone Number</span></p>
      <ul className="list">
        {filtered.map((contact, index) => {
          return (
            <li key={index}>
              <span>{contact.fullname}</span>
              <span>{contact.phoneNumber}</span>
            </li>
          );
        })}
      </ul>
      <p>Total contacts : {filtered.length}</p>
    </div>
  );
};

export default List;
