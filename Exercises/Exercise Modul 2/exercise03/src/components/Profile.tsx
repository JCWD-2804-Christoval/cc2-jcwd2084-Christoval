import React from 'react';
import './Profile.css';

const Profile: React.FC = () => {
  return (
    <section className="profile">
      <h2>Profile</h2>
      <div className="profile-content">
        <div className="about-me">
          <h3>About me</h3>
          <p>I'm a fullstack web developer with experience in web design, programming, and more.</p>
          <img src="profile-pic.png" alt="Profile" className="profile-pic" />
        </div>
        <div className="details">
          <h3>Details</h3>
          <ul>
            <li>Email: christoval999@gmail.com</li>
            <li>Phone: +62 838 1032 xxxx</li>
            <li>Location: Jakarta, Indonesia</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Profile;
