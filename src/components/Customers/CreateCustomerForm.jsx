import React, { useState } from 'react';

const CreateCustomerForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, email });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Customer Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Customer Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit">Create Customer</button>
    </form>
  );
};

export default CreateCustomerForm;
