import React from 'react';

const Contact = ({ contact, handleDelete }) => {
  return (
    <tr className="text-center">
      <td>{contact?.name}</td>
      <td>{contact?.email}</td>
      <td>{contact?.phone}</td>
      <td>{contact?.description}</td>

      <td>
        <button
          onClick={() => handleDelete(contact?._id)}
          className="btn btn-red-500 font-bold"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default Contact;
