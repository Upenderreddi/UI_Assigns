// ProfileApp.tsx or ProfileApp.jsx

import React, { useState } from 'react';

// 1. Header Component
const Header = () => (
  <h2>Welcome to My Profile App</h2>
);

// 2. UserProfile Component
const UserProfile = ({ name, email, age }) => {
  const [showEmail, setShowEmail] = useState(true);

  const toggleEmail = () => {
    setShowEmail(prev => !prev);
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem', maxWidth: '400px', margin: '1rem auto' }}>
      <p>👤 <strong>Name:</strong> {name}</p>
      {showEmail && <p>📧 <strong>Email:</strong> {email}</p>}
      <p><strong>Age:</strong> {age}</p>
      <button onClick={toggleEmail}>
        {showEmail ? 'Hide Email' : 'Show Email'}
      </button>
    </div>
  );
};

// 3. Profile Root Component
const Profile = () => {
  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <Header />
      <UserProfile name="Alice" email="alice@example.com" age={25} />
    </div>
  );
};

export default Profile;
