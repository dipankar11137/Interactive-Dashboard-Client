import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Contact from './Contact';

const Contacts = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/contact')
      .then(res => res.json())
      .then(data => setContacts(data));
  }, [contacts]);

  const handleDelete = id => {
    const proceed = window.confirm('Are You Sure ?');
    if (proceed) {
      const url = `http://localhost:5000/contact/${id}`;
      fetch(url, {
        method: 'DELETE',
      })
        .then(res => res.json())
        .then(data => {
          const remaining = contacts.filter(product => product._id !== id);
          setContacts(remaining);
          toast.success('Successfully Delete');
        });
    }
  };
  return (
    <div className=" mx-6 mt-5 pb-20">
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          {/* head */}
          <thead>
            <tr className="text-center ">
              <th className="text-xl">Name</th>
              <th className="text-xl">Email</th>
              <th className="text-xl">Phone</th>
              <th className="text-xl">Description</th>

              <th className="text-xl">Delete</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map(contact => (
              <Contact
                key={contact._id}
                contact={contact}
                handleDelete={handleDelete}
              ></Contact>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Contacts;
