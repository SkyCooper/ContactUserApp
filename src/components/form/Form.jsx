import React, { useState } from "react";

const Form = ({ setContacts, contacts }) => {
  const [form, setForm] = useState({ fullname: "", phoneNumber: "" });

  const inputChange = (e) => {
    return setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    (form.fullname === "" || form.phoneNumber === "") &&
      alert("Enter your info");
    setContacts([...contacts, form]);
    console.log(form);

    // form içini temizlemek için;
    setForm({ fullname: "", phoneNumber: "" });

    // form içini temizlemek için;
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          value={form.fullname}
          name="fullname"
          placeholder="Full Name"
          onChange={inputChange}
        />
      </div>
      <div>
        <input
          value={form.phoneNumber}
          name="phoneNumber"
          placeholder="Phone Number"
          onChange={inputChange}
        />
      </div>
      <div>
        <button>Add</button>
      </div>
    </form>
  );
};

export default Form;
