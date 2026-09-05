import { emailTransporter } from "./transport.js";
import { userActivationUrlEmailTemplate } from "./emailTemplates.js";
export const userActivationUrlEmail = async (obj) => {
  const transporter = emailTransporter();
  const info = await transporter.sendMail(userActivationUrlEmailTemplate(obj));
  console.log(info.messageId);
  return info.messageId;
};
