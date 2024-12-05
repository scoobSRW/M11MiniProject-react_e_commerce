import React, { useState } from 'react';

const UpdateCustomerForm = ({ customer, onUpdate }) => {
  const [name, setName] = useState(customer.name);
  const [email, setEmail] = useState(customer.email);

  const handleUpdate = (e) => {
    e.preventDefault();
    onUpdate({ ...customer, name, email });
  };

  return (
    <form onSubmit={handleUpdate}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit">Update Customer</button>
    </form>
  );
};

export default UpdateCustomerForm;
