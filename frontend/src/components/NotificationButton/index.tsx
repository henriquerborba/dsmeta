import icon from "../../assets/images/notification-icon.svg";
import "./styles.css";

function NotificationButton() {
    return (
        <div className="dsmeta-red-btn-container">
            <div className="dsmeta-red-btn">
                <img src={icon} alt="Notificar" />
            </div>
        </div>
    );
}

export default NotificationButton;
