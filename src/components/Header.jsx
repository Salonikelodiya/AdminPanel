import React, {useState} from 'react';
import image from "../assets/ProfilePic.jpg";
import { Typography } from "@mui/material";
import './Header.css';
import ProfileDropdown from './ProfileDropdown';


const Header = ({ toggleSidebar }) => {
  const [open, setOpen] = useState(false);

  return (<header className="headbar">
    <button className="menu-btn" onClick={toggleSidebar} aria-label="Toggle menu">
      &#9776;
    </button>

    <div className="profile-section"
    onClick={() => setOpen(!open)}
        style={{ cursor: "pointer" }}  
    >
      <span
        className="profile-picture"
        style={{
          width: 40,
          height: 40,
          overflow: 'hidden',
          borderRadius: '50%',
          objectFit: 'cover',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginRight: 10,
        }}
      >
        <img src={image} alt="Profile" style={{ width: '40px', height: '40px' }} />
      </span>
      <span className="user-info"> <Typography variant="body1" className="profile-name">Dominique Ch.</Typography></span>
      <svg className="dropdown-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 10L12 15L17 10H7Z" fill="#8E8E93" />
      </svg>
    </div>

    <div className="search-notif-section">
      <div className="search">     
   <svg width="20px" height="20px" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_233_3636)">
<path d="M12.9167 11.6667H12.2583L12.025 11.4417C12.8417 10.4917 13.3333 9.25833 13.3333 7.91667C13.3333 4.925 10.9083 2.5 7.91667 2.5C4.925 2.5 2.5 4.925 2.5 7.91667C2.5 10.9083 4.925 13.3333 7.91667 13.3333C9.25833 13.3333 10.4917 12.8417 11.4417 12.025L11.6667 12.2583V12.9167L15.8333 17.075L17.075 15.8333L12.9167 11.6667ZM7.91667 11.6667C5.84167 11.6667 4.16667 9.99167 4.16667 7.91667C4.16667 5.84167 5.84167 4.16667 7.91667 4.16667C9.99167 4.16667 11.6667 5.84167 11.6667 7.91667C11.6667 9.99167 9.99167 11.6667 7.91667 11.6667Z" fill="#2F80ED"/>
</g>
<defs>
<clipPath id="clip0_233_3636">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>
</svg>
<input 
placeholder='Quick Search'
  type="Search"
  id="name"
  name="name"
  required
  minlength="4"
  maxlength="8"
  size="14px"
  border="disabled"
  style={{ border: 'none', width:'200px', outline: 'none', marginLeft: '0px', fontFamily: 'Roboto, sans-serif', fontSize: '14px', color: '#BDBDBD',
fontWeight: 400,
lineHeight: '20px',

letterSpacing:'0.5px'
}}
  // value={searchValue}
  // onChange={handleInputChange}
   />

      </div>
     <svg className="notif" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 22C13.1 22 14 21.1 14 20H10C10 21.1 10.89 22 12 22ZM18 16V11C18 7.93 16.36 5.36 13.5 4.68V4C13.5 3.17 12.83 2.5 12 2.5C11.17 2.5 10.5 3.17 10.5 4V4.68C7.63 5.36 6 7.92 6 11V16L4 18V19H20V18L18 16Z" fill="#2F80ED" />
        <circle cx="17" cy="6" r="4.5" fill="#EB5757" stroke="white" />
      </svg>
    </div>
    <ProfileDropdown open={open} onClose={() => setOpen(false)} />
  </header>
);}

export default Header;
