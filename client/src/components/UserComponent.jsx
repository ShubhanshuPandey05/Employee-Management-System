import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function UserComponent({ Data }) {
  console.log(Data);
  const navigator = useNavigate();
  return (
    <div className='mt-12'>
      <h1 className="text-2xl font-bold mb-8 text-center">All Employees</h1>
      <div className="flex flex-wrap justify-center">
        {Data.map((user, index) => (
          <div key={index} className="bg-white shadow-lg rounded-xl overflow-hidden m-5 h-96 w-72 transform hover:scale-105 transition-transform duration-300">
            <div className="p-6">
              <h2 className="text-xl font-bold mb-2 text-gray-800">{user.Fullname}</h2>
              <p className="text-gray-600"><strong>DOB:</strong> {user.Dob}</p>
              <p className="text-gray-600"><strong>Gender:</strong> {user.Gender}</p>
              <p className="text-gray-600"><strong>Salary:</strong> {user.Salary}</p>
              <p className="text-gray-600"><strong>Joined:</strong> {new Date(user.createdAt).toLocaleDateString()}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
