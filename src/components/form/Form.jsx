import React, { useEffect, useState } from "react";

const initialFormValues = { fullname: "", phoneNumber: "" };

const Form = ({ setContacts, contacts }) => {
  const [form, setForm] = useState({ fullname: "", phoneNumber: "" });
  // const [form, setForm] = useState(initialFormValues);

  const inputChange = (e) => {
    return setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    if(form.fullname === "" || form.phoneNumber === "") {
      alert("Enter your info");
      return false
    }
      
    setContacts([...contacts, form]);
    console.log(form);

    // form içini temizlemek için-1;
    // setForm({ fullname: "", phoneNumber: "" });

    // form içini temizlemek için -2;
    // setForm(initialFormValues);
  };

  // form içini temizlemek için -3;
  useEffect(() => {
    // setForm({ fullname: "", phoneNumber: "" });
    // veya
    setForm(initialFormValues);
  }, [contacts]);

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
      <div className="btnContainer">
        <button>Add</button>
      </div>
    </form>
  );
};

export default Form;
