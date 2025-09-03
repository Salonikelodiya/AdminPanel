import React from 'react';
import './Sidebar.css';
const sidebarItems = [
  // ... (copy your sidebarItems array here)
    {
        label: 'Dashboard', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 13H11V3H3V13ZM3 21H11V15H3V21ZM13 21H21V11H13V21ZM13 3V9H21V3H13Z" fill="currentColor" />
        </svg>
    },
    {
        label: 'People', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 11C17.66 11 18.99 9.66 18.99 8C18.99 6.34 17.66 5 16 5C14.34 5 13 6.34 13 8C13 9.66 14.34 11 16 11ZM8 11C9.66 11 10.99 9.66 10.99 8C10.99 6.34 9.66 5 8 5C6.34 5 5 6.34 5 8C5 9.66 6.34 11 8 11ZM8 13C5.67 13 1 14.17 1 16.5V19H15V16.5C15 14.17 10.33 13 8 13ZM16 13C15.71 13 15.38 13.02 15.03 13.05C16.19 13.89 17 15.02 17 16.5V19H23V16.5C23 14.17 18.33 13 16 13Z"  fill="currentColor"/>
        </svg>
    },
    {
        label: 'Projects', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 3H14.82C14.4 1.84 13.3 1 12 1C10.7 1 9.6 1.84 9.18 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM12 3C12.55 3 13 3.45 13 4C13 4.55 12.55 5 12 5C11.45 5 11 4.55 11 4C11 3.45 11.45 3 12 3ZM14 17H7V15H14V17ZM17 13H7V11H17V13ZM17 9H7V7H17V9Z"  fill="currentColor"/>
        </svg>
    },
    {
        label: 'Calendar', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.2505 12.75H12.7505V17.25H17.2505V12.75ZM15.7505 3V4.5H8.25047V3H6.00047V4.5H4.875C3.84366 4.5 3 5.34366 3 6.375V19.125C3 20.1563 3.84366 21 4.875 21H19.1255C20.1568 21 21.0005 20.1563 21.0005 19.125V6.375C21.0005 5.34366 20.1568 4.5 19.1255 4.5H18.0005V3H15.7505ZM19.1255 19.125H4.875V9.1875H19.1255V19.125Z"  fill="currentColor"/>
        </svg>

    },
    {
        label: 'Training', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 8.25H18V14.25H6V8.25Z"  fill="currentColor"/>
            <path d="M21 4.5H3C2.5875 4.5 2.25 4.8375 2.25 5.25V17.25C2.25 17.6625 2.57344 18 2.99062 18H21C21.4125 18 21.75 17.6625 21.75 17.25V5.25C21.75 4.8375 21.4125 4.5 21 4.5ZM19.5 15.75H4.5V6.75H19.5V15.75ZM3.75 21.75H6.42188L7.47656 18.75H4.83281L3.75 21.75ZM13.0969 2.25H10.9031L10.3641 3.75H13.6359L13.0969 2.25ZM17.5781 21.75H20.25L19.1719 18.75H16.5234L17.5781 21.75ZM10.875 18.75H13.125V20.25H10.875V18.75Z"  fill="currentColor"/>
        </svg>
    },
    {
        label: 'Timesheet', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 2.25V8.00625H6.00937L6 8.01562L9.99844 12L6 15.9938L6.00937 16.0031H6V21.75H18V16.0031H17.9906L18 15.9938L14.0016 12L18 8.01562L17.9906 8.00625H18V2.25H6ZM15.9984 16.4953V19.8469H8.00156V16.4953L12 12.5016L15.9984 16.4953ZM12 11.5031L8.00156 7.50937V4.10625H16.0031V7.50469L12 11.5031Z"  fill="currentColor"/>
        </svg>
    },
    {
        label: 'Reports', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_233_3688)">
                <path d="M6.225 17.25C5.27813 17.25 4.125 16.0969 4.125 15.15V7.5H3.675C2.89219 7.5 2.25 8.14219 2.25 8.925V21.75L4.99219 19.0312H15.075C15.8578 19.0312 16.5 18.3703 16.5 17.5828V17.25H6.225Z"  fill="currentColor"/>
                <path d="M20.1141 2.25H7.02656C6.12656 2.25 5.39062 2.98594 5.39062 3.88594V14.4844C5.39062 15.3844 6.12656 16.125 7.02656 16.125H18.1922L21.75 18.6094V3.88594C21.75 2.98594 21.0141 2.25 20.1141 2.25Z"  fill="currentColor"/>
            </g>
            <defs>
                <clipPath id="clip0_233_3688">
                    <rect width="24" height="24" fill="white" />
                </clipPath>
            </defs>
        </svg>
    },
    {
        label: 'Administration', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_233_3695)">
                <path d="M12.2344 6.99844V3H2.25V21H21.75V6.99844H12.2344ZM6.24375 18.9984H4.24687V16.9969H6.24375V18.9984ZM6.24375 15H4.24687V12.9984H6.24375V15ZM6.24375 11.0016H4.24687V9H6.24375V11.0016ZM6.24375 6.99844H4.24687V4.99687H6.24375V6.99844ZM10.2375 18.9984H8.24063V16.9969H10.2375V18.9984ZM10.2375 15H8.24063V12.9984H10.2375V15ZM10.2375 11.0016H8.24063V9H10.2375V11.0016ZM10.2375 6.99844H8.24063V4.99687H10.2375V6.99844ZM19.7531 18.9984H12.2344V16.9969H14.2313V15H12.2344V12.9984H14.2313V10.9969H12.2344V9H19.7531V18.9984ZM17.9906 11.0016H15.9938V13.0031H17.9906V11.0016ZM17.9906 15H15.9938V17.0016H17.9906V15Z"  fill="currentColor"/>
            </g>
            <defs>
                <clipPath id="clip0_233_3695">
                    <rect width="24" height="24" fill="white" />
                </clipPath>
            </defs>
        </svg>
    },
    {
        label: 'Help', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_233_3704)">
                <path d="M13.5469 19H10.4531V15.9531H13.5469V19ZM13.5 14.4062H10.5C10.5 9.67188 15 9.94844 15 6.95312C15 5.30312 13.65 3.98125 12 3.98125C10.35 3.98125 9 5.40625 9 7H6C6 3.67188 8.68594 1 12 1C15.3141 1 18 3.64375 18 6.95312C18 10.6984 13.5 11.125 13.5 14.4062Z"  fill="currentColor"/>
            </g>
            <defs>
                <clipPath id="clip0_233_3704">
                    <rect width="24" height="24" fill="white" />
                </clipPath>
            </defs>
        </svg>
    },

];

const Sidebar = ({ selected, setSelected }) => (
  <aside className="sidebar-parent">
    <nav className="sidebar">
      {sidebarItems.map(({ label, icon }) => (
        <div
          key={label}
          className={`sidebar-item${selected === label ? ' active' : ''}`}
          onClick={() => setSelected(label)}
        >
          <span className="sidebar-icon">{icon}</span>
          <span className="sidebar-label">{label}</span>
        </div>
      ))}
    </nav>
    <div className="camico-info">
      <div className="camico-title">CAMIOCA</div>
      <div className="camico-version">Version: 1.0.0.11</div>
    </div>
  </aside>
);

export default Sidebar;
