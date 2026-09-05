export const userActivationUrlEmailTemplate = ({ email, name, url }) => {
  return {
    from: `"local library" <${process.env.SMTP_EMAIL}>`, // sender address
    to: "email, bob@example.com", // list of recipients
    subject: "Action required = Activate your new account", // subject line
    text: `Hello ${name} follow the link to activate your account:url`, // plain text body
    html: `<p>Hello ${name},</p>
    <br/>
    <br/>
    <p>follow the link to activate your account: </p>
    
    <a href="${url}">Activate Account
     <button style="background-color: #6663d5; border: none; color: white; padding: 10px 20px; text-align: center; text-decoration: none; display: inline-block; font-size: 16px; margin: 4px 2px; cursor: pointer;">
    Activate Account
  </button></a>
  <br/>;`, // HTML body
  };
};
