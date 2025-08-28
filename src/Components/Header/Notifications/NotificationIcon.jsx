import { Link } from 'react-router-dom';
import { IoMdNotificationsOutline } from 'react-icons/io';
import './NotificationIcon.css';

const NotificationIcon = () => {
  return (
    <div className="header__notification-container">
      <Link to="/notificacion">
        <IoMdNotificationsOutline className="header__notification-icon" />
      </Link>
    </div>
  );
};

export default NotificationIcon;
