import { emailTransporter } from "./transport.js";
import {
  userActivationUrlEmailTemplate,
  userActivationNotification,
} from "./emailTemplates.js";
export const userActivationUrlEmail = async (obj) => {
  const transporter = emailTransporter();
  const info = await transporter.sendMail(userActivationUrlEmailTemplate(obj));
  console.log(info.messageId);
  return info.messageId;
};
export const userActivatedNotificationEmail = async (obj) => {
  const transporter = emailTransporter();
  const info = await transporter.sendMail(userActivationNotification(obj));
  console.log(info.messageId);
  return info.messageId;
};
