// ProfileDropdown.js
import React from 'react';
import './ProfileDropdown.css';

const ProfileDropdown = ({ open, onClose }) => {
  return (
    <>
      {open && (
        <div className="overlay" onClick={onClose}></div>
      )}
      <div
        className={`dropdown-menu${open ? ' show' : ''}`}
        style={{ width: 256, height: 220 }}
      >
        <div className="dropdown-item">
          <span className="icon user"></span>
          My details
        </div>
        <div className="dropdown-item">
          <span className="icon calendar"></span>
          My calendar
        </div>
        <div className="dropdown-item">
          <span className="icon vacation"></span>
          Vacations
        </div>
        <div className="dropdown-item">
          <span className="icon cv"></span>
          Corporate CV
        </div>
        <div className="dropdown-item">
          <span className="icon rocket"></span>
          Perfomance review
        </div>
      </div>
    </>
  );
};

export default ProfileDropdown;
