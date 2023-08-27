import * as notificationsData from "../../notifications.json";
import { normalize, schema } from "normalizr";

export default function getAllNotificationsByUser(userId) {
  const notifications = normalized.entities.messages;
  const notificationsByUser = [];

  for (const key in notifications) {
    if (notifications[key].author === userId) {
      notificationsByUser.push(messages[notifications[key].context]);
    }
  }
  return notificationsByUser;
}

const user = new schema.Entity("users");

const message = new schema.Entity("messages", {}, { idAttribute: "guid" });

const notification = new schema.Entity("notifications", {
  author: user,
  context: message,
});

export const normalized = normalize(notificationsData.default, [notification]);
