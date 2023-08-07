import "./Notifications.css";
import NotificationItem from "./NotificationItem";
import PropTypes from "prop-types";
import { NotificationItemShape } from "./NotificationItemShape";

function Notifications({ displayDrawer, listNotifications }) {
  // displayDrawer = true;
  return (
    <>
      <div className="menuItem">Your notifications</div>
      {displayDrawer ? (
        <div className="Notifications">
          <button
            style={{ float: "right" }}
            aria-label="Close"
            onClick={() => {
              console.log("Close button has been clicked");
            }}
          >
            <img src="./close-icon.png" alt="close-icon" />
          </button>
          {listNotifications ? (
            <>
              <p>Here is the list of notifications</p>
              {listNotifications.map((notice) => (
                <ul key={notice.id}>
                  <NotificationItem
                    type={notice.type}
                    value={notice.value}
                    html={notice.html}
                  />
                </ul>
              ))}
            </>
          ) : (
            <p>No new notification for now</p>
          )}
        </div>
      ) : (
        <div className="Notifications" style={{ display: "none" }}></div>
      )}
    </>
  );
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

Notifications.defaultProp = {
  displayDrawer: false,
};

export default Notifications;
