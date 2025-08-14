import React, { useState } from "react";
import "./Contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";

const Contact = () => {
  const [sendEmail, setSendEmail] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "62480016-caa2-4037-839d-6aa386bf1e64");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      // alert(res.message);
      setSendEmail(true);
    }
  };

  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            I'm currently avaliable to take on new projects, so feel free to
            send me a message about anything that you want me to work on. You
            can contact anytime.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" />
              <p>dashrathbshinde@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="" />
              <p>+91 8087828173</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="" />
              <p>Pune, Maharashtra, India</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder="Enter your name" name="name" />
          <label htmlFor="">User Email</label>
          <input type="email" placeholder="Enter your email" name="email" />
          <label htmlFor="">Write your message here</label>
          <textarea
            name="message"
            rows="8"
            placeholder="Enter your message"
          ></textarea>
          <button type="submit" className="contact-submit">
            Submit now
          </button>
          <div className="email-notfication-container">
            {sendEmail ? (
              <div>
                <p>Email sent successfully!</p>
              </div>
            ) : (
              <div>
                <p></p>
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;

// import React, { useState } from "react";
// import HCaptcha from "@hcaptcha/react-hcaptcha";
// import "./Contact.css";
// import theme_pattern from "../../assets/theme_pattern.svg";
// import mail_icon from "../../assets/mail_icon.svg";
// import location_icon from "../../assets/location_icon.svg";
// import call_icon from "../../assets/call_icon.svg";

// const Contact = () => {
//   const [sendEmail, setSendEmail] = useState(false);
//   const [captchaToken, setCaptchaToken] = useState(null);

//   const onSubmit = async (event) => {
//     event.preventDefault();
//     if (!captchaToken) {
//       alert("Please complete the CAPTCHA");
//       return;
//     }

//     const formData = new FormData(event.target);
//     formData.append("access_key", "62480016-caa2-4037-839d-6aa386bf1e64");
//     formData.append("h-captcha-response", captchaToken);

//     const object = Object.fromEntries(formData);
//     const json = JSON.stringify(object);

//     const res = await fetch("https://api.web3forms.com/submit", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json",
//       },
//       body: json,
//     }).then((res) => res.json());

//     if (res.success) {
//       console.log("Success", res);
//       setSendEmail(true);
//     } else {
//       console.log("Error", res);
//     }
//   };

//   const handleCaptchaVerify = (token) => {
//     setCaptchaToken(token);
//   };

//   return (
//     <div id="contact" className="contact">
//       <div className="contact-title">
//         <h1>Get in touch</h1>
//         <img src={theme_pattern} alt="" />
//       </div>
//       <div className="contact-section">
//         <div className="contact-left">
//           <h1>Let's talk</h1>
//           <p>
//             I'm currently available to take on new projects, so feel free to
//             send me a message about anything that you want me to work on. You
//             can contact anytime.
//           </p>
//           <div className="contact-details">
//             <div className="contact-detail">
//               <img src={mail_icon} alt="" />
//               <p>greatstackdev@gmail.com</p>
//             </div>
//             <div className="contact-detail">
//               <img src={call_icon} alt="" />
//               <p>+772-825-524</p>
//             </div>
//             <div className="contact-detail">
//               <img src={location_icon} alt="" />
//               <p>CA, United States</p>
//             </div>
//           </div>
//         </div>
//         <form onSubmit={onSubmit} className="contact-right">
//           <label htmlFor="name">Your Name</label>
//           <input
//             type="text"
//             placeholder="Enter your name"
//             name="name"
//             required
//           />
//           <label htmlFor="email">User Email</label>
//           <input
//             type="email"
//             placeholder="Enter your email"
//             name="email"
//             required
//           />
//           <label htmlFor="message">Write your message here</label>
//           <textarea
//             name="message"
//             rows="8"
//             placeholder="Enter your message"
//             required
//           ></textarea>
//           <HCaptcha
//             sitekey="YOUR_HCAPTCHA_SITE_KEY"
//             onVerify={handleCaptchaVerify}
//           />
//           <button type="submit" className="contact-submit">
//             Submit now
//           </button>
//           <div className="email-notfication-container">
//             {sendEmail ? (
//               <div>
//                 <p>Email sent successfully!</p>
//               </div>
//             ) : (
//               <div>
//                 <p></p>
//               </div>
//             )}
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Contact;
